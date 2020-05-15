import React from "react";
import "./Header.css";
import icon from "../../images/satellite-dish-solid_white.svg";
import User from "../User/User";
import Navbar from "../Navbar/Navbar";

const Header = ({user}) => {
  return (
    <header className="Header">
      <div className="Header-nav">
        <Navbar />
      </div>
      <img
        src={icon}
        alt="Header icon for branding"
        className="Header-img"
      ></img>
      <div className="Header-user-info">
        <User user={user}/>
      </div>
    </header>
  );
};

export default Header;
