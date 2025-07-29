import React from "react";
import "./Cookies.css";

const Cookies = () => {
  return (
    <section className="cookies-container">
      <div className="cookies-content">
        <h2 className="cookies-title">Cookies Policy</h2>
        <p className="cookies-date">Last Updated: 08 March 2025</p>

        <p className="cookies-paragraph">
          At Tellida, we are committed to protecting your privacy and ensuring that your experience on our website is as enjoyable and efficient as possible. This Cookies Policy explains how we use cookies on www.tellida.com (the “Website”) and the choices you have regarding their use.
        </p>

        <div className="cookies-section">
          <h3 className="cookies-heading">1. What are Cookies?</h3>
          <p className="cookies-paragraph">
            Cookies are small text files stored on your device (computer, tablet, smartphone) when you visit a website. They allow the website to recognize your device and store information about your preferences or actions over time.
          </p>
        </div>

        <div className="cookies-section">
          <h3 className="cookies-heading">2. How We Use Cookies</h3>
          <p className="cookies-paragraph">We use cookies for various purposes to improve your experience and website functionality, including:</p>
          <ul className="cookies-list">
            <li><strong>Necessary Cookies:</strong> Essential for website operation, enabling navigation and secure access.</li>
            <li><strong>Performance Cookies:</strong> Collect data on how visitors use our Website to improve performance and usability.</li>
            <li><strong>Functionality Cookies:</strong> Remember user preferences (e.g., language, region) for a more personalized experience.</li>
            <li><strong>Targeting/Advertising Cookies:</strong> Deliver ads tailored to your interests by tracking browsing behavior.</li>
          </ul>
        </div>

        <div className="cookies-section">
          <h3 className="cookies-heading">3. Types of Cookies We Use</h3>
          <ul className="cookies-list">
            <li><strong>Session Cookies:</strong> Temporary cookies erased when you close your browser.</li>
            <li><strong>Persistent Cookies:</strong> Remain on your device for a set period to remember your preferences across visits.</li>
            <li><strong>Third-Party Cookies:</strong> Set by external providers like Google Analytics to help us understand user behavior.</li>
          </ul>
        </div>

        <div className="cookies-section">
          <h3 className="cookies-heading">4. Managing and Controlling Cookies</h3>
          <p className="cookies-paragraph">
            You can manage or disable cookies through your browser settings. Disabling cookies may affect website functionality.
          </p>
          <ul className="cookies-list">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome: Manage Cookies</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Mozilla Firefox: Manage Cookies</a></li>
            <li><a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer">Safari: Manage Cookies</a></li>
            <li><a href="https://support.microsoft.com/en-us/help/4468242/microsoft-edge-browsing-data-and-privacy" target="_blank" rel="noopener noreferrer">Microsoft Edge: Manage Cookies</a></li>
          </ul>
          <p className="cookies-paragraph">
            Visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a> for more details on managing cookies across different browsers.
          </p>
        </div>

        <div className="cookies-section">
          <h3 className="cookies-heading">5. Your Consent</h3>
          <p className="cookies-paragraph">
            By using our Website, you consent to the use of cookies as described in this policy. If you do not agree, adjust your browser settings or refrain from using the Website.
          </p>
        </div>

        <div className="cookies-section">
          <h3 className="cookies-heading">6. Changes to This Cookies Policy</h3>
          <p className="cookies-paragraph">
            We may update this Cookies Policy periodically. Changes will be posted on this page with an updated date.
          </p>
        </div>

        <div className="cookies-section">
          <h3 className="cookies-heading">7. Contact Us</h3>
          <p className="cookies-paragraph">
            If you have any questions or concerns about our use of cookies, please contact us at <a href="mailto:info@tellida.com">info@tellida.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cookies;
