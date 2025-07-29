import React from "react";
import "./WhoAreWe.css";
import CheckCircle from "../../assets/icons/check-circle .png";

const WhoWeAre: React.FC = () => {
  return (
    <section className="who-we-are-section">
      {/* Desktop Text */}
      <div className="frame-10">
        <p className="line-1">
          We provide tailored outsourcing solutions across <br />
          legal, finance, tech support, and contact centre services, <br />
          helping businesses streamline operations and grow efficiently.
        </p>
      </div>

      {/* Mobile Text */}
      <div className="mobile-frame-10">
        <p className="mobile-line-1">
          We provide tailored outsourcing solutions across legal, finance, tech support,
          and contact centre services, helping businesses streamline operations and grow efficiently.
        </p>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat">
          <div className="icon-wrapper red-bg">
            <img src={CheckCircle} alt="Expert Employees" />
          </div>
          <div className="stat-text">
            <h1>80+</h1>
            <p>
              expert <br /> employees
            </p>
          </div>
        </div>
        <div className="stat">
          <div className="icon-wrapper yellow-bg">
            <img src={CheckCircle} alt="Happy Clients" />
          </div>
          <div className="stat-text">
            <h1>31+</h1>
            <p>
              Happy <br /> Clients
            </p>
          </div>
        </div>
        <div className="stat">
          <div className="icon-wrapper green-bg">
            <img src={CheckCircle} alt="Years of Experience" />
          </div>
          <div className="stat-text">
            <h1>13+</h1>
            <p>
              Years of <br /> Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
