import React from "react";
import "./USPSection.css";
import Rectangle56 from "../../assets/Rectangle 56.png";
import Rectangle57 from "../../assets/Rectangle 57.png";
import { color } from "framer-motion";

const UspSection: React.FC = () => {
  return (
    <section className="usp-section">
      <div className="usp-frame">
        <div className="usp-blur">
          <img src={Rectangle57} alt="Blur Background" className="usp-blur-image" />
        </div>
        <div className="usp-content">
          <div className="usp-overlay"></div>
          <div className="usp-text">
            <h1>
              To help our clients grow their business by providing world-class
              and cost-effective services in business process outsourcing.
            </h1>
            <div className="usp-footer">
              <div className="usp-name">
                <h2>Omar Fatha Rally</h2>
                <p style={{ color: 'white' }}>Director & CEO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="usp-background">
          <img src={Rectangle56} alt="Main Background" className="usp-background-image" />
        </div>
      </div>
      
    </section>
  );
};

export default UspSection;
