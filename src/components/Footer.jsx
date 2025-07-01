import React from 'react';
import { Link } from 'react-router-dom';
import './css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>ZenFlow</h3>
          <p>Your quiet space for mindful journaling.</p>
        </div>

        <div className="footer-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-right">
          <p>© {new Date().getFullYear()} ZenFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
