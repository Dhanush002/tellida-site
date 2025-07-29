import React from "react";
import "./CallGeneral.css";
import icon1 from "../../../../assets/user.png";
import icon2 from "../../../../assets/calendar.png";
import icon3 from "../../../../assets/reports.png";
import icon4 from "../../../../assets/protection.png";
import icon5 from "../../../../assets/call.png";
import icon6 from "../../../../assets/checked.png";
const CallGeneral: React.FC = () => {
  return (
    <section className="call-general-section">
      <div className="call-general-container">
        {/* Title */}
        
        <div className="call-general-title">
             <h3>Our Services</h3>
        </div>

        {/* Services */}
        <div className="call-general-services">

          {/* Service 1 */}
          <div className="call-service">
            <div className="call-service-icon" style={{ backgroundColor: "#FFEDED" }}>
              <img src={icon2} alt="24/7 Call Center Support" />
            </div>
            <div className="call-service-text">
              <h4>24/7 Contact Centre Support</h4>
              <p>
                We provide continuous Contact centre support, available every day
                of the year.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="call-service">
            <div className="call-service-icon" style={{ backgroundColor: "#E8F8EC" }}>
              <img src={icon6} alt="Call Recording for Quality" />
            </div>
            <div className="call-service-text">
              <h4>Call Recording for Quality</h4>
              <p>
                All calls are recorded to ensure high-quality service.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="call-service">
            <div className="call-service-icon" style={{ backgroundColor: "#FFF8E5" }}>
              <img src={icon4} alt="Online Connections & Secure Payments" />
            </div>
            <div className="call-service-text">
              <h4>Online Connections & Secure Payments</h4>
              <p>
                We manage online connections with a secure payment gateway for
                safe transactions.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="call-service">
            <div className="call-service-icon" style={{ backgroundColor: "#FFEDED" }}>
              <img src={icon1} alt="Expert Trainers" />
            </div>
            <div className="call-service-text">
              <h4>Expert Trainers</h4>
              <p>
                Our team consists of highly qualified trainers to guide you
                effectively.
              </p>
            </div>
          </div>

          {/* Service 5 */}
          <div className="call-service">
            <div className="call-service-icon" style={{ backgroundColor: "#E8F8EC" }}>
              <img src={icon5} alt="Call Handling" />
            </div>
            <div className="call-service-text">
              <h4>Call Handling</h4>
              <p>
                We efficiently manage all incoming and outgoing calls for
                seamless communication.
              </p>
            </div>
          </div>

          {/* Service 6 */}
          <div className="call-service">
            <div className="call-service-icon" style={{ backgroundColor: "#FFF8E5" }}>
              <img src={icon3} alt="Customized Reports" />
            </div>
            <div className="call-service-text">
              <h4>Customized Reports</h4>
              <p>
                We provide tailored reports to meet your specific business
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallGeneral;
