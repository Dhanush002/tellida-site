import React from "react";
import "./LifeAtTellida.css";
import Rec69Image from "../../assets/Rec69.png";
import { useNavigate } from "react-router-dom";
const LifeAtTellida: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="life-at-tellida">
      <div className="frame-149">
        <div className="frame-194">
          <h2 className="life-at-tellida-title">Life at Tellida!</h2>
          <p className="life-at-tellida-description">
            At Tellida, we nurture a collaborative and inclusive work culture
            focused on growth and innovation. Our team thrives in a flexible
            environment that encourages creativity, learning, and professional
            development.
          </p>
        </div>
        <button
          className="life-at-tellida-button"
          onClick={() => navigate("/about-us")}
        >
          Learn More About Tellida{" "}
          <img
            src={require("../../assets/chevron-right.png")}
            alt="Chevron Right Icon"
            className="grow-chevron-icon"
          />
        </button>
      </div>

      <div className="image-container-life">
        <div className="rectangle-image-life" />
        <img src={Rec69Image} alt="Life at Tellida" className="recImage " />
      </div>
    </section>
  );
};

export default LifeAtTellida;
