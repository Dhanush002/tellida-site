import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./HowWeWork.css";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay } },
});

const stagger = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

const steps = [
  {
    number: "1",
    title: "Discovery & Consultation",
    desc: `We start by understanding your business, goals, and challenges to craft tailored outsourcing solutions.`,
  },
  {
    number: "2",
    title: "Custom Proposal & Service Design",
    desc: `We create a transparent outsourcing plan built for measurable results.`,
  },
  {
    number: "3",
    title: "Onboarding & Integration",
    desc: `Smooth, secure transition with minimal disruption.`,
  },
  {
    number: "4",
    title: "Delivery & Collaboration",
    desc: `Embedded teams delivering consistent, high-quality results.`,
  },
  {
    number: "5",
    title: "Feedback & Improvement",
    desc: `We evolve with your needs for continuous optimisation.`,
  },
  {
    number: "6",
    title: "Security & Compliance",
    desc: `Your data is protected at the highest standards.`,
  },
];



const HowWeWork: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <section className="how-we-work" aria-labelledby="how-title">
      <motion.div
        className="how-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <motion.h2 id="how-title" variants={fadeUp(0)}>
          How We Work
        </motion.h2>
        <motion.p className="how-sub" variants={fadeUp(0.05)}>
          Transparent, Seamless, and Client-Centric
        </motion.p>
        <motion.p className="how-intro" variants={fadeUp(0.1)}>
          Great partnerships start with clarity and confidence. Our step-by-step process takes you
          from initial contact to ongoing success with full transparency, collaboration, and
          support every step of the way.
        </motion.p>
      </motion.div>

      {/* Steps */}
      <motion.div
        className="how-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        {steps.map((step) => (
          <motion.article
            key={step.number}
            className="how-card"
            variants={card}
            whileHover={
              !prefersReduced
                ? { y: -4, boxShadow: "0 12px 26px rgba(0,0,0,0.08)" }
                : {}
            }
          >
            <div className="how-step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default HowWeWork;
