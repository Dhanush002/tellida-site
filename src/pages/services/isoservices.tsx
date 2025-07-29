import React from "react";
import "./ISOServices.css";

import isoLogo from "../../assets/iso.png"; // Adjust path as needed

const ISOServices = () => {
  return (
    <section className="iso-services">
      <div className="container">
        <div className="iso-content">
          <img
            src={isoLogo}
            alt="ISO 27001:2022 Certified"
            className="iso-logo"
            loading="lazy"
          />
          <div className="iso-text">
            <h2 className="iso-title">Security you can trust</h2>
            <p className="iso-description">
              Our services are backed by <strong>ISO 27001:2022 certification</strong>, 
              ensuring that every process we handle meets the highest standards of 
              <strong> data protection and risk management</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ISOServices;
