import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import "./FAQSection.css";

type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
  {
    q: "Can Tellida handle complex FAO (Finance and Accounting Outsourcing) tasks efficiently?",
    a: "Yes, we specialize in FAO services, offering end-to-end solutions for bookkeeping, financial reporting, tax preparation, and compliance. Our team has extensive experience in managing large financial operations and ensuring timely, accurate, and cost-effective delivery of services.",
  },
  {
    q: "How does Tellida manage Legal Process Outsourcing (LPO) efficiently?",
    a: "Our LPO services are designed to streamline legal operations, from contract management to document review. With trained legal professionals and modern tooling, we ensure high-quality results while improving efficiency, reducing costs, and minimizing turnaround time.",
  },
  {
    q: "How does Tellida maintain consistent quality in its services?",
    a: "We follow rigorous quality control processes and industry best practices to ensure that every task, whether financial or legal, meets the highest standards of accuracy and compliance. Our team is continuously trained and monitored to deliver consistent, top-tier service.",
  },
  {
    q: "How does Tellida handle urgent or last-minute project requests?",
    a: "We understand that some projects have tight deadlines. Tellida’s flexible approach allows us to quickly allocate resources and prioritize urgent tasks, ensuring that your business needs are met without compromising on quality.",
  },
  {
    q: "Can Tellida support businesses in managing both small and large-scale projects?",
    a: "Yes, whether you’re handling a small one-off task or need ongoing support for large-scale operations, Tellida offers scalable solutions tailored to your needs. We adapt our services to ensure efficiency and excellence for businesses of any size.",
  },
  {
    q: "Does Tellida offer a dedicated point of contact for clients?",
    a: "Yes, each client is assigned a dedicated account manager who serves as their primary point of contact. This ensures clear communication, consistent support, and personalized service, making it easier to manage your projects with Tellida.",
  },
  {
    q: "How does Tellida maintain data security and confidentiality?",
    a: "At Tellida, we understand the critical importance of protecting sensitive data. To ensure the highest standards of security, we have implemented comprehensive IT and physical security measures along with adherence to the ISO/IEC 27001:2022 standard. This internationally recognized certification ensures that we maintain robust data protection protocols and confidentiality at all times, providing you with peace of mind that your data is in safe hands.",
  },
  {
    q: "Does Tellida offer 24/7 assistance?",
    a: "Yes, we have a dedicated support team available around the clock to assist you whenever you need help. Whether it's a quick question or urgent support, we're here to ensure you're always covered.",
  },
  
];

const container = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const FAQItem: React.FC<{
  id: string;
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ id, q, a, isOpen, onToggle }) => {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      className="faq-card"
      variants={item}
      whileHover={!prefersReduced ? { y: -2, boxShadow: "0 10px 24px rgba(0,0,0,0.06)" } : {}}
    >
      <button
        className="faq-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`panel-${id}`}
        id={`button-${id}`}
        type="button"
      >
        <span className="faq-q">{q}</span>
        <span className={`faq-indicator ${isOpen ? "open" : ""}`} aria-hidden>
          <span className="bar bar-1" />
          <span className="bar bar-2" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`panel-${id}`}
            role="region"
            aria-labelledby={`button-${id}`}
            className="faq-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="faq-a">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // open first by default
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="faq-header">
        <h2 id="faq-title">Frequently Asked Questions</h2>
        <p className="faq-sub">
          Clear answers to help you evaluate Tellida with confidence.
        </p>
      </div>

      <motion.div
        className="faq-grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {faqs.map((f, i) => (
          <FAQItem
            key={i}
            id={`faq-${i}`}
            q={f.q}
            a={f.a}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default FAQSection;
