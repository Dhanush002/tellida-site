import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/case-study">Case Studies</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
