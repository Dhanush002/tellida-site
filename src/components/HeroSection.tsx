import React from "react";
import "./HeroSection.css";
import "../assets/Hero.jpg";
import { useNavigate } from "react-router-dom";
import arrowUpRightIcon from "../assets/arrow-up-right.png";

const bgVideo = require("../assets/video/bgvideo.mp4");

type HeroSectionProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  imageUrl,
}) => {

  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/services");
  }
  
  return (
    
    <div
      className="hero-section"
      // style={{
      //   backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageUrl})`,
      // }}
    >
       <video
        className="background-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>
       <div className="overlay"></div>
      <div className="hero-content">
        <h1>
          Empowering UK Businesses with Smart Business Process Outsourcing Solutions
        </h1>
        <p>
          {description} 
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => navigate("/contact-us")}>Book for Consultation</button>
          <button
            className="btn btn-secondary"
            onClick={handleLearnMoreClick}
          >
           Learn More{" "}
            <img
              src={arrowUpRightIcon}
              alt="Learn More Icon"
              style={{ width: "16px", height: "16px", marginLeft: "8px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
