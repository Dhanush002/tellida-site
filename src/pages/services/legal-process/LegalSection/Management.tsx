import React, { useRef } from "react";
import Slider from "react-slick";
import "./Management.css";

import Rectangle33 from "../../../../assets/Rectangle 33.svg";
import Rectangle34 from "../../../../assets/Rectangle 34.svg";
import Rectangle35 from "../../../../assets/Rectangle 35.svg";
import Rectangle36 from "../../../../assets/Hoowla.png";
import Rectangle37 from "../../../../assets/Rec37.svg";
import Rectangle38 from "../../../../assets/dps.jpg";

const logos = [
  { src: Rectangle33, alt: "System Logo 1" },
  { src: Rectangle34, alt: "System Logo 2" },
  { src: Rectangle35, alt: "System Logo 3" },
  { src: Rectangle36, alt: "System Logo 4" },
  { src: Rectangle37, alt: "System Logo 5" },
  { src: Rectangle38, alt: "System Logo 6" },
];

const Management: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,           // duration for one full slide scroll
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,      // start next slide immediately
    cssEase: "linear",     // smooth constant speed
    pauseOnHover: true,    // pause when hovering any logo
    responsive: [
      { breakpoint: 1366, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 414, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="management-section">
      <div className="management-container">
        <div className="management-header">
          <h3 className="management-title">Systems</h3>
          <p className="management-description">
            We have worked with the following case management systems and are able to adapt according to our client's system easily.
          </p>
        </div>

        <Slider ref={sliderRef} {...settings} className="management-slider">
          {logos.map(({ src, alt }, idx) => (
            <div key={idx} className="management-slide">
              <img src={src} alt={alt} className="management-logo" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Management;
