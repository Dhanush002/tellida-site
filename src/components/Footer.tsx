import React from "react";
import "./Footer.css";
import TellidaLogo from "../assets/cropped-cropped-cropped-Background3-e1665755527623-1 2.png";
import ISOLogo from "../assets/iso.png";
import cima from "../assets/cima.webp";
import CATrain from "../assets/catrain.jpeg";
import ACCALogo from "../assets/Frame 132.png";
import FacebookIcon from "../assets/Social icon.png";
import InstagramIcon from "../assets/Social icon (1).png";
import youtubeIcon from "../assets/icons8-youtube-100 (1).png";
import LinkedInIcon from "../assets/Group.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IncomingMessage } from "node:http";
import { runInContext } from "node:vm";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (location.pathname === "/contact-us") {
      const contactSection = document.getElementById("global-contacts-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/contact-us", { state: { scrollToContact: true } });
    }
  };

  const handleNavigateToCaseStudy = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const CaseStudySection = document.getElementById("legal-case-studies-id");
      if (CaseStudySection) {
        CaseStudySection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollToCaseStudy: true } });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Left Section */}
        <div className="footer-left">
          <img src={TellidaLogo} alt="Tellida Logo" className="footer-logo" />

          <div className="bottom-address">
            <p className="address-sub">
              <strong>United Kingdom</strong>
            </p>
            <p className="address">
            10 Sutton Plaza, <br />
            Sutton, SM1 4FT, UK
            </p>
          </div>

          <div className="top-address">
            <h3 className="address-title">Corporate Office</h3>
            <p className="address-sub">
              <strong>Sri Lanka</strong>
            </p>
            <p className="address">
              No. 228 Galle Road, <br />
              Colombo 4, Sri Lanka
            </p>
          </div>

          <div className="bottom-address">
            <p className="address-sub">
              <strong>Sri Lanka</strong>
            </p>
            <p className="address">
              No. 26, Vajira Road, <br />
              Colombo 4, Sri Lanka
            </p>
          </div>

          
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <div className="footer-column">
            <h3>Main</h3>
            <ul>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <a href="/#contact-us" onClick={handleNavigateToContact}>
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              
            </ul>
          </div>
          <div className="footer-column">
            <h3>Sub Links</h3>
            <ul>
            <li>
                <Link to="/services/finance">
                  Finance and Accounts Outsourcing
                </Link>
              </li>
              <li>
                <Link to="/services/legal-process">
                  Legal Process Outsourcing
                </Link>
              </li>
              <li>
                <Link to="/services/tech-support">
                  Remote Tech Support, Back Office Support
                </Link>
              </li>
              <li>
                <Link to="/services/call-centre">
                  Contact Centre Outsourcing
                </Link>
              </li>
              
              
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-certified">
          <h3>Certified By</h3>
          <div className="footer-certificates">
            <img src={ACCALogo} alt="ACCA Certified" className="acca" />
            <img src={cima} alt="ACCA Certified" className="cima" />
            <img src={CATrain} alt="ACCA Certified" className="cima" />
            <img src={ISOLogo} alt="ISO Certified" className="iso" />
          </div>

          <div className="footer-social">
            <a
              href="https://www.facebook.com/Tellida?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/tellida_official_?igsh=MTE1YjFyYmp5djF6bw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/tellida/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>

            <a
              href="https://www.youtube.com/@tellida2086"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtubeIcon} alt="YouTube"  />
            </a>
          </div>

          <div className="footer-social-mobile">
          <a
            href="https://www.facebook.com/Tellida?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FacebookIcon} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/tellida_official?igsh=MWI3MHJxaTg0empwaw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/tellida/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a
              href="https://www.youtube.com/@tellida2086"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtubeIcon} alt="YouTube" style={{objectFit : "cover", width : "100%" , padding : 0}}/>
            </a>
        </div>

          <div>
          <p className="mobileNum">
            <br /><b>
              SL : +94 117743556 <br />
              SL : +94 117743556 <br />
              
              UK : +44 7404408795
              </b></p>
          </div>


        </div>

        
      </div>

      <div className="footer-bottom">
      <p><a href="https://in10nt.com/" target="_blank" rel="noopener noreferrer">© 2024 Tellida (Pvt) Ltd. All rights reserved.</a></p>

        <div className="footer-terms">
          <Link to="/policy">
            <span>Privacy Policy</span>
          </Link>

          <Link to="/terms">
            <span>Terms of Service</span>
          </Link>
          <Link to="/cookies">
            <span>Cookie Settings</span>
          </Link>
          <span></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
