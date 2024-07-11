import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "./FAQ.css"

const FAQ = () => {
  return (
    <>
    <Navbar />
    <div className="faq-container">
      <h1>FAQ</h1>
      <h2>1. What is ZyroByte?</h2>
      <p>ZyroByte is your one-stop shop for custom PCs, repairs, and web development services.</p>
      <h2>2. How can I place an order?</h2>
      <p>You can place an order by visiting our website and navigating to the services you require.</p>
      <h2>3. What payment methods do you accept?</h2>
      <p>We accept all major credit cards and PayPal.</p>
      <h2>4. How can I track my order?</h2>
      <p>After placing an order, you will receive an email with tracking information.</p>
      <h2>5. How do I contact customer support?</h2>
      <p>You can contact us via email at support@zyrobyte.com or by phone at (555) 123-4567.</p>
    </div>
    <Footer />
    </>
  );
};

export default FAQ;