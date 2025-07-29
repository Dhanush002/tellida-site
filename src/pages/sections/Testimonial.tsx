import React from "react";
import "./Testimonial.css";

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  rating: number;
}

const TestimonialSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    
    {
      name: "David Cary",
      role: "Partner Wilkins Kennedy LLP",
      feedback:
        "Since 2012, Tellida has provided us with professional, timely, and flexible bookkeeping and accounting services tailored to our needs. They’ve been an excellent business partner, and I highly recommend their services.",
      rating: 5,
    },
    

  ];

  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h4 className="testimonial-subtitle">Our Client Testimonials</h4>
        <h2 className="testimonial-title">
          Smart Solutions for Smarter Growth
        </h2>
      </div>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-feedback">{testimonial.feedback}</p>
            <div className="testimonial-footer">
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-role">{testimonial.role}</p>
              <div className="testimonial-rating">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="star-filled">
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`testimonial-dot ${index === 0 ? "active" : ""}`}
          ></div>
        ))}
      </div> */}
    </section>
  );
};

export default TestimonialSection;
