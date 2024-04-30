import React, { useState } from 'react';
import './WebDevelopment.css'; // Ensure you have a corresponding CSS file
import Navbar from './Navbar';
import Footer from './Footer';


const WebDevelopment = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const [timeLine, setTimeLine] = useState('');
    const [budget, setBudget] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const webDevelopmentData = {
            firstName,
            lastName,
            email,
            jobTitle,
            company,
            message,
            timeLine,
            budget,
        }

        try {
            const response = await fetch('/web-development', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(webDevelopmentData),
            });

            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
            alert('Thank you for contacting us. We will get back to you as soon as possible.');
            
        } catch (error) {

        }
    }

  return (
    <>
    <Navbar />
    <section className="web-development">
      <h1>Expert Web Development Services</h1>
      <p>We specialize in creating bespoke websites and web applications that drive business success. From small business sites to complex enterprise solutions, our approach is tailored to meet your digital needs and exceed your expectations.</p>
      
      <div className="services-list">
        <div className="service">
          <h2>Custom Website Design</h2>
          <p>Create unique web experiences with custom designs that reflect your brand's identity and ethos. Our user-centric design philosophy ensures your site is not only beautiful but also functional and user-friendly.</p>
        </div>
        <div className="service">
          <h2>Responsive Web Development</h2>
          <p>Adapt your site to any device with responsive design. We ensure that your site looks great and operates flawlessly whether on desktop, tablet, or mobile, enhancing accessibility and SEO.</p>
        </div>
        <div className="service">
          <h2>E-commerce Development</h2>
          <p>Launch powerful online stores that provide seamless shopping experiences. We integrate advanced e-commerce functionalities like secure payment gateways, inventory management, and user-friendly checkout processes.</p>
        </div>
        <div className="service">
          <h2>Web Application Development</h2>
          <p>Develop state-of-the-art web applications with dynamic features and scalable architecture. Whether it's a CRM system or a custom dashboard, our solutions are designed to streamline your operations and boost efficiency.</p>
        </div>
        <div className="service">
          <h2>Content Management Systems</h2>
          <p>Gain control over your content with customized CMS solutions that make it easy to manage and update your site. We specialize in WordPress, Drupal, and custom-built CMS platforms.</p>
        </div>
        <div className="service">
          <h2>API Integration and Development</h2>
          <p>Enhance your website's functionality with custom API solutions. We integrate third-party services and also create bespoke APIs to facilitate communication between your apps and external services.</p>
        </div>
      </div>
    </section>
    <form className="webDevForm" onSubmit={handleSubmit}>
        <div>
            <label>
                First Name:
            </label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
        </div>
        <div>
            <label>
                Last Name:
            </label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
        </div>
        <div>
            <label>
                Job Title:
            </label>
            <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}/>
        </div>
        <div>
            <label>
                Company:
            </label>
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)}/>
        </div>
        <div>
            <label>
                Email:
            </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div>
            <label>
                What are your goals?:
            </label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div>
        <div>
            <label>
                Time Line:
            </label>
            <input type="text" value={timeLine} onChange={(e) => setTimeLine(e.target.value)} required/>
        </div>
        <div>
            <label>
                Buget:
            </label>
            <input type="text" value={budget} onChange={(e) => setBudget(e.target.value)} required/>
        </div>
        <button type="submit">Submit</button>
    </form>
    <Footer />
    </>
  );
};

export default WebDevelopment;
