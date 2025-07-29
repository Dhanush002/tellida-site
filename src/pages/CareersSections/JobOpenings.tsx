import React, { useState } from "react";
import "./JobOpenings.css";
import Right from "../../assets/icons/chevron-right.png";

const JobOpenings: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="job-openings-container">
      <div className="panel-container">
        <div className="top-panel">
          <div className="left-panel">
            <h1 className="highlight-box">Join us. Be you.</h1>
          </div>
        </div>

        {/*<div className="bottom-panel">
          <div className="bottom-opening-card">
            <h3>
              Legal Process <br /> Outsourcing
            </h3>
            <p>
              Join our expert legal team and be part of a dynamic environment
              where precision meets efficiency!
            </p>
            <button className="apply-button" onClick={openModal}>
              Apply Now
              <img src={Right} alt="Right Arrow" className="right-arrow" />
            </button>
          </div>

          <div className="bottom-opening-card">
            <h3>Remote Tech Support, Back Office Support</h3>
            <p>
              Shape the future of financial management with Tellida—where
              accuracy and expertise drive success!
            </p>
            <button className="apply-button" onClick={openModal}>
              Apply Now
              <img src={Right} alt="Right Arrow" className="right-arrow" />
            </button>
          </div>
          <div className="bottom-opening-card">
            <h3>Call Centre Outsourcing</h3>
            <p>
              Innovate, optimize, and grow with our tech and back-office team—where
              every solution matters
            </p>
            <button className="apply-button" onClick={openModal}>
              Apply Now
              <img src={Right} alt="Right Arrow" className="right-arrow" />
            </button>
          </div>
          <div className="bottom-opening-card">
            <h3>Finance and Accounts Outsourcing</h3>
            <p>
              Be the voice behind exceptional customer experiences—join our call
              center team today!
            </p>
            <button className="apply-button" onClick={openModal}>
              Apply Now
              <img src={Right} alt="Right Arrow" className="right-arrow" />
            </button>
          </div>
        </div>*/}
      </div>

      {/*{isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>🚫 No Current Vacancies</h2>
            <hr className="modal-divider" />
            <p>
              Thank you for your interest in joining our team. At the moment, we
              are not hiring.
            </p>
            <p>
              However, we welcome you to submit your CV for future
              opportunities.
            </p>
            <hr className="modal-divider" />
            <p>
              <strong>Email your CV to:</strong>
            </p>
            <p className="modal-email">
              <a href="mailto:join@tellida.com">join@tellida.com</a>
            </p>
            <hr className="modal-divider" />
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}*/}
    </section>
  );
};

export default JobOpenings;
