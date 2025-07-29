import React from "react";
import "./Policy.css";

const Policy = () => {
  return (
    <section className="policy-container">
      <div className="policy-content">
        <h2 className="policy-title">Privacy Policy</h2>
        <p className="policy-date">Effective Date:  08 March 2025</p>

        <p className="policy-paragraph">
          Tellida ("we," "our," or "us") is committed to protecting the privacy and security of our website visitors and clients. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information in compliance with ISO 27001:2013 standards.
        </p>

        <div className="policy-section">
          <h3 className="policy-heading">1. Information We Collect</h3>
          <ul className="policy-list">
            <li><strong>Personal Data:</strong> Name, email, phone number, job title, company name, and any other information you provide via our website.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, operating system, and usage data collected via cookies and analytics tools.</li>
            <li><strong>Client Data:</strong> Information related to outsourced services provided by Tellida.</li>
          </ul>
        </div>

        <div className="policy-section">
          <h3 className="policy-heading">2. How We Use Your Information</h3>
          <p className="policy-paragraph">We process your information to:</p>
          <ul className="policy-list">
            <li>Provide and improve our services.</li>
            <li>Respond to inquiries and requests.</li>
            <li>Ensure website security and prevent fraud.</li>
            <li>Comply with legal and regulatory requirements.</li>
            <li>Send marketing communications (with opt-out options).</li>
          </ul>
        </div>

        <div className="policy-section">
          <h3 className="policy-heading">3. Data Security</h3>
          <p className="policy-paragraph">
            Tellida implements stringent security controls, including encryption, access controls, and regular audits, in accordance with ISO 27001:2013 to protect your data from unauthorized access, alteration, or loss.
          </p>
        </div>

        <div className="policy-section">
          <h3 className="policy-heading">4. Data Sharing</h3>
          <p className="policy-paragraph">We do not sell your data. We may share information with:</p>
          <ul className="policy-list">
            <li>Trusted service providers for business operations.</li>
            <li>Regulatory authorities as required by law.</li>
            <li>Partners with whom we collaborate under strict confidentiality agreements.</li>
          </ul>
        </div>

        <div className="policy-section">
          <h3 className="policy-heading">5. Data Retention</h3>
          <p className="policy-paragraph">
            We retain personal data only as long as necessary for business, legal, or regulatory purposes. Once no longer needed, data is securely deleted.
          </p>
        </div>

        <div className="policy-section">
          <h3 className="policy-heading">6. Your Rights</h3>
          <p className="policy-paragraph">You have the right to:</p>
          <ul className="policy-list">
            <li>Request access, correction, or deletion of your data.</li>
            <li>Object to or restrict processing.</li>
            <li>Withdraw consent for marketing communications.</li>
          </ul>
          <p className="policy-paragraph">To exercise your rights, contact us at [Insert Contact Email].</p>
        </div>

        <div className="policy-section">
          <h3 className="policy-heading">7. Cookies and Tracking Technologies</h3>
          <p className="policy-paragraph">
            We use cookies to improve your browsing experience. You can manage cookie preferences via your browser settings.
          </p>
        </div>

        <div className="policy-section">
          <h3 className="policy-heading">8. Updates to this Policy</h3>
          <p className="policy-paragraph">
            We may update this policy periodically. The latest version will always be available on our website.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Policy;
