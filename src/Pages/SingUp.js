import React, { useState } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import Home from "./Home";
import "./Singup.css";
const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState("");
  const [useRegister, setUseRegister] = useState(false);
  const [render, setRender] = useState(false);
  const history = useHistory();
  const SingIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((e) => history.push("/"))
      .catch((err) => alert(e.message));
  };
  const Register = (e) => {
    e.preventDefault();
    if (password === validatePassword) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((e) => history.push("/"))
        .catch((err) => alert(err.message));
    } else {
      alert("The password not match");
    }
  };
  const RegistrarUserNew = (e) => {
    e.preventDefault();
    if (useRegister === true) {
      setUseRegister(false);
    } else {
      setUseRegister(true);
    }
  };
  return (
    <div className="singupRoot">
      <form className="singupForm">
        {useRegister === false ? (
          <>
            <div className="divh5">
              <h5>Sign In</h5>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="singupInput"
              id="email"
              placeholder="Email"
            ></input>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="singupInput"
              id="password"
              placeholder="Password"
            ></input>
            <div className="divDown">
              <button className="singupButton" type="submit" onClick={SingIn}>
                Sign In
              </button>
            </div>
            <div className="divDown">
              <span className="SpanDown">New in TINOFLIX?.. </span>
              <span onClick={RegistrarUserNew} className="SpanLink">
                Sign up Now
              </span>
            </div>
          </>
        ) : (
          //   Register
          <>
            <div className="divh5">
              <h5>Register</h5>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="singupInput"
              id="email"
              placeholder="Put Your Email"
            ></input>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="singupInput"
              id="password"
              placeholder="Put Your New Password"
            ></input>
            <input
              type="password"
              value={validatePassword}
              onChange={(e) => setValidatePassword(e.target.value)}
              className="singupInput"
              id="password"
              placeholder="Put Your Password Again"
            ></input>
            <div className="divDown">
              <button className="singupButton" type="submit" onClick={Register}>
                Sign Up
              </button>
            </div>
            <div className="divDown">
              <span className="SpanDown">You Already Register? </span>
              <span onClick={RegistrarUserNew} className="SpanLink">
                Login
              </span>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
export default SingUp;
