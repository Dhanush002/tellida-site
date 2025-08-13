import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./WhyTellida.css";
import WhyTellidaImage from "../../assets/WhyTellida.jpg";
import { Link } from "react-router-dom";

// ===== Animation helpers =====
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  },
});

const stagger = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
};

// ===== Count up hook =====
function useCountUp(target: number, durationMs = 1200) {
  const [value, setValue] = useState(0);
  const raf = useRef<number | null>(null);
  const start = useRef<number | null>(null);

  useEffect(() => {
    const step = (t: number) => {
      if (start.current === null) start.current = t;
      const p = Math.min(1, (t - start.current) / durationMs);
      setValue(Math.round(target * (0.2 + 0.8 * p))); // ease in
      if (p < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [target, durationMs]);

  return value;
}

// ===== Stat child component =====
const Stat: React.FC<{ value: number; label: string; suffix?: string; duration?: number }> = ({
  value,
  label,
  suffix = "",
  duration = 1200,
}) => {
  const v = useCountUp(value, duration);
  return (
    <div className="why-stat" aria-label={label}>
      <div className="why-stat-value">
        {v}
        <span>{suffix}</span>
      </div>
      <div className="why-stat-label">{label}</div>
    </div>
  );
};

// ===== Main component =====
const WhyTellida: React.FC = () => {
  const prefersReduced = useReducedMotion();

  const stats = [
    { label: "Operational Coverage", value: 24, suffix: "/7" },
    { label: "Cost Savings for UK Clients", value: 65, suffix: "%" },
    { label: "GDPR & ISO 27001:2022 Compliance", value: 100, suffix: "%" },
  ];

  return (
    <section className="why-tellida" aria-labelledby="why-title">
      {/* HEADER */}
      <div className="why-header">
        <motion.div
          className="why-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.h2 id="why-title" variants={fadeUp(0)}>
            Revolutionizing Operations with Tellida’s Efficient and Secure Business Process Outsourcing Services
          </motion.h2>
          <motion.p className="intro" variants={fadeUp(0.05)}>
            The partner behind the scenes powering your growth. We provide the people, processes,
            and performance to help you scale with precision, quality, and control. Whether you’re
            a law firm navigating conveyancing or a CFO cutting costs without compromise, we plug
            into your systems and deliver reliably.
          </motion.p>

          {/* Live metrics */}
          <motion.div className="why-stats" variants={fadeUp(0.1)}>
            {stats.map((s, i) => (
              <Stat
                key={s.label}
                value={s.value}
                label={s.label}
                suffix={s.suffix}
                duration={1000 + i * 250}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.figure
          className="why-image"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={WhyTellidaImage}
            alt="Teams collaborating across UK and Sri Lanka"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="sr-only">Global delivery with local alignment</figcaption>
          <span className="img-gradient" aria-hidden />
        </motion.figure>
      </div>

      {/* REASONS GRID */}
      <motion.div
        className="why-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        {[
          { t: "End-to-End Service", d: "From onboarding to delivery—handled with precision." },
          { t: "UK-Aligned Expertise", d: "Trained in UK law, finance, and compliance." },
          { t: "Global Support, Local Feel", d: "UK office in Sutton, delivery from Sri Lanka." },
          { t: "Fully Integrated", d: "We plug into your systems, your workflows, your culture." },
        ].map((r) => (
          <motion.article
            variants={card}
            key={r.t}
            className="why-card"
            whileHover={!prefersReduced ? { y: -4, boxShadow: "0 12px 28px rgba(0,0,0,0.08)" } : {}}
            whileFocus={!prefersReduced ? { y: -2 } : {}}
            tabIndex={0}
            role="group"
            aria-label={r.t}
          >
            <div className="why-card-badge" aria-hidden>✓</div>
            <h3>{r.t}</h3>
            <p>{r.d}</p>
          </motion.article>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="why-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp(0)}
      >
        <h3>Ready to build your future-ready team?</h3>
        <p>Book a discovery call and see a tailored costed plan for your firm.</p>
        <Link className="cta-button" to="/contact-us">
          Book a Discovery Call
        </Link>
      </motion.div>
    </section>
  );
};

export default WhyTellida;
