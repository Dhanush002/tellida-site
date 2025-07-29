import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Youtube, X } from "react-feather";
import "./MobileNavbar.css";
import logo from "../assets/logo.png";

interface Props {
  toggleMobileMenu: () => void;
}

const MobileNavbar: React.FC<Props> = ({ toggleMobileMenu }) => {
  return (
    <div className="navbar-mobile-menu open"> {/* Add/remove `open` class via parent logic */}
      <div className="navbar-mobile-header">
        <NavLink to="/" className="navbar-mobile-logo" onClick={toggleMobileMenu}>
          <img src={logo} alt="Tellida Logo" />
        </NavLink>
        <button className="close-mobile-menu" onClick={toggleMobileMenu} aria-label="Close menu">
          <X size={28} color="#fff" />
        </button>
      </div>

      <ul className="navbar-mobile-links">
        <li>
          <NavLink to="/about-us" className="navbar-mobile-link" onClick={toggleMobileMenu}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className="navbar-mobile-link" onClick={toggleMobileMenu}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/careers" className="navbar-mobile-link" onClick={toggleMobileMenu}>
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" className="navbar-mobile-link" onClick={toggleMobileMenu}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="navbar-mobile-socials">
        <a href="https://instagram.com" aria-label="Instagram">
          <Instagram />
        </a>
        <a href="https://youtube.com" aria-label="YouTube">
          <Youtube />
        </a>
        <a href="https://facebook.com" aria-label="Facebook">
          <Facebook />
        </a>
      </div>
    </div>
  );
};

export default MobileNavbar;
