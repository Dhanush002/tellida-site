import "./Terms.css";

const Terms = () => {
  return (
    <section className="terms-container">
      <div className="terms-content">
        <h2 className="terms-title">Terms of Service</h2>
        <p className="terms-date">Effective Date: 08 March 2025</p>

        <p className="terms-paragraph">
          By using Tellida’s website and services, you agree to these Terms of Service.
        </p>

        <div className="terms-section">
          <h3 className="terms-heading">1. Use of Services</h3>
          <p className="terms-paragraph">
            You agree to use our services only for lawful purposes. Any misuse, unauthorized access, or violation of applicable laws may result in termination of access.
          </p>
        </div>

        <div className="terms-section">
          <h3 className="terms-heading">2. Intellectual Property</h3>
          <p className="terms-paragraph">
            All website content, including text, graphics, logos, and software, is owned by Tellida and protected by intellectual property laws. You may not copy, distribute, or modify any content without our consent.
          </p>
        </div>

        <div className="terms-section">
          <h3 className="terms-heading">3. Limitation of Liability</h3>
          <p className="terms-paragraph">
            Tellida is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services, including but not limited to data loss, security breaches, or service disruptions.
          </p>
        </div>

        <div className="terms-section">
          <h3 className="terms-heading">4. Confidentiality</h3>
          <p className="terms-paragraph">
            Any confidential information exchanged between Tellida and its clients must be protected by both parties. We adhere to strict data protection policies in line with ISO 27001:2013.
          </p>
        </div>

        <div className="terms-section">
          <h3 className="terms-heading">5. Third-Party Links</h3>
          <p className="terms-paragraph">
            Our website may contain links to third-party websites. Tellida is not responsible for their privacy practices or content.
          </p>
        </div>

        <div className="terms-section">
          <h3 className="terms-heading">6. Termination</h3>
          <p className="terms-paragraph">
            We reserve the right to suspend or terminate services if a user violates these Terms.
          </p>
        </div>

        <div className="terms-section">
          <h3 className="terms-heading">7. Governing Law</h3>
          <p className="terms-paragraph">
            These Terms shall be governed by the laws of [Insert Jurisdiction].
          </p>
        </div>

        <div className="terms-section">
          <h3 className="terms-heading">8. Contact Us</h3>
          <p className="terms-paragraph">
            For questions regarding these Terms or our Privacy Policy, contact us at <a href="mailto:info@tellida.com">info@tellida.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terms;
