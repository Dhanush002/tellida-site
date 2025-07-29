import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BrandsSection.css";

// Import your logo images
import logo1 from "../../assets/logo11.png";
import logo2 from "../../assets/logo22.png";
import logo3 from "../../assets/logo33.png";
import logo4 from "../../assets/logo44.png";
import logo5 from "../../assets/logo55.png";
import logo6 from "../../assets/logo12.png";
import logo7 from "../../assets/logo23.png";
import logo8 from "../../assets/logo34.png";
import logo9 from "../../assets/inspirelogo.jpeg";

const brandLogos = [
  logo1, logo2, logo3, logo4,
  logo5, logo6, logo7, logo8,logo9,
];

const BrandsSection: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="brands-section">
      <div className="frame-135">
        <div className="brands-heading">
          <p>Trusted By</p>
          <p>Top Quality Brands</p>
        </div>
        <Slider {...settings} className="brands-slider">
          {brandLogos.map((logo, idx) => (
            <div key={idx} className="brand-slide">
              <img src={logo} alt={`Brand ${idx + 1}`} className="brand-image" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BrandsSection;
