import React, { useState } from "react";
import "./FinanceExpertise.css";

interface FinanceItem {
    title: string;
    description: string;
    points: string[];
  }

const financeData: FinanceItem[] = [
  {
    title: "Accounting Staff",
    description:
      "Our Accounting Staff are trained to handle day-to-day financial operations, ensuring accuracy and consistency in your firm’s workflows.",
    points: [
      "Bookkeeping & Data Entry – Maintain clean and organized financial records",
      "Transaction Processing – Sales & purchase invoices, expense tracking",
      "Bank Reconciliation – Accurate tracking of cash flow & statements",
      "Software Proficiency – Expertise in Xero, Sage, QuickBooks, and more",
    ],
  },
  {
    title: "Accounts Seniors",
    description:
      "Our Accounts Seniors bring in-depth knowledge and problem-solving skills to optimize financial operations.",
    points: [
      "Finalizing Accounts – Prepare reports for internal & external use",
      "Payroll Reconciliation – Ensure compliance with payroll regulations",
      "AR/AP Management – Monitor and balance accounts receivable/payable",
      "Depreciation & Compliance – Maintain accurate financial asset records",
    ],
  },
  {
    title: "Financial Supervisor",
    description:
      "A Financial Supervisor at Tellida ensures structured reporting, reconciliations, and compliance, allowing firms to stay audit-ready and financially sound.",
    points: [
      "Consolidated Financial Statements (FS) – Prepare comprehensive reports",
      "Department/Location-Based Reporting – Insights for strategic decision-making",
      "Complex Reconciliations – AR/AP, intercompany transactions, and adjustments",
      "Compilation & Reviewed FS – High-quality, review-ready financials",
    ],
  },
  {
    title: "Finance Managers",
    description:
      "Our Finance Managers bring years of expertise in high-level financial management, tax planning, and leadership.",
    points: [
      "FAS 109 Tax Provision & Tax Entries – Ensure tax efficiency & compliance",
      "Deferred Income & Expenses – Manage long-term financial strategies",
      "Team Leadership – Supervise teams for efficiency and productivity",
      "Work Allocation & Reporting – Streamline processes & ensure accountability",
    ],
  },
];

const FinanceExpertise: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="finance-grid">
      {financeData.map((item, index) => (
        <div key={index} className="finance-card">
          <h4>{item.title}</h4>


          <div className="underline" />
          <p>{item.description}</p>
          <ul>
            {item.points.map((point, idx) => (
            <li key={idx}>
            <span className="arrow-icon">➤</span>
            {point}
            </li>
             ))}
          </ul>


          

          {openIndex === index && (
            <div className="accordion-content">
              <p>
                Here you can include additional information or extended services related to <strong>{item.title}</strong>.
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FinanceExpertise;
