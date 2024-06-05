// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="footer-content conteiner-xxl d-flex justify-content-around">
        <div className="footer-section mt-3">
          <img src={logo} alt="Zyrobyte" className="footer-logo" />
          <p>© 2024 Zyrobyte. Computer Solutions.</p>
        </div>
        <div className="footer-section  quick-links">
          <h4>QUICK LINKS</h4>
          <div className='d-flex justify-content-around '>
          <div >
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
          </div>
          <div>
            <Link to="/build-pc">Build Your PC</Link>
            <Link to="/contact">Contact</Link>
          </div>
          </div>
        </div>
        <div className="footer-section">
          {/* <h4>CONNECT</h4>
          <div className='d-flex justify-content-center'>
            <Link className='me-2' to="//facebook.com">Facebook</Link>
            <Link to="//instagram.com">Instagram</Link>
            <Link className='ms-2' to="//youtube.com">Youtube</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
