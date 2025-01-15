import React from "react";
import "./Navbar.css";
import images from "../assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo-container">
        <img src={images?.logo} alt="logo" className="navbar-logo" />
        <div className="navbar-logo-text">
          <p className="logo-title">KREDITPE</p>
          <p className="logo-subtitle">Loan in 10 min Only</p>
        </div>
      </div>
      
      <div className="navbar_link">
        <img src={images?.Link} alt="link" />
        <img src={images?.playStore} alt="play store" />
      </div>
    </div>
  );
};

export default Navbar;
