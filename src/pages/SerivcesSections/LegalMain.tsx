import React from "react";
import "./LegalMain.css";
import Rec69Image from "../../assets/LegalMain.jpg";
import { useNavigate } from "react-router-dom";
const LegalMain: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="legal-main">
      <div className="frame-149-legalm">
        <div className="frame-194">
          <h2 className="legal-main-title">Legal Services</h2>
          <p className="legal-main-description">
          Efficient conveyancing support, from client onboarding to HMLR registration, minimal solicitor involvement.
          </p>
        </div>
        <button
          className="legal-main-button"
          onClick={() => navigate("/services/legal-process")}
        >
          Learn More 
          <img
            src={require("../../assets/chevron-right.png")}
            alt="Chevron Right Icon"
            className="grow-chevron-icon"
          />
        </button>
      </div>

      <div className="image-container-legalmain ">
        <div className="rectangle-image-legalmain" />
        <img
          src={Rec69Image}
          alt="Legal Main"
          className="recImage-legalmain"
        />
      </div>
    </section>
  );
};

export default LegalMain;
