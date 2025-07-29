import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./logogrid.css";

import job1 from "../../../../assets/logoS1.svg";
import job2 from "../../../../assets/logoS2.png";
import job3 from "../../../../assets/logoS3.png";
import job4 from "../../../../assets/logoS5.png";
import job5 from "../../../../assets/logoS4.jpg";
import job6 from "../../../../assets/logo17.webp";
import job7 from "../../../../assets/logoS7.png";
import job8 from "../../../../assets/logoS8.png";
import job9 from "../../../../assets/logoS9.png";
import job10 from "../../../../assets/logoS10.png";
import job11 from "../../../../assets/logoS11.png";
import job12 from "../../../../assets/logoS12.png";
import job13 from "../../../../assets/logoS13.png";
import job14 from "../../../../assets/logoS14.png";
import job15 from "../../../../assets/logoS15.png";
import job16 from "../../../../assets/logoS16.png";

const logos = [
  job1, job2, job3, job4,
  job5, job6, job7, job8,
  job9, job10, job11, job12,
  job13, job14, job15, job16,
];

const LogoGrid: React.FC = () => {
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
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="logo-grid-container">
      <h2 className="logo-grid-title">Softwares we work with</h2>
      <Slider {...settings}>
        {logos.map((logo, idx) => (
          <div key={idx} className="logo-slide">
            <img
              src={logo}
              alt={`Logo ${idx + 1}`}
              className="logo-grid-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoGrid;
