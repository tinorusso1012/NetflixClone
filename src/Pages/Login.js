import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import SingUp from "./SingUp";
function Login() {
  const [SingIn, setSingIn] = useState(true);
  return (
    <div className="rootLogin">
      <h1 className="LoginName">TINOFLIX</h1>
      <Link to="/login">
        <button
          className="IniciarSessionButton"
          onClick={() => setSingIn(false)}
        >
          Login
        </button>
      </Link>
      {!SingIn ? (
        <div className="DivSingUp">
          <SingUp />
        </div>
      ) : (
        <div className="InfoLogin">
          <div className="DivConteiner">
            <div className="DivInfo">
              <h4 className="Info1">Unlimited Films,TV Programs and More</h4>
            </div>
            <div className="DivInfo">
              <h5 className="Info2">Watch Anywhere. Cancel at any time</h5>
            </div>
            <div className="DivInfo">
              <h6 className="Info3">
                Ready To Watch? Enter your Email to create or restart your
                membership
              </h6>
            </div>
            <div className="divInput">
              <input
                placeholder="Example: elonmusk@gmail.com"
                className="input"
              ></input>
              <button className="inputButton">SEND</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Login;
