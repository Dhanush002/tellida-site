import React from "react";
import "./Claim.css";
import { useNavigate } from "react-router-dom";
const Claim = () => {
  const navigate = useNavigate();
  return (
    <section className="claim-section">
      <div className="claim-container">
        <h3 className="claim-title">
          Simple Steps to Claim Your <br /> Tellida Service Today!
        </h3>
        <div className="claim-steps-container">
          <div className="claim-steps">
            {/* Step 1 */}
            <div className="claim-step">
              <div className="step-number">
                <span className="number-text">1</span>
              </div>
              <div className="step-content">
                <h5 className="step-title">Register an Account</h5>
                <p className="step-description">
                  Visit the Tellida website, create an account with your
                  personal details, and verify your email if required.
                </p>
              </div>
            </div>
            {/* Horizontal Line */}
            <div className="horizontal-line horizontal-line-1" />
            <div className="mobile-line" />
            {/* Step 2 */}
            <div className="claim-step-2">
              <div className="step-number">
                <span className="number-text">2</span>
              </div>
              <div className="step-content">
                <h5 className="step-title">Choose a Service Plan</h5>
                <p className="step-description">
                  Log in, browse service plans, and select the one that suits
                  your needs, either one-time or subscription.
                </p>
              </div>
            </div>
            {/* Horizontal Line */}
            <div className="horizontal-line horizontal-line-2" />
            <div className="mobile-line" />
            {/* Step 3 */}
            <div className="claim-step-3">
              <div className="step-number">
                <span className="number-text">3</span>
              </div>
              <div className="step-content">
                <h5 className="step-title">Submit a Service Request</h5>
                <p className="step-description">
                  After choosing a plan, submit a request with service details.
                  A Tellida representative will contact you to confirm and
                  schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="claim-button-container" onClick={() => navigate("/contact-us")}>
          <button className="claim-button">Book for Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default Claim; 