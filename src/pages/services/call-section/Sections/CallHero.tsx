import React from "react";
import "./CallHero.css";
import CallSenterImage from "../../../../assets/call.jpg";

const CallHero: React.FC = () => {
  return (
    <section
      className="call-hero"
      style={{ backgroundImage: `linear-gradient(
        180deg,
        rgba(23, 23, 23, 0) 38.13%,
        #171717 100%
      ), url(${CallSenterImage})` }}
    >
      {/* Hero Title */}
      <div className="call-hero-content">
        <h1 className="call-hero-title">Contact Centre Outsourcing</h1>
      </div>

      {/* Hero Tagline */}
      <div className="call-tagline">
        <p className="call-tagline-text">
          24/7 call centre support for seamless customer interactions, improving
          service and client satisfaction.
        </p>
      </div>
    </section>
  );
};

export default CallHero;
