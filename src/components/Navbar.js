// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
       <Link to="/" className="nav-logo">
        <img src={logo} alt="Zyrobyte Logo" className="logo" /> 
        Zyrobyte
      </Link>
      <div className="nav-links">
        <Link to="/services" className="nav-item">Services</Link>
        <Link to="/services/build-pc" className="nav-item">Build a PC</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
