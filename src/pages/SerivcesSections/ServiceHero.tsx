import React from "react";
import "./ServiceHero.css";
import Exclude from "../../assets/Exclude5.jpg";

const ServiceHero: React.FC = () => {
  
  return (
    <section
      className="service-hero"
      style={{ backgroundImage: `url(${Exclude})` }}
    >
      {/* Hero Content Section */}
      <div className="hero-content-service">
        <h1>Seamless Support with Tellida</h1>
      </div>

      {/* Tagline Section */}
      <div className="hero-tagline-service">
        <p>
            Your Trusted Partner for Expert Services.
            Claim your service today and let us handle the rest!
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;
