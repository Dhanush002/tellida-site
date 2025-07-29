// ✅ All imports go first
import React from "react";
import "./CertifiedDataSecurity.css";
import iso from "../../assets/iso.png";


const CertifiedDataSecurity = () => {
  return (
    <div className="certified-data-security-container">
      <section className="security-hero">
        <div className="hero-content">
        <img src={iso} alt="ISO 27001 Certification" className="iso-image" />
         <div className="hero-text">
      <h1>Certified Data Security</h1>
      <p><b>ISO 27001:2022 is the gold standard for information security management systems (ISMS).</b></p>
    </div>
  </div>
</section>


      <section className="security-certifications">
      <h2>Why Security Matters at Tellida</h2>
      <p>At Tellida, we understand that data security is not just a priority—it’s a responsibility. 
        With cyber threats and data breaches on the rise, businesses need a partner they can trust 
        with their sensitive information. That’s why we are proud to be ISO 27001:2022 certified, 
        ensuring that our information security management practices meet the highest international standards.</p> <br />


        <h2>What ISO 27001:2022 Ensures</h2>
        <ul>
          <li> Identify and mitigate security risks</li>
          <li> Ensure confidentiality, integrity, and availability of data</li>
          <li> Protect against cyber threats and unauthorized access</li>
          <li> Maintain compliance with international regulations</li>
        </ul>
      </section>

      <section className="security-content">
        <h2>How Tellida Implements ISO 27001:2022</h2>
        <p>
          We have embedded security into every aspect of our operations: 
          <br /><br />
          • Strict Data Security Policies – We enforce robust security policies
          to safeguard client data.
          <br />
          • Continuous Risk Assessments – We proactively address security
          threats to prevent breaches.
          <br />
          • Employee Training & Awareness – All team members undergo regular
          security training.
          <br />
          • Secure IT Infrastructure – Advanced encryption, firewalls, and
          multi-layered authentication protect your data.
          <br />
          • Ongoing Compliance & Audits – Regular internal and third-party
          audits ensure continuous improvement.
        </p>
      </section>

      <section className="security-values">
        <h2>What This Means for Our Clients</h2>
        <p>
          By choosing Tellida, you’re partnering with a company that:
          <br /> <br />
          • Takes data security seriously
          <br />
          • Follows globally recognized security practices
          <br />
          • Offers secure outsourcing solutions you can trust
          <br />
          • Continuously improves its security framework to meet evolving
          threats
          <br /> <br /><b style={{textAlign:"center"}}>
          When you work with us, you can be confident that your business data is
          in safe hands.</b>
        </p>
      </section>
    </div>
  );
};

export default CertifiedDataSecurity;
