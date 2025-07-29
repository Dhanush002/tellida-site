import React, { useState } from "react";
import "./VoicesOfTellida.css";
import EmployeeImage from "../../assets/Rectangle 24 .jpg";

const VoicesOfTellida: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="voice-section" aria-label="Employee testimonials">
      <div className="voice-content-wrapper">
        <div className="text-content">
          <div className="title-container">
            <h3 className="testimonial-label">EMPLOYEE TESTIMONIAL</h3>
            <h1 className="main-title">Voices of Tellida</h1>
          </div>
          <p className="description">
            At Tellida, our employees are the heart of our success. We foster a culture that values collaboration,
            innovation, and personal growth, creating an environment where every individual can thrive. Hear directly
            from our team members about their experiences, the impact of their work, and why they take pride in being
            part of the Tellida journey. Their testimonials reflect our commitment to excellence and our passion for
            making a difference.
          </p>
          <div className="button-group">
            <button className="read-more-button" onClick={openModal} aria-haspopup="dialog" aria-expanded={isModalOpen}>
              Read Further <span className="chevron">→</span>
            </button>
          </div>
        </div>
        <div className="image-container" aria-hidden="true">
          <img src={EmployeeImage} alt="Smiling employees representing Tellida team" className="employee-image" loading="lazy" />
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay-voice" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={closeModal}>
          <div className="modal-content-voice" onClick={(e) => e.stopPropagation()} tabIndex={-1}>
            <button
              className="close-button-voice"
              onClick={closeModal}
              aria-label="Close testimonials modal"
            >
              &times;
            </button>
            <h2 className="modal-title-voice" id="modal-title">Voices Of Tellida</h2>
            <div className="modal-description-voice">
              {/* Testimonial items */}
              <div className="testimonial-voice">
                <p><strong>Rukaima Rifkey - Legal Process Associate</strong></p>
                <p>Joining Tellida as a fresher four months ago has been a truly rewarding experience. As my first job, I was both excited and nervous, but the warm and welcoming team made me feel at ease right from the start.</p>
                <p>In just a few months, I’ve gained valuable skills, thanks to the thorough training and the constant guidance from my colleagues. The team has been incredibly supportive, and the work environment is both collaborative and motivating.</p>
                <p>I’m excited to continue my journey here and contribute to the company’s success!</p>
              </div>
              <hr />
              <div className="testimonial-voice">
                <p><strong>Hafsa Inham - Quality Assurance Associate</strong></p>
                <p>Working at Tellida is an amazing experience. Tellida provides greater support to everyday tasks at the right standard, proven talent for aligning business objectives with comprehensive administrative knowledge to achieve maximum operational impact.</p>
                <p>Tellida also allows a balance between work and studies, making sure that we can grow as individuals.</p>
              </div>
              <hr />
              <div className="testimonial-voice">
                <p><strong>Virajith Mishayel - Contact Center Executive</strong></p>
                <p>What motivates me to work at Tellida is its devotion to diversity and inclusion. I feel heard, recognized, and respected for my unique point of view. The hybrid work model has significantly improved my work-life balance.</p>
                <p>This supportive environment has granted me the opportunity to bring my best self to work every day. Tellida truly feels like an undivided community, not just another workplace.</p>
              </div>
              <hr />
              <div className="testimonial-voice">
                <p><strong>Fazmeer Uvais - Team Leader, Training Contact Centre Operations</strong></p>
                <p>Working for Tellida has been a truly rewarding experience. The company’s commitment to employee well-being and creating a workplace that is welcoming and respectful of people from all backgrounds inspires me to do my best work.</p>
                <p>The supportive team environment, challenging projects, and opportunities for growth have made this a fulfilling place to work. I’m proud to be part of Tellida.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VoicesOfTellida;
