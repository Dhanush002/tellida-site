import React from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices.css";
import Service1 from "../../assets/Service1.png";
import Service2 from "../../assets/Service2.png";
import Service3 from "../../assets/Service3.png";
import Service4 from "../../assets/Service4.png";

const OurServices = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <section className="our-services-home">
    {/* Section Header */}
    <div className="header-container-home">
      <p className="section-title-home">Our Services</p>
      <h2 className="sub-title-home">Solutions Tailored for Your Success</h2>
    </div>
  
    {/* Services Layout */}
    <div className="services-layout-home">
      {/* Left Half */}
      <div className="left-half-home">
        <div
          className="large-card-home"
          onClick={() => handleNavigation("/services/finance")}
          
        >
          <img
            src={Service1}
            alt="Finance and Accounts Outsourcing"
            className="large-card-image-home"
          />
          <div className="card-title-home">
            <p>Finance and Accounts Outsourcing</p>
            <div className="icon-wrapper-home">
              <span className="plus-icon-home">+</span>
            </div>
          </div>
        </div>
      </div>
  
      {/* Right Half */}
      <div className="right-half-home">
        <div
          className="service-card-home-top"
          onClick={() => handleNavigation("/services/legal-process")}
          
          
        >
          <img
            src={Service3}
            alt="Legal Process Outsourcing"
            className="card-image-home"
          />
          <div className="card-title-home">
            <p>Legal Process Outsourcing</p>
            <div className="icon-wrapper-home">
              <span className="plus-icon-home">+</span>
            </div>
          </div>
        </div>
        <div className="bottom-half-home">
          <div
            className="service-card-home-bottom"
            onClick={() => handleNavigation("/services/call-centre")}
          >
            <img
              src={Service4}
              alt="Call Centre Outsourcing"
              className="card-image-home"
            />
            <div className="card-title-home-bottom">
              <p className="card-title-home-bottom-1">Contact Centre <br/>Outsourcing</p>
              <div className="icon-wrapper-home">
                <span className="plus-icon-home">+</span>
              </div>
            </div>
          </div>
          <div
            className="service-card-home-bottom"
            onClick={() => handleNavigation("/services/tech-support")}
          >
            <img  
            src={Service2}
            alt="Remote Tech Support, Back Office Support"
              className="card-image-home"
            />
            <div className="card-title-home-bottom">
              <p className="card-title-home-bottom2">Remote Tech Support, Back Office Support</p>
              <div className="icon-wrapper-home">
                <span className="plus-icon-home">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default OurServices;
