import React from "react";
import "./CallMain.css";
import Rec69Image from "../../assets/CallMain.jpg";
import { useNavigate } from "react-router-dom";
const CallMain: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="call-main">
      <div className="frame-149-callmain">
        <div className="frame-194">
          <h2 className="call-main-title">Contact Centre Services</h2>
          <p className="call-main-description">
          24/7 call center support for seamless customer interactions, improving service and client satisfaction.
          </p>
        </div>
        <button
          className="call-main-button"
          onClick={() => navigate("/services/call-centre")}
        >
          Learn More 
          <img
            src={require("../../assets/chevron-right.png")}
            alt="Chevron Right Icon"
            className="grow-chevron-icon"
          />
        </button>
      </div>

      <div className="image-container-callmain ">
        <div className="rectangle-image-callmain" />
        <img
          src={Rec69Image}
          alt="call Main"
          className="recImage-callmain"
        />
      </div>
    </section>
  );
};

export default CallMain;
