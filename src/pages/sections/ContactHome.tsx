import React, { useState } from "react";
import "./ContactHome.css";
import BGImage from "../../assets/BGContact.png";
import emailjs from "emailjs-com";
const ContactHome: React.FC = () => {
  const [step, setStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const closeModal = () => setModalOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_abq2mep",
        "template_5st5m2d",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "7uqWpBKCXvGlmqVOB"
      )
      .then(() => {
        setModalOpen(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setStep(1);
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
      });
  };

  return (
    <section
      className="global-contacts-section-home"
      style={{ backgroundImage: `url(${BGImage})` }}
    >
      <div className="frame-306-home">
        <div className="frame-316-home">
          <h1>Contact Us</h1>
          <p>
            Connect with us to discover tailored solutions <br /> that drive
            efficiency and growth for your business.
          </p>
        </div>
        <div className="frame-304-home">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="frame-314-home">
                <div className="frame-305-home">
                  <h4>For Inquiries</h4>
                  <p>
                    Please submit the form below or email to{" "}
                    <span className="email-home">info@tellida.com</span>
                  </p>
                </div>
                <div className="frame-312-home">
                  <div className="frame-303-home">
                    <label>Name*</label>
                    <div className="frame-302-home">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Please enter your name"
                        required
                      />
                    </div>
                  </div>
                  <div className="frame-303-home">
                    <label className="email-l">Email*</label>
                    <div className="frame-302-home">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Please enter your email"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="frame-310-home">
                  <button className="next-button-home" onClick={nextStep}>
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="frame-314-home">
                <div className="frame-305-home">
                  <h4>For Inquiries</h4>
                  <p>
                    Please submit the form below or email to{" "}
                    <span className="email-home">info@tellida.com</span>
                  </p>
                </div>
                <div className="frame-312-home">
                  <div className="frame-303-home">
                    <label>Subject*</label>
                    <div className="frame-302-home">
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter subject here"
                        required
                      />
                    </div>
                  </div>
                  <div className="frame-303-home">
                    <label>Message</label>
                    <div className="frame-301-home">
                    <input
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter message here"
                      />
                    </div>
                  </div>
                </div>
                <div className="frame-310-home">
                  <button className="back-button-home" onClick={prevStep}>
                    Back
                  </button>
                  <button className="send-button-home">Send Message</button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <h2>✅ Successfully Sent!</h2>
            <p>Your message has been successfully sent to Tellida.</p>

          </div>
        </div>
      )}

    </section>
  );
};

export default ContactHome;
