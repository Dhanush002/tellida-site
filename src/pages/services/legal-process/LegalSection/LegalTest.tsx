import React from "react";
import "./LegalTest.css";

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  rating: number;
}

const LegalTest: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "David Cary",
      role: "Partner Wilkins Kennedy LLP",
      feedback:
        "Since 2012, Tellida has provided us with professional, timely, and flexible bookkeeping and accounting services tailored to our needs. They’ve been an excellent business partner, and I highly recommend their services.",
      rating: 5,
    },
    {
      name: "Geeves Silva",
      role: "Operations Manager Hooders Law Limited",
      feedback:
        "Tellida consistently provides highly professional staff, from part-qualified to fully qualified ACCA and CIMA accountants, along with a fully trained legal team. Their excellent English standards enhance Hooders' ability to deliver quality services to our SME and private clients.",
      rating: 5,
    },
  ];

  return (
    <section className="testimonial-section-legal">
      <div className="testimonial-header-legal">
        <h4 className="testimonial-subtitle-legal">OUR TESTIMONIAL</h4>
        <h2 className="testimonial-title-legal">
          Core Services Made<br />To Scale Your Business <br />Update Properly
        </h2>
      </div>
      <div className="testimonial-cards-legal">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card-legal" key={index}>
            <p className="testimonial-feedback-legal">{testimonial.feedback}</p>
            <div className="testimonial-footer-legal">
              <h4 className="testimonial-name-legal">{testimonial.name}</h4>
              <p className="testimonial-role-legal">{testimonial.role}</p>
              <div className="testimonial-rating-legal">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="star-filled-legal">
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="testimonial-dots-legal">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`testimonial-dot-legal ${index === 0 ? "active" : ""}`}
          ></div>
        ))}
      </div> */}
    </section>
  );
};

export default LegalTest;
