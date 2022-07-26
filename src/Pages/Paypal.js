import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectPrice } from "../features/PriceSlice";
const Paypal = () => {
  const price = useSelector(selectPrice);
  const paypal = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, action, err) => {
          return action.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "TINOFLIX SUBSCRIPTION",
                amount: {
                  currency_code: "USD",
                  value: price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => console.log(err),
      })
      .render(paypal.current);
  }, []);
  return <div ref={paypal}></div>;
};

export default Paypal;
