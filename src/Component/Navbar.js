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

      <div className="navbar-buttons">
        <button className="navbar-button">APPLE</button>
        <button className="navbar-button">Local</button>
      </div>
    </div>
  );
};

export default Navbar;
