import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Sarah J.",
    role: "Partner, UK Law Firm",
    feedback:
      "Tellida has transformed how we manage conveyancing. Their secure and efficient processes give us peace of mind and let us focus on clients.",
  },
  {
    name: "David L.",
    role: "Managing Partner",
    feedback:
      "The support team is highly responsive and professional. Outsourcing with Tellida helped us scale without compromising quality.",
  },
  {
    name: "Emily R.",
    role: "Compliance Officer",
    feedback:
      "Their ISO 27001-certified approach made onboarding seamless. We can trust them with sensitive legal processes.",
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay }
  }
});

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="testimonial-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp(i * 0.2)}
          >
            <p className="testimonial-feedback">“{t.feedback}”</p>
            <h4 className="testimonial-name">{t.name}</h4>
            <span className="testimonial-role">{t.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
