import React, { useState } from 'react';
import './faqs.css';

const faqsData = [
  { question: "Can Tellida handle complex FAO (Finance and Accounting Outsourcing) tasks efficiently?", answer: "Yes, we specialize in FAO services, offering end-to-end solutions for bookkeeping, financial reporting, tax preparation, and compliance. Our team has extensive experience in managing large financial operations and ensuring timely, accurate, and cost-effective delivery of services." },
  { question: "How does Tellida manage Legal Process Outsourcing (LPO) efficiently?", answer: "Our LPO services are designed to streamline legal operations, from contract management to document review. With trained legal professionals and cutting-edge technology, we ensure high-quality results while improving efficiency, reducing costs, and minimizing turnaround time for your legal tasks." },
  { question: "How does Tellida maintain consistent quality in its services?", answer: "We follow rigorous quality control processes and industry best practices to ensure that every task, whether financial or legal, meets the highest standards of accuracy and compliance. Our team is continuously trained and monitored to deliver consistent, top-tier service." },
  { question: "How does Tellida handle urgent or last-minute project requests?", answer: "We understand that some projects have tight deadlines. Tellida’s flexible approach allows us to quickly allocate resources and prioritize urgent tasks, ensuring that your business needs are met without compromising on quality." },
  { question: "Can Tellida support businesses in managing both small and large-scale projects?", answer: "Yes, whether you’re handling a small one-off task or need ongoing support for large-scale operations, Tellida offers scalable solutions tailored to your needs. We adapt our services to ensure efficiency and excellence for businesses of any size." },
  { question: "Does Tellida offer a dedicated point of contact for clients?", answer: "Yes, each client is assigned a dedicated account manager who serves as their primary point of contact. This ensures clear communication, consistent support, and personalized service, making it easier to manage your projects with Tellida." },
  { question: "How does Tellida maintain data security and confidentiality?", answer: "At Tellida, we understand the critical importance of protecting sensitive data. To ensure the highest standards of security, we have implemented comprehensive IT and physical security measures along with adherence to the ISO/IEC 27001:2022 standard. This internationally recognized certification ensures that we maintain robust data protection protocols and confidentiality at all times, providing you with peace of mind that your data is in safe hands." },
  { question: "Does Tellida offer 24/7 assistance?", answer: "Yes, we have a dedicated support team available around the clock to assist you whenever you need help. Whether it's a quick question or urgent support, we're here to ensure you're always covered." },
];

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-heading-wrapper">
      <h4 className="sub-title">About Us</h4>
        <h2 className="faq-heading">Frequently Asked Questions</h2>
      </div>
      {faqsData.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
            <span className="question-mark">?</span>
            <span className="accordion-title">{faq.question}</span>
            <span className="accordion-icon">{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className="accordion-content">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
