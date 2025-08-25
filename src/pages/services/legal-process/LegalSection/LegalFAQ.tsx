import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import "./LegalFAQ.css";

type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
  {
    q: "Why should UK law firms outsource their conveyancing services to Tellida?",
    a: "Tellida offers comprehensive, end-to-end conveyancing solutions that include everything from client onboarding and property searches to contract preparation and HMLR registration. We provide cost-effective, high-quality services with minimal solicitor involvement, helping law firms improve efficiency and reduce operational costs.",
  },
  {
    q: "Can Tellida handle large volumes of conveyancing work without compromising quality?",
    a: "Yes, Tellida specializes in handling large-scale conveyancing projects. Our scalable processes and skilled team ensure that no matter the volume, we deliver accurate, timely, and compliant services tailored to meet the needs of UK law firms.",
  },
  {
    q: "How does Tellida ensure compliance with UK conveyancing regulations?",
    a: "Tellida strictly adheres to the latest UK conveyancing regulations, including compliance with the Land Registration Act 2002, the Solicitors Regulation Authority (SRA) guidelines, and HMLR requirements. Our processes are designed to ensure full compliance while maintaining high standards of quality and accuracy.",
  },
  {
    q: "What makes Tellida's conveyancing services stand out for UK law firms?",
    a: "Tellida combines legal expertise with cutting-edge technology to streamline the conveyancing process. Our efficient workflows, attention to detail, and focus on client satisfaction allow UK law firms to reduce overheads and turnaround times while maintaining top-quality service for their clients.",
  },
  {
    q: "Can Tellida handle complex or high-value property transactions?",
    a: "Yes, Tellida’s team is equipped to manage complex property transactions, including those involving high-value estates, commercial properties, and intricate legal frameworks. We understand the nuances of such transactions and provide tailored solutions to ensure a smooth, efficient process.",
  },
  {
    q: "How does Tellida maintain data security in its conveyancing services?",
    a: "At Tellida, we prioritize data security. We implement robust IT security measures in line with ISO/IEC 27001:2022 standards, ensuring that all client data remains protected throughout the conveyancing process. Our systems are designed to ensure confidentiality and comply with GDPR requirements.",
  },
  {
    q: "What kind of support does Tellida provide during the conveyancing process?",
    a: "Tellida offers 24/7 support to ensure that UK law firms have access to assistance whenever needed. Our dedicated team provides timely updates, answers queries, and offers expert advice throughout the entire conveyancing process, ensuring smooth project execution.",
  },
  {
    q: "How can Tellida's conveyancing services help UK law firms reduce costs?",
    a: "By outsourcing conveyancing tasks to Tellida, UK law firms can significantly reduce overhead costs. We provide cost-effective solutions that handle the time-consuming, repetitive tasks involved in conveyancing, allowing law firms to focus on higher-value work and client relationships while lowering their operational expenses.",
  },
  {
    q: "Is Tellida's conveyancing team experienced in handling bulk property transactions?",
    a: "Yes, Tellida has extensive experience handling bulk property transactions for law firms across the UK. We have developed efficient systems and workflows to process multiple transactions simultaneously, ensuring timely delivery and minimal errors.",
  },
  {
    q: "How does Tellida ensure a smooth transition when outsourcing conveyancing tasks?",
    a: "Tellida works closely with UK law firms to understand their specific requirements, ensuring a seamless integration of our services. We provide detailed onboarding, clear communication, and continuous support, allowing for a smooth transition and minimal disruption to your operations.",
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
