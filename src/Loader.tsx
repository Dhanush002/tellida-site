import React from "react";
import "./Loader.css";
import logo from "../src/assets/logo.png"; // Replace with your logo path

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={logo} alt="Loading..." className="blinking-logo" />
    </div>
  );
};

export default Loader;
