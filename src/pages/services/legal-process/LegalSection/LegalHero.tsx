import React from "react";
import "./LegalHero.css";
import ExcludeImage from "../../../../assets/Exclude3.jpg";

const LegalHero: React.FC = () => {
  return (
    <section
      className="legal-hero"
      style={{ backgroundImage: `url(${ExcludeImage})` }}
    >
      {/* Main Hero Section */}
      <div className="legal-hero-content">
        <h1 className="legal-hero-title">Conveyancing Process Outsourcing</h1>
      </div>

      {/* Tagline Section */}
      <div className="legal-tagline">
        <p className="legal-tagline-text">
          Streamlined,End-to-end conveyancing solutions, from onboarding and property searches to contract preparation and HMLR registration, with minimal solicitor involvement.
        </p>
      </div>

      {/* Featured Icon (optional) */}
      {/* <div className="legal-featured-icon">
        <img src={FeaturedIcon} alt="Download Icon" className="legal-download-icon" />
      </div> */}
    </section>
  );
};

export default LegalHero;
