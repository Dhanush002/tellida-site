import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import logo2 from "../assets/black-logo.png";
import {
  Facebook,
  Instagram,
  Youtube,
  ChevronRight,
  Linkedin,
} from "react-feather";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsDark(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openOffCanvas = () => {
    setIsOffCanvasOpen(true);
  };

  const closeAllMenus = () => {
    setIsOffCanvasOpen(false);
    setIsMobileMenuOpen(false);
  };

  const navigate = useNavigate();

  const handleServicesClick = () => {
    navigate("/services");
    setIsDropdownVisible(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-menu-icon" onClick={toggleMobileMenu}>
          <img src={menu} alt="menubar" />
        </div>

        <div className="navbar-left">
          <ul className="navbar-menu">
            <li><NavLink to="/about-us" className="navbar-link">About Us</NavLink></li>
            <li><NavLink to="/careers" className="navbar-link">Careers</NavLink></li>
            <li className="navbar-link dropdown"
                onMouseEnter={() => setIsDropdownVisible(true)}
                onMouseLeave={() => setIsDropdownVisible(false)}>
              <span onClick={handleServicesClick}>Services</span>
              {isDropdownVisible && (
                <div className="dropdown-menu">
                  <NavLink to="/services/finance" className="dropdown-item">Finance & Accounts Outsourcing<ChevronRight /></NavLink>
                  <NavLink to="/services/legal-process" className="dropdown-item">Legal Process Outsourcing<ChevronRight /></NavLink>
                  <NavLink to="/services/tech-support" className="dropdown-item">Tech Remote Support, Back Office Support<ChevronRight /></NavLink>
                  <NavLink to="/services/call-centre" className="dropdown-item">Contact Centre Outsourcing<ChevronRight /></NavLink>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div className="navbar-logo-centered">
          <NavLink to="/">
            <img src={logo} alt="Tellida Logo" />
          </NavLink>
        </div>

        <div className="navbar-right">
          <ul className="navbar-menu">
            <li><NavLink to="/iso" className="navbar-link">ISO Certification</NavLink></li>
            <li><NavLink to="/contact-us" className="navbar-link">Contact Us</NavLink></li>
            <li><NavLink to="/blogs" className="navbar-link">Blogs</NavLink></li>
          </ul>
        </div>
      </div>

      <div className={`navbar-mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          {/*<li>
            <NavLink to="" className="navbar-mobile-link" onClick={toggleMobileMenu}>
              <img src={require("../assets/phone-call.png")} alt="Phone Icon" className="phone-icon" />
            </NavLink>
          </li>*/}
          <li>
            <NavLink to="/" className="navbar-mobile-link" onClick={toggleMobileMenu}>
              <img src={logo2} alt="Tellida Logo" />
            </NavLink>
          </li>
          <li><NavLink to="/about-us" className="navbar-mobile-link" onClick={toggleMobileMenu}>About Us</NavLink></li>
          <li><NavLink to="/services" className="navbar-mobile-link" onClick={toggleMobileMenu}>Services{/*<ChevronRight onClick={openOffCanvas} className="chevron-right-other" />*/}</NavLink></li>

          <li><NavLink to="/iso" className="navbar-mobile-link" onClick={toggleMobileMenu}>ISO Certification</NavLink></li>
          <li><NavLink to="/careers" className="navbar-mobile-link" onClick={toggleMobileMenu}>Careers</NavLink></li>
          <li><NavLink to="/contact-us" className="navbar-mobile-link" onClick={toggleMobileMenu}>Contact Us</NavLink></li>
          <li><NavLink to="/blogs" className="navbar-link">Blogs</NavLink></li>
        </ul>

        {/*<ul className="navbar-mobile-social">
          <li><a href="https://www.instagram.com/tellida_official?igsh=MWI3MHJxaTg0empwaw==" target="_blank" rel="noopener noreferrer"><Instagram /></a></li>
          <li><a href="https://youtube.com/@tellida2086?si=3ryTGdn4L8VZEnwh" target="_blank" rel="noopener noreferrer"><Youtube /></a></li>
          <li><a href="https://www.facebook.com/Tellida?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><Facebook /></a></li>
          <li><a href="https://www.linkedin.com/company/tellida/" target="_blank" rel="noopener noreferrer"><Linkedin /></a></li>
              </ul>*/}

        <button className="navbar-close-btn" onClick={toggleMobileMenu}>
          <img src={require("../assets/close.png")} alt="Close Icon" className="close-icon" />
        </button>
      </div>

      {/*<div className={`offcanvas ${isOffCanvasOpen ? "open" : ""}`}>
        <div className="offcanvas-header">
          <h2>Services</h2>
        </div>
        <ul className="offcanvas-menu">
          <li><NavLink to="/services/legal-process" onClick={closeAllMenus}>Legal Process Outsourcing</NavLink></li>
          <li><NavLink to="/services/call-centre" onClick={closeAllMenus}>Call Centre Outsourcing</NavLink></li>
          <li><NavLink to="/services/tech-support" onClick={closeAllMenus}>Remote Tech Support, Back Office Support</NavLink></li>
          <li><NavLink to="/services/finance" onClick={closeAllMenus}>Finance and Accounts Outsourcing</NavLink></li>
          <li>
            <button className="back-btn" onClick={closeAllMenus}>
              <img src={require("../assets/Featured icon (3).png")} alt="Back Icon" />
            </button>
          </li>
        </ul>
      </div>*/}
    </nav>
  );
};

export default Navbar;
