import React from "react";
import "./isohero.css";
import Life from "../../assets/isohero.jpg";

const HeroSection: React.FC = () => {
  return (
    <section
      className="hero-section-life"
      style={{
        backgroundImage: `
          linear-gradient(180deg, rgba(23, 23, 23, 0) 41.33%, #171717 100%),
          url(${Life})
        `
      }}
    >
      <div className="hero-content-life">
        <h1>ISO 27001:2022</h1>
        <h2>Our Commitment to Information Security</h2>
      </div>
    </section>
  );
};

export default HeroSection;
