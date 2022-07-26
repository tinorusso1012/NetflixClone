import { AppBar, Avatar, IconButton, Toolbar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import icon from "../images/no_profile.webp";

const Header = () => {
  const [show, setShow] = useState("Headerbackground");
  const [profile, setProfile] = useState(false);
  const history = useHistory();
  const hideHeader = () => {
    if (window.scrollY > 100) {
      setShow("HeaderTransparent");
    } else {
      setShow("Headerbackground");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hideHeader);
    return () => window.removeEventListener("scroll", hideHeader);
  }, []);
  return (
    // <AppBar position="sticky" elevation={0} id="root" className={show}>
    //   <Toolbar className="ToolbarHeader">
    //     <div
    //       onClick={() => {
    //         history.push("/");
    //       }}
    //     >
    //       <h1 className="HeaderName">TINOFLIX</h1>
    //     </div>
    //     <Link to="/profile">
    //       <Avatar variant="square" className="AvatarHeader" />
    //     </Link>
    //   </Toolbar>
    // </AppBar>
    <header className={show}>
      <nav class="navbar navbar-dark bg-dark">
        <Link to="/">
          <a class="navbar-brand" href="#" className="HeaderName">
            TINOFLIX
          </a>
        </Link>
        <Link to="/profile">
          <img src={icon} className="iconHeader"></img>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
