import React from "react";
import "./BusinessServices.css";
import icon2 from "../../../../assets/bs2.svg";
import icon3 from "../../../../assets/bs3.svg";
import icon4 from "../../../../assets/bs4.svg";
import icon5 from "../../../../assets/bs5.svg";

const BusinessServices: React.FC = () => {
  return (
    <section className="bussiness-service-section">
      <div className="bussiness-service-container">
        {/* Title */}
        <div className="bussiness-service-title">
          <h3>Customer Service that Transforms your Business</h3>
        </div>

        {/* Services */}
        <div className="bussiness-service-services">
          {/* Service 1 */}
          <div className="bussiness-service">
            <div
              className="bussiness-service-icon"
              style={{ backgroundColor: "#FFEDED" }}
            >
              <img src={icon2} alt="24/7 Call Center Support" />
            </div>
            <div className="bussiness-service-text">
              <h4>Proactive Updates</h4>
              <p>
                We have implemented a robust system where clients are given an
                update on the progress of their matters on a regular basis.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bussiness-service">
            <div
              className="bussiness-service-icon"
              style={{ backgroundColor: "#E8F8EC" }}
            >
              <img src={icon3} alt="Call Recording for Quality" />
            </div>
            <div className="bussiness-service-text">
              <h4>Complaints Handling </h4>
              <p>
                If complaints arise our call team will talk to the relevant
                client and calm them down. We will ensure that their concerns
                are addressed and will stay connected with the client until they
                are satisfied.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bussiness-service">
            <div
              className="bussiness-service-icon"
              style={{ backgroundColor: "#FFF8E5" }}
            >
              <img src={icon4} alt="Online Connections & Secure Payments" />
            </div>
            <div className="bussiness-service-text">
              <h4>Handling Incoming Calls</h4>
              <p>
                We have a calls team that can handle all incoming calls and
                handle queries. Where required transfers will be done to the
                relevant departments.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bussiness-service">
            <div
              className="bussiness-service-icon"
              style={{ backgroundColor: "#FFEDED" }}
            >
              <img src={icon5} alt="Expert Trainers" />
            </div>
            <div className="bussiness-service-text">
              <h4>Reviews</h4>
              <p>
                In this age of digitalization, reviews can make or break firm.
                Our high customer service levels will help to increase the
                positive reviews.
              </p>
            </div>
          </div>

          {/* Service 5 */}
          {/* <div className="bussiness-service">
            <div
              className="bussiness-service-icon"
              style={{ backgroundColor: "#E8F8EC" }}
            >
              <img src={icon1} alt="Call Handling" />
            </div>
            <div className="bussiness-service-text">
              <h4>Call Handling</h4>
              <p>
                We efficiently manage all incoming and outgoing calls for
                seamless communication.
              </p>
            </div>
          </div> */}

          {/* Service 6 */}
          {/* <div className="bussiness-service">
            <div
              className="bussiness-service-icon"
              style={{ backgroundColor: "#FFF8E5" }}
            >
              <img src={icon1} alt="Customized Reports" />
            </div>
            <div className="bussiness-service-text">
              <h4>Customized Reports</h4>
              <p>
                We provide tailored reports to meet your specific business
                needs.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default BusinessServices;
