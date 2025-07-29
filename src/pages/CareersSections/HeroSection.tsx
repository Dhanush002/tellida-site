import React from "react";
import "./HeroSection.css";
import Life from "../../assets/careertellida.jpg";

const HeroSection: React.FC = () => {
  return (
    <section
      className="hero-section-life"
      style={{ backgroundImage: `url(${Life})` }}
    >
      
        <div className="hero-content-life">
          <h1>A Community That Cares and Celebrates</h1>
          
        </div>

        <div className="hero-tagline-life">
          <p>
          Elevate Your Professional Journey. Be Part of a Team That Values Growth and Success!
          </p>
        </div>
 
    </section>
  );
};

export default HeroSection;
