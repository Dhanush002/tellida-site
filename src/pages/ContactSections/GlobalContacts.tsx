import React, { useState } from "react";
import "./GlobalContacts.css";
import BGImage from "../../assets/BGContact.png";

const GlobalContacts: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    cname: "",
    industry: "",
  });

  const closeModal = () => setModalOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/bishirhirasa@gmail.com", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setModalOpen(true);
        setFormData({
          name: "",
          email: "",
          number: "",
          cname: "",
          industry: "",
        });
      } else {
        alert("Submission failed. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section
      id="global-contacts-section"
      className="global-contacts-section"
      style={{ backgroundImage: `url(${BGImage})` }}
    >
      <div className="frame-306">
        <div className="frame-316">
          <h1>Contact Us</h1>
          <p>
          Have questions or need assistance? Reach out to our team and we’ll get
          back to you as soon as possible.
          </p>
        </div>
        <div className="frame-304">
          <form
            action="https://formsubmit.co/bishirhirasa@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value={`New Contact Inquiry - ${formData.name}`} />

            <div className="frame-314">
              <div className="frame-305">
                <h4>For Inquiries</h4>
                <p>
                  Please submit the form below or email to{" "}
                  <span className="email">jobs@tellida.com</span>
                </p>
              </div>
              <div className="frame-312">
                <div className="frame-303">
                  <label>Name*</label>
                  <div className="frame-302">
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
                <div className="frame-303">
                  <label>Email*</label>
                  <div className="frame-302">
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

                <div className="frame-303">
                  <label>Contact Number</label>
                  <div className="frame-302">
                    <input
                      type="number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      placeholder="Enter mobile number here"
                      required
                    />
                  </div>
                </div>

                <div className="frame-303">
                  <label>Company </label>
                  <div className="frame-302">
                    <input
                      type="text"
                      name="cname"
                      value={formData.cname}
                      onChange={handleChange}
                      placeholder="Enter company name here"
                      required
                    />
                  </div>
                </div>

                <div className="frame-303">
                  <label>Industry</label>
                  <div className="frame-302">
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      placeholder="Enter industry here"
                      required
                    />
                  </div>
                </div>

                
              </div>

              <div className="frame-310">
                <button type="submit" className="send-button">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <h2>✅ Successfully Sent!</h2>
            <p>Your message has been successfully sent to our team.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GlobalContacts;
