import React, { useState } from "react";
import "./GrowTest.css";
import mishayel from "../../assets/operational/Mishayel Viranjith - Call Centre.jpg";
import chethana from "../../assets/operational/Chethana Hettige Leagal Processing Outsourcing.jpg";
import Inham from "../../assets/Inham.jpg";

const GrowWithUs: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="grow-test-us-container">
      <div className="grow-test-wrapper">
        <h2 className="grow-modal-title">Employee Testimonials</h2>
        <div className="grow-modal-description">
          <div className="grow-testimonial">
            
            <div className="grow-quote">
              <img
                src={mishayel}
                alt="Quote Icon"
                className="grow-quote-icon"
              />
              <p>
              <strong><span ><h3>Virajith Mishayel</h3></span ><span style={{color:"#777d78"}}>Contact Center Executive</span></strong><br />
              <br />As a fresh graduate, I started my journey to success as a
                contact center executive and am currently working as a Team
                Leader / Backup Field Service Scheduler. Throughout my career at
                Tellida with 3+ years, Tellida has shaped me to become a
                mindful, task-driven, and professional individual in managing
                client-centered office operations. Equipped with exceptional
                ability to facilitate all aspects of internal and external
                communication skills.
              </p>
            </div>
          </div>
          <hr />
          <div className="grow-testimonial">
        
            <div className="grow-quote">
              <img src={Inham} alt="Quote Icon" className="grow-quote-icon" />
              <p>
              <strong><span ><h3>Hafsa Inham</h3></span ><span style={{color:"#777d78"}}>Quality Assurance Associate</span></strong><br />
              <br />After completing my A Levels I joined Tellida (Pvt) Ltd as a
                Contact Center Executive in October 2022 where I worked for the
                next one and a half years. Tellida has allowed me to grow in my
                career to become a Quality Assurance Associate and ensure the
                smooth running of the Call Center. I have honed my analytical
                skills by meticulously evaluating call recordings and
                identifying areas for improvement. Strong communication and
                interpersonal skills were developed through providing
                constructive feedback to agents, fostering a positive learning
                environment.
              </p>
            </div>
          </div>
          <hr />
          <div className="grow-testimonial">

            <div className="grow-quote">
              <img
                src={chethana}
                alt="Quote Icon"
                className="grow-quote-icon"
              />

              <p>
              <strong><span ><h3>Chethana Hettige</h3></span ><span style={{color:"#777d78"}}>Senior Legal Process Associate (Team Leader)</span></strong><br />
              <br />
                I can hardly believe that it has been 2 years and 3 months since
                I started my journey at Tellida Pvt Ltd. Time has flown by, and
                I am incredibly thankful for every opportunity, challenge, and
                lesson along the way.
                <br />
                When I first joined as a Legal Process Associate in the
                Conveyancing Fee Earner Department, I was eager to learn and
                grow. My role involved handling various conveyancing matters,
                giving me the chance to develop a strong foundation in the legal
                aspects of property transactions. The learning curve was steep,
                but with the constant support and encouragement from my team, I
                quickly adapted and found my rhythm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowWithUs;
