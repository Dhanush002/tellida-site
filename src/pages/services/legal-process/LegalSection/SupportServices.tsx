import React from "react";
import "./SupportServices.css";

const SupportServices = () => {
  return (
    <section className="support-section">
      <div className="support-container">
        <header className="support-header">
          <h3 className="support-title">Conveyancing Services</h3>
        </header>
        <div className="support-grid">
          <div className="support-top">
            <article className="support-card">
              <h5 className="support-card-title">Onboarding</h5>
              <div className="support-card-description">
                <ul>
                  <li>Opening Matters in the client system</li>
                  <li>Conduct Due Diligence Checks</li>
                  <li>Conduct Source of Funds Checks</li>
                </ul>
              </div>
            </article>

            <article className="support-card">
              <h5 className="support-card-title">Sale</h5>
              <div className="support-card-description">
                <ul>
                  <li>Title Reviews</li>
                  <li>Redemption Statements and Management Packs</li>
                  <li>Contract & Enquiries</li>
                  <li>Exchange & Completion</li>
                </ul>
              </div>
            </article>

            <article className="support-card">
              <h5 className="support-card-title">Purchase</h5>
              <div className="support-card-description">
                <ul>
                  <li>Compliance Checks</li>
                  <li>Contracts & Searches</li>
                  <li>Enquiries</li>
                  <li>Exchange & Completion</li>
                </ul>
              </div>
            </article>

            <article className="support-card">
              <h5 className="support-card-title">Post Completions</h5>
              <div className="support-card-description">
                <ul>
                  <li>Checklists</li>
                  <li>AP1 Submissions</li>
                  <li>Dealing with Requisitions</li>
                  <li>Portal Updates</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportServices;
