import React from "react";
import CertificationImage from "../../assets/Certification.png"; 
import "./Certifications.css";
const Certifications: React.FC = () => {
  return (
    <section className="certifications">
      <img
        src={CertificationImage}
        alt="Certifications and Recognitions"
        className="certification-full-width-image"
      />
    </section>
  );
};

export default Certifications;
