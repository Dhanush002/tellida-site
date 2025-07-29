import React from "react";
import "./ContactPoints.css"; 
import MailIcon from "../../assets/mail.svg";
import PhoneCallIcon from "../../assets/phone-call.svg";
import ClockIcon from "../../assets/clock.svg";
import MapIcon from "../../assets/map-pin.svg";
const ContactPoints: React.FC = () => {
  return (
    <section className="service-section">
      {/* Background Elements */}

      {/* Content Container */}
      <div className="content-container">
        <div className="frame-text">
          <h2 className="heading">
            At <span className="highlight">Tellida</span>, we’re dedicated to helping you achieve  success with our expert
            services.
          </h2>
          <p className="subtext">
            <span className="highlight2">Contact us</span> to learn more about how we can support you.
          </p>
        </div>

        {/* Contact Frames */}
        
      </div>
    </section>
  );
};

export default ContactPoints;
