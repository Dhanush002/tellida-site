import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavbarOther.css";
import {
  Facebook,
  Instagram,
  Youtube,
  ChevronRight,
  Linkedin,
} from "react-feather";
import menu from "../assets/menu-black.png";
import logo2 from "../assets/navbar-white.png";

const NavbarOther = () => {
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

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const openOffCanvas = () => setIsOffCanvasOpen(true);
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
    <nav className={`navbar-other ${isDark ? "dark" : ""}`}>
      <div className="navbar-container-other">
        {/* Left Side - menu items */}
        <ul className="navbar-menu-other left-menu">
          <li>
            <NavLink to="/about-us" className="navbar-link-other">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/careers" className="navbar-link-other">
              Careers
            </NavLink>
          </li>
          <li
            className="navbar-link-other dropdown"
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
          >
            <span onClick={handleServicesClick}>Services</span>
            {isDropdownVisible && (
              <div className="dropdown-menu-other">
                <NavLink to="/services/finance" className="dropdown-item-other">
                  Finance & Accounts Outsourcing
                  <ChevronRight />
                </NavLink>
                <NavLink to="/services/legal-process" className="dropdown-item-other">
                  Legal Process Outsourcing
                  <ChevronRight />
                </NavLink>
                <NavLink to="/services/tech-support" className="dropdown-item-other">
                  Tech Remote Support, Back Office Support
                  <ChevronRight />
                </NavLink>
                <NavLink to="/services/call-centre" className="dropdown-item-other">
                  Contact Centre Outsourcing
                  <ChevronRight />
                </NavLink>
              </div>
            )}
          </li>
        </ul>

        {/* Center - Logo */}
        <div className="navbar-logo-other">
          <NavLink to="/">
            <img src={logo2} alt="Tellida Logo" />
          </NavLink>
        </div>

        {/* Right Side - menu items */}
        <ul className="navbar-menu-other right-menu">
          <li>
            <NavLink to="/iso" className="navbar-link-other">
              ISO Certification
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className="navbar-link-other">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className="navbar-link-other">
              Blogs
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="navbar-menu-icon-other" onClick={toggleMobileMenu}>
          <img src={menu} alt="menubar" />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`navbar-mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="" className="navbar-mobile-link-other" onClick={toggleMobileMenu}>
              <img
                src={require("../assets/phone-call.png")}
                alt="Phone Icon"
                className="phone-icon-other"
              />
              <span className="mobile-phone-other"> (+44) 7404408795 </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="navbar-mobile-link-other" onClick={toggleMobileMenu}>
              <img src={logo2} alt="Tellida Logo" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className="navbar-mobile-link-other" onClick={toggleMobileMenu}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="navbar-mobile-link-other" onClick={toggleMobileMenu}>
              Services
              <ChevronRight onClick={openOffCanvas} className="chevron-right-other" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/careers" className="navbar-mobile-link-other" onClick={toggleMobileMenu}>
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className="navbar-mobile-link-other" onClick={toggleMobileMenu}>
              Contact Us
            </NavLink>
          </li>
          <li><NavLink to="/iso" className="navbar-link">ISO Certification</NavLink></li>
          <li><NavLink to="/blogs" className="navbar-mobile-link-other" onClick={toggleMobileMenu}>Blogs</NavLink></li>
        </ul>

       

        <button className="navbar-close-btn-other" onClick={toggleMobileMenu}>
          <img
            src={require("../assets/close.png")}
            alt="Close Icon"
            className="close-icon-other"
          />
        </button>
      </div>

      {/* Offcanvas */}
      <div className={`offcanvas ${isOffCanvasOpen ? "open" : ""}`}>
        <div className="offcanvas-header-other">
          <h2>Services</h2>
        </div>
        <ul className="offcanvas-menu-other">
          <li>
            <NavLink to="/services/legal-process" onClick={closeAllMenus}>
              Legal Process Outsourcing
            </NavLink>
          </li>
          <li>
            <NavLink to="/services/call-centre" onClick={closeAllMenus}>
              Contact Centre Outsourcing
            </NavLink>
          </li>
          <li>
            <NavLink to="/services/tech-support" onClick={closeAllMenus}>
              Remote Tech Support, Back Office Support
            </NavLink>
          </li>
          <li>
            <NavLink to="/services/finance" onClick={closeAllMenus}>
              Finance and Accounts Outsourcing
            </NavLink>
          </li>
          <li>
            <button className="back-btn-other" onClick={closeAllMenus}>
              <img
                src={require("../assets/Featured icon (3).png")}
                alt="Back Icon"
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarOther;
