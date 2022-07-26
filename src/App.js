import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import {login, logout, selectUser} from "./features/UserSlice"
import Paypal from "./Pages/Paypal";

function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch()
  useEffect(()=>{
    const unsuscribe=auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({uid: userAuth.uid,email:userAuth.email}))
      } else {
        dispatch(logout)
      }
    })
    return unsuscribe;
  },[dispatch])
  return (
    <div>
          <Route path="/login" exact>
          <Login />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/checkout" exact>
            <Paypal />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
      
    </div>
  );
}

export default App;
