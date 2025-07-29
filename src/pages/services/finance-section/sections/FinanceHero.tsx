import React from "react";
import "./FinanceHero.css";
import ExcludeImage from "../../../../assets/Finance.jpg";
import FeaturedIcon from "../../../../assets/Featured icon (1).png";

const FinanceHero: React.FC = () => {
  return (
    <section
      className="finance-hero"
      style={{ backgroundImage: `url(${ExcludeImage})` }}
    >
      {/* Main Hero Section */}
      <div className="finance-hero-content">
        <h1 className="finance-hero-title">Finance & Accounting </h1>
      </div>

      {/* Tagline Section */}
      <div className="finance-tagline">
        <p className="finance-tagline-text">
          Expert accounting services, including bookkeeping, tax returns,
          payroll, and management accounts.
        </p>
      </div>

      {/* Featured Icon */}
      {/* <div className="finance-featured-icon">
        <img
          src={FeaturedIcon}
          alt="Download Icon"
          className="finance-download-icon"
        />
      </div> */}
    </section>
  );
};

export default FinanceHero;
