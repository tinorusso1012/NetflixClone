import React from "react";
import Header from "../components/Header";
import Plans from "../components/Plans";
import { auth } from "../firebase";
import PerfilNet from "../images/Perfil mas Chico net.png";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/UserSlice";
const Profile = () => {
  const email = useSelector(selectUser);
  const singout = () => {
    auth.signOut();
  };
  return (
    <div className="rootProfile">
      <div className="divHeader">
        <Header />
      </div>
      {console.log(email)}
      <div className="profileTop">
        <img src={PerfilNet} alt="avatar"></img>
        <h3>EDIT PROFILE</h3>
      </div>
      <div className="profileInfo ">
        <div className="profileDeatil"></div>
        <h6 className="profileEmailUsuario">
          {email ? email.email : "EMAIL USUARIO"}
        </h6>
        <div className="profilePlans">
          <h5>Plans</h5>
        </div>
        <Plans cost={379}>Plan Basico: </Plans>
        <Plans cost={639}>Plan Estàndar:</Plans>
        <Plans cost={939}>Plan Premium:</Plans>
      </div>
      <div className="profileSingOut">
        <Link to="/login">
          <button onClick={singout} className="Profilebutton">
            Sign Out
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Profile;
