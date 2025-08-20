import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Offers.css";
import Image1 from "../../../../assets/R59.png";
import Image2 from "../../../../assets/R80.png";
import Image3 from "../../../../assets/R81.png";

// Animation helper
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay }
  }
});

const Offer = () => {
  return (
    <section className="offer-section">
      <div className="offer-container">
        {/* Text Section */}
        <div className="offer-text">
          <p className="offer-highlight">
            Dedicated, efficient, and secure outsourcing solutions.
          </p>
          <h1 className="offer-title">
            Expert Conveyancing and <br /> Legal Support for Law Firms
          </h1>
          <p className="offer-description">
            Tellida provides specialized residential conveyancing, compliance, 
            and client support services for law firms. Backed by a team of trained 
            legal professionals and ISO 27001-certified processes, we ensure secure, 
            efficient, and reliable operations that help firms scale with confidence
          </p>
          
        </div>

        {/* Images Section */}
        <div className="offer-images">
          <div
            className="offer-image"
            style={{ backgroundImage: `url(${Image1})` }}
            role="img"
            aria-label="Legal support image 1"
          ></div>
          <div
            className="offer-image"
            style={{ backgroundImage: `url(${Image2})` }}
            role="img"
            aria-label="Legal support image 2"
          ></div>
          <div
            className="offer-image"
            style={{ backgroundImage: `url(${Image3})` }}
            role="img"
            aria-label="Legal support image 3"
          ></div>
          <motion.div
            className="why-cta"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp(0.2)}
          >
            <h3>Ready to build your future-ready team?</h3>
            <p>
              Book a discovery call and see a tailored costed plan for your firm.
            </p>
            <Link className="cta-button" to="/contact-us">
              Book a Discovery Call
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
