import React from "react";
import "./FinanceMain.css";
import Rec69Image from "../../assets/FinanceMain.jpg";
import { useNavigate } from "react-router-dom";
const FinanceMain: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="finance-main">
      <div className="frame-149-financemain">
        <div className="frame-194">
          <h2 className="finance-main-title">Finance Services</h2>
          <p className="finance-main-description">
          Expert accounting services, including bookkeeping, tax returns, payroll, and management accounts.
          </p>
        </div>
        <button
          className="finance-main-button"
          onClick={() => navigate("/services/finance")}
        >
          Learn More 
          <img
            src={require("../../assets/chevron-right.png")}
            alt="Chevron Right Icon"
            className="grow-chevron-icon"
          />
        </button>
      </div>

      <div className="image-container-financemain ">
        <div className="rectangle-image-financemain" />
        <img
          src={Rec69Image}
          alt="finance Main"
          className="recImage-financemain"
        />
      </div>
    </section>
  );
};

export default FinanceMain;
