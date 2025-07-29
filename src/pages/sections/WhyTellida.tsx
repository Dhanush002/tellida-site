import React, { useState } from "react";
import "./WhyTellida.css";
import WhyTellidaImage from "../../assets/WhyTellida.jpg";

const WhyTellida = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleMore = () => {
    setShowMore((prev: boolean) => !prev);
  };

  return (
    <section className="why-tellida">
      <div className="why-content-container">
        <div className="why-text-container">
          <h3 className="why-section-title-why">
            Revolutionizing Business Operations: Tellida’s Cost-Effective, Secure, and Efficient Solutions
          </h3>

          <div className="why-text-content">
            <p className="main-p-text">
              
                At Tellida, we are dedicated to transforming the way businesses operate by offering tailored
                outsourcing services that help companies reduce operational costs, enhance efficiency, and
                scale effortlessly. Our innovative solutions empower businesses to focus on core functions
                while we take care of critical back-end processes, ensuring smooth, high-performing operations.
              
            </p>

            {/* Accordion Toggle (no index needed) */}
            <button className="accordion-toggle" onClick={toggleMore}>
              <span>Read More</span>
              <span className="accordion-icon">{showMore ? "–" : "+"}</span>
            </button>

            {/* Accordion Content */}
            {showMore && (
              <div className="accordion-content">
                <p><b>
                  🔹 Cost Savings Without Compromise – Our outsourcing model eliminates recruitment costs, reduces
                  overhead, and allows businesses to scale without adding permanent headcount. <br /> <br />
                  🔹 Enhanced Productivity with Latest Technology and Methods – We integrate the latest technology and
                  best practices to improve accuracy and efficiency across all processes. <br /><br />
                  🔹 Faster Turnaround & 24/7 Support – By leveraging global talent and time-zone advantages,
                  we accelerate service delivery, helping businesses meet deadlines faster. <br /><br />
                  🔹 Stronger Compliance & Security – With GDPR compliance, ISO27001:2022 certification, and
                  industry-best security protocols, we protect sensitive data while ensuring regulatory adherence. <br /><br />
                  🔹 Business Continuity with Benched Staff – We ensure continuous operations by maintaining a pool
                  of trained and ready-to-deploy staff. In case of any disruption or spikes in demand, our benched
                  staff step in, minimizing downtime and ensuring business continuity.<br />
                </b></p>
                <p>
                  From small startups to global enterprises, Tellida has helped businesses reduce costs, scale effortlessly,
                  and enhance service quality—all while allowing them to focus on core business growth. By leveraging advanced
                  technology, skilled professionals, and time-zone advantages, we enable businesses to operate efficiently and
                  cost-effectively, reducing operational costs by up to 60%. With Tellida handling your back-office processes,
                  you can have peace of mind knowing your critical operations are in expert hands.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="image-container-why">
          <img
            src={WhyTellidaImage}
            alt="Why Tellida"
            className="why-tellida-image"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyTellida;
