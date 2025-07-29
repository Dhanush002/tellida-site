import React from "react";
import "./RemoteHero.css";
import ExcludeImage from "../../../../assets/remote.jpg";

const RemoteHero: React.FC = () => {
  return (
    <section
      className="remote-hero"
      style={{ backgroundImage: `url(${ExcludeImage})` }}
    >
      {/* Main Hero Section */}
      <div className="remote-hero-content">
        <h1 className="remote-hero-title">
          Remote Tech Support & Back Office Support
        </h1>
      </div>

      {/* Tagline Section */}
      <div className="remote-tagline">
        <p className="remote-tagline-text">
          Comprehensive tech and back office support, ensuring smooth operations
          and system reliability.
        </p>
      </div>
    </section>
  );
};

export default RemoteHero;
