import React, { useEffect, useState } from 'react';
import Modal from './modal';
import './jobs.css';
import job4 from '../../assets/senior.jpg';
import job5 from '../../assets/conveyencer.jpg';
import job1 from '../../assets/hiring1.jpg';
import job2 from '../../assets/hiring2.jpg';
import job3 from '../../assets/callCenter2.webp';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

interface JobCardProps {
  backgroundImage: string;
  modalImage: string;
  title: string;
}

const JobCard: React.FC<JobCardProps> = ({ backgroundImage, modalImage, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (
      isModalOpen &&
      typeof window.grecaptcha !== 'undefined' &&
      document.getElementById('recaptcha-container')
    ) {
      window.grecaptcha.render('recaptcha-container', {
        sitekey: '6LfvKlQrAAAAAN55iYIqhhMPKRTrR0Afe2xYmO1Y',
      });
    }
  }, [isModalOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/join@tellida.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Application submitted successfully!");
        window.location.href = "/";
      } else {
        alert("Submission failed. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="job-card" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="title-overlay">
        <h2>{title}</h2>
      </div>

      <div className="overlay-content">
        <p className="hover-description">
          We are currently hiring. Submit your CV by clicking Apply Now.
        </p>
        <button className="apply-button" onClick={openModal}>Apply Now</button>
      </div>

      {isModalOpen && (
        <Modal>
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-inner-content">
                <img src={modalImage} alt="Modal visual" className="modal-image" />
                <h2>Apply for {title}</h2>
                <hr className="modal-divider" />

                <form
                action="https://formsubmit.co/join@tellida.com"
                method="POST"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="application-form"
                >
                  <input type="hidden" name="_subject" value={`New Application for ${title}`} />
                  <input type="hidden" name="_template" value="table" />

                  <input type="text" name="name" placeholder="Full Name" required />
                  <input type="email" name="email" placeholder="Email" required />
                  <input type="tel" name="contact" placeholder="Contact Number" required />
                  <textarea name="address" placeholder="Address" required></textarea>
                  <input
                    type="file"
                    name="attachment"
                    placeholder="Submit Your CV"
                    accept=".pdf,.doc,.docx"
                    required
                  />

                  {/* reCAPTCHA will be rendered here */}
                  <div id="recaptcha-container" className="g-recaptcha" />

                  <button type="submit" className="submit-button">Submit Application</button>
                </form>

                <hr className="modal-divider" />
                <button className="close-button" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

const Jobs: React.FC = () => {
  return (
    <div className="jobs-section">
      <h2 className="av">Available Vacancies</h2>
      <div className="jobs-container">
        <JobCard backgroundImage={job4} modalImage={job1} title="Senior Accountant" />
        <JobCard backgroundImage={job5} modalImage={job2} title="Conveyancing Specialist" />
        <JobCard backgroundImage={job3} modalImage={job1} title="Call Center Agent" />
      </div>
    </div>
  );
};

export default Jobs;
