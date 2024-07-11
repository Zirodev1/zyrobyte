// Footer.js

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="footer-content container-md d-flex justify-content-around align-items-center" >
        <div className="footer-section my-auto">
          <img src={logo} alt="Zyrobyte" className="footer-logo" />
          <p>© 2024 Zyrobyte. Computer Solutions.</p>
        </div>
        <div className="footer-section  ps-5 ms-5">
          <div className="d-flex justify-content-around quick-links">
            <div>
              <h3>About</h3>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
            </div>
            <div>
              <h3>Support</h3>
              <Link to="/refunds">Refunds</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/donate">Donate</Link>
            </div>
            <div>
              <h3>Contact</h3>
              <Link to="/">contact@zyrobyte.com</Link>
              <Link to="/">youtube</Link>
              <Link to="/">twitter</Link>
            </div>
            <div>
              <h3>Legal</h3>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-conditions">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
