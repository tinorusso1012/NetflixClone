import React from "react";
import { useDispatch } from "react-redux";
import "./Plans.css";
import { setPrice } from "../features/PriceSlice";
import { Link } from "react-router-dom";

const Plans = ({ cost, children, color = "red" }) => {
  const dispatch = useDispatch();
  const handleClick = (cost) => {
    dispatch(setPrice(cost));
  };
  let preference = {
    item: [
      {
        title: "Suscripcion a TINOFLEX",
        unit_price: cost,
        quantity: 1,
      },
    ],
    back_urls: {
      "succes": "http://localhost:3000/feedback/",
      "failure":  "http://localhost:3000/feedback/",
      "pending": "http://localhost:3000/feedback/",
    }
  };
  return (
    <div className="plansRoot">
      <h3>
        {children} ${cost}
      </h3>
      <Link to="/checkout">
        <button className="plansButton" onClick={() => handleClick(cost)}>
          Suscribe
        </button>
      </Link>
    </div>
  );
};

export default Plans;
