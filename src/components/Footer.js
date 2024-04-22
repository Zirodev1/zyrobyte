// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Make sure to link the corresponding CSS file
import logo from '../images/logo.png'; // Update the path to your logo file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="Zyrobyte" className="footer-logo" />
          <p>© 2024 Zyrobyte. Pioneering Computer Solutions.</p>
        </div>
        <div className="footer-section">
          <h4>QUICK LINKS</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/build-pc">Build Your PC</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-section">
          <h4>CONNECT</h4>
          <Link to="//facebook.com">Facebook</Link>
          <Link to="//instagram.com">Instagram</Link>
          <Link to="//youtube.com">Youtube</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
