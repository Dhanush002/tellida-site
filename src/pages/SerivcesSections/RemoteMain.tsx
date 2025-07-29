import React from "react";
import "./RemoteMain.css";
import Rec69Image from "../../assets/RemoteMain .jpg";
import { useNavigate } from "react-router-dom";
const RemoteMain: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="remote-main">
      <div className="frame-149-remotemain">
        <div className="frame-194">
          <h2 className="remote-main-title">Remote Services</h2>
          <p className="remote-main-description">
          Comprehensive tech and back office support, <br/> ensuring smooth operations and system reliability.
          </p>
        </div>
        <button
          className="remote-main-button"
          onClick={() => navigate("/services/tech-support")}
        >
          Learn More 
          <img
            src={require("../../assets/chevron-right.png")}
            alt="Chevron Right Icon"
            className="grow-chevron-icon"
          />
        </button>
      </div>

      <div className="image-container-remotemain ">
        <div className="rectangle-image-remotemain" />
        <img
          src={Rec69Image}
          alt="Remote Main"
          className="recImage-remotemain"
        />
      </div>
    </section>
  );
};

export default RemoteMain;
