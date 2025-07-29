import React from "react";
import "./GlobalAbout.css"; 
import GlobalImage from "../../assets/Global.png"; 

const GlobalAbout: React.FC = () => {
  return (
    <section className="global-about-container">
      <div className="global-about-content">
        <img src={GlobalImage} alt="Global Network" className="global-about-image" />
      </div>
    </section>
  );
};

export default GlobalAbout;
