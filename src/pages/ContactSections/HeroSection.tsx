import React from "react";
import "./HeroSectionContact.css";
import Exclude from "../../assets/Exclude1.png";


const HeroSection: React.FC = () => {
;

  return (
    <section
      className="hero-section-contact"
      style={{ backgroundImage: `url(${Exclude})` }}
    >
      <div className="hero-overlay-contact">
        <div className="hero-content-contact">
          <h1>Get in Touch with Tellida — We're Here to Help!</h1>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
