import React from "react";
import "./Global.css"; 
import GlobalImage from "../../assets/Global.png"; 

const Global: React.FC = () => {
  return (
    <section className="global-container">
      <div className="global-content">
        <img src={GlobalImage} alt="Global Network" className="global-image" />
      </div>
    </section>
  );
};

export default Global;
