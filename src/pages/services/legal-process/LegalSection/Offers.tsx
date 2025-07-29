import React from "react";
import "./Offers.css";
import Image1 from "../../../../assets/R59.png";
import Image2 from "../../../../assets/R80.png";
import Image3 from "../../../../assets/R81.png";

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
            Tellida specializes in residential conveyancing, compliance, and
            customer support for law firms. With trained legal professionals and
            ISO 27001 certification, they deliver quick, reliable, and secure
            services while enhancing operational efficiency.
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
        </div>
      </div>
    </section>
  );
};

export default Offer;
