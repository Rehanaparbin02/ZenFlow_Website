import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './css/navbar.css';

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar">
      <div className="navbar-logo">
        <ScrollLink to="hero" smooth={true} duration={500}>ZenFlow</ScrollLink>
      </div>

      <ul className="navbar-links">
        <li><ScrollLink to="hero" smooth={true} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to="about" smooth={true} duration={500} offset={-80}>About</ScrollLink></li>
        <li><ScrollLink to="features" smooth={true} duration={500} offset={-80}>Features</ScrollLink></li>
      </ul>

      <div className="navbar-contact">
        <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className="contact-btn">
          Contact
        </ScrollLink>
      </div>
    </nav>
  );
};

export default Navbar;
