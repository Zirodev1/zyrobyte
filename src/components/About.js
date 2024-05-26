import React from 'react';
import './About.css'; // Make sure to create and style accordingly
import Navbar from "./Navbar";
import Footer from "./Footer";
import aboutHero from "../images/aboutHero.png";
import { Link } from 'react-router-dom';

import ai from "../images/ai.jpg";
import pc from "../images/pc.jpg";
import webDev from "../images/webDev.jpg";
import cybersecurity from "../images/cybersecurity.jpg";

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <section className="about-us">
        <div className='aboutHero'>
            <div className='aboutHero-details'>
                <h2>Welcome to ZyroByte</h2> 
                <p>Your Premier Partner for All Things Digital and Technological. Established in 2019, catering to a diverse array of digital needs.We continually evolve to include cutting-edge solutions that address the full spectrum of our clients’ challenges.</p> 
                <p>At ZyroByte, we are committed to expanding our offerings to ensure we meet and exceed the demands of the ever-changing tech landscape. Join us on a journey transformation where your needs drive our innovations.</p>
            </div>
            <img src={aboutHero} alt="About Us" className='aboutHero-img'/>
        </div>
        <div className='about-services'>
                <div className='about-services-imgs'>
                    <img src={ai} alt="Artificial Intelligence" />
                    <img src={pc} alt="PC Repair and Building" />
                    <img src={webDev} alt="Web Development" />
                    <img src={cybersecurity} alt="Cybersecurity" />
                </div>
            <div className='our-services'>
                <h2>Our Services</h2>
                <p>We offer a wide range of services designed to empower your business and ensure your technology meets the demands of modern enterprise:</p>
                <ul>
                    <li><strong>Computer Building and Repairs:</strong> Custom rigs, upgrades, and maintenance services for all types of computers.</li>
                    <li><strong>IT Consulting:</strong> Expert advice to optimize your IT infrastructure and operations.</li>
                    <li><strong>Web Development:</strong> From static websites to complex web applications, we build digital experiences that perform.</li>
                    <li><strong>Data Recovery:</strong> Secure solutions to recover lost data from all types of storage devices.</li>
                    <li><strong>AI Development:</strong> Coming soon...</li>
                    <li><strong>Cyber Security:</strong> Coming soon...</li>
                </ul>
            </div>
      </div>
      <h2>Meet the Team</h2>
      <div className="team">
        <div className="team-member">
          {/* <img src="path_to_image" alt="Name" /> */}
          <h3>Lee Acevedo</h3>
          <p>CEO & Founder - Lee leads our team with over a decade of experience in software development and a passion for technology.</p>
        </div>
        {/* Add more team members as needed */}
      </div>
      
      <h2>Our Values</h2>
      <ul>
        <li>Innovation: We strive to stay ahead of the curve and bring cutting-edge solutions to our clients.</li>
        <li>Integrity: Transparency and honesty guide all our business and development practices.</li>
        <li>Customer Satisfaction: We believe in creating lasting relationships by delivering outstanding results.</li>
      </ul>
      
      <div className="about-cta">
        <Link to='/contact' className="about-service-cta">Contact</Link>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default AboutUs;
