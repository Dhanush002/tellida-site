import React, { useState } from "react";
import "./GrowWithUs.css";
import Frame197 from "../../assets/Frame 197 .jpg";
import mishayel from "../../assets/operational/Mishayel Viranjith - Call Centre.jpg";
import chethana from "../../assets/operational/Chethana Hettige Leagal Processing Outsourcing.jpg";
import Inham from "../../assets/Inham.jpg";

const GrowWithUs: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="grow-with-us-container">
      <div className="grow-content-wrapper">
        {/* Left Frame (Text Section) */}
        <div className="frame-159">
          <h2 className="grow-with-us-title"><h3 className="section-title">Our Team</h3>Grow with Us</h2>
          <p className="grow-with-us-description">
            At Tellida, we believe in nurturing talent and providing
            opportunities for growth. Join our dynamic team and unlock your
            potential through continuous learning, challenging projects, and a
            supportive work environment. Together, we’ll achieve success!
          </p>
          {/* <button className="grow-with-us-button" onClick={openModal}>
            Learn More{" "}
            <img
              src={require("../../assets/chevron-right.png")}
              alt="Chevron Right Icon"
              className="grow-chevron-icon"
            />
          </button> */}
        </div>

        {/* Right Frame (Image Section) */}
        <div className="frame-197">
          <img
            src={Frame197}
            alt="Grow With Us Visual"
            className="frame-197-img"
          />
        </div>
      </div>
      {isModalOpen && (
        <div className="grow-modal-overlay" onClick={closeModal}>
          <div
            className="grow-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="grow-close-button" onClick={closeModal}>
              &times;
            </button>
            <h2 className="grow-modal-title">Employee Testimonials</h2>
            <div className="grow-modal-description">
              <div className="grow-testimonial">
                <p>
                  <strong>Virajith Mishayel - Contact Center Executive</strong>
                </p>
                <div className="grow-quote">
                  <img
                    src={mishayel}
                    alt="Quote Icon"
                    className="grow-quote-icon"
                  />
                  <p>
                    As a fresh graduate, I started my journey to success as a
                    contact center executive and am currently working as a Team
                    Leader / Backup Field Service Scheduler. Throughout my
                    career at Tellida with 3+ years, Tellida has shaped me to
                    become a mindful, task-driven, and professional individual
                    in managing client-centered office operations. Equipped with
                    exceptional ability to facilitate all aspects of internal
                    and external communication skills.
                  </p>
                </div>
              </div>
              <hr />
              <div className="grow-testimonial">
                <p>
                  <strong>Hafsa Inham - Quality Assurance Associate</strong>
                </p>
                <div className="grow-quote">
                  <img
                    src={Inham}
                    alt="Quote Icon"
                    className="grow-quote-icon"
                  />
                <p>
                  After completing my A Levels I joined Tellida (Pvt) Ltd as a
                  Contact Center Executive in October 2022 where I worked for
                  the next one and a half years. Tellida has allowed me to grow
                  in my career to become a Quality Assurance Associate and
                  ensure the smooth running of the Call Center. I have honed my
                  analytical skills by meticulously evaluating call recordings
                  and identifying areas for improvement. Strong communication
                  and interpersonal skills were developed through providing
                  constructive feedback to agents, fostering a positive learning
                  environment.
                </p>
                </div>
              </div>
              <hr />
              <div className="grow-testimonial">
                <p>
                  <strong>
                    Chethana Hettige – Senior Legal Process Associate (Team
                    Leader)
                  </strong>
                </p>

                <div className="grow-quote">
                  <img
                    src={chethana}
                    alt="Quote Icon"
                    className="grow-quote-icon"
                  />

                <p>
                  I can hardly believe that it has been 2 years and 3 months
                  since I started my journey at Tellida Pvt Ltd. Time has flown
                  by, and I am incredibly thankful for every opportunity,
                  challenge, and lesson along the way.
                  <br /> <br />
                  When I first joined as a Legal Process Associate in the
                  Conveyancing Fee Earner Department, I was eager to learn and
                  grow. My role involved handling various conveyancing matters,
                  giving me the chance to develop a strong foundation in the
                  legal aspects of property transactions. The learning curve was
                  steep, but with the constant support and encouragement from my
                  team, I quickly adapted and found my rhythm.
                  <br /> <br />
                  I’m proud to lead a team of 3 as a Team Leader at Tellida Pvt
                  Ltd. The trust placed in me and the company’s focus on
                  employee growth, learning, and continuous improvement have
                  been invaluable. Tellida’s supportive, inclusive environment
                  has helped me grow professionally, and I’m excited about the
                  future and the opportunities ahead.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GrowWithUs;
