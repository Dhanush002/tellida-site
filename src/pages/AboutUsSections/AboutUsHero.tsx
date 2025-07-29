import React from "react";
import "./AboutUsHero.css";
import Exclude from "../../assets/Exclude2.png";

const AboutUsHero: React.FC = () => {
  
  return (
    <section
      className="about-us-hero"
      style={{ backgroundImage: `url(${Exclude})` }}
    >
      {/* Hero Content Section */}
      <div className="hero-content-aboutus">
        <h1>Your Trusted Partner in Business Solutions</h1>
      </div>

      {/* Tagline Section */}
      <div className="hero-tagline">
        <p>
          We empower your business with innovative solutions and unmatched
          expertise.
        </p>
      </div>
    </section>
  );
};

export default AboutUsHero;
