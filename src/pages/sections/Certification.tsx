import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Certification.css";

import ISOLogo from "../../assets/iso.png";
import Trophy from "../../assets/iso2.png";
import ICTAward from "../../assets/iso3.png";
import CIMALogo from "../../assets/iso4.png";
import ACCALogo from "../../assets/iso5.png";
import AwardsBg from "../../assets/Awards.png";

const certificationLogos = [
  { src: ISOLogo, alt: "ISO Certified" },
  { src: Trophy, alt: "Industry Award" },
  { src: ICTAward, alt: "ICT Award" },
  { src: CIMALogo, alt: "CIMA Certified" },
  { src: ACCALogo, alt: "ACCA Approved Employer" },
];

const Certification: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className="certification-container"
      style={{ backgroundImage: `url(${AwardsBg})` }}
    >
      <div className="certification-content">
        <div className="certification-title">
          <span className="certification-badge">Certified</span>
          <h2 className="certification-heading">Industry Appreciations</h2>
          <p className="certification-description">
            Tellida has earned widespread industry recognition for delivering
            exceptional outsourcing solutions. Our commitment to quality,
            innovation, and customer satisfaction has garnered accolades,
            reinforcing our reputation as a trusted partner across various
            sectors globally.
          </p>
        </div>

        {/* Slider Section */}
        <div className="certification-logos-slider">
          <Slider {...settings}>
            {certificationLogos.map(({ src, alt }, idx) => (
              <div key={idx} className="certification-slide">
                <img
                  src={src}
                  alt={alt}
                  className={`certification-logo ${alt === "ISO Certified" ? "iso-logo-margin" : ""}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Certification;
