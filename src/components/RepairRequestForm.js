import React, { useState } from 'react';
import './RepairRequestForm.css'; // Make sure to create the corresponding CSS file
import Navbar from './Navbar';
import Footer from './Footer';

const RepairRequestForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  
  // More fields as necessary

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Construct the data object to send to the server
    const requestData = {
      customerName,
      email,
      deviceType,
      problemDescription,
      // Include any other fields that the form may have
    };
  
    // Perform client-side validation if needed
    // ...
  
    // Send the data to the server via a POST request
    try {
      const response = await fetch('http://localhost:3001/repair-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Repair request sent successfully:', result);
      alert('Repair request submitted! We will get back to you soon.');
      
    } catch (error) {
      console.error('Error sending repair request:', error);
      alert('Failed to send repair request. Please try again.');
    }
  };

  return (
    <>
    <Navbar />
    <form onSubmit={handleSubmit} className="repairForm">
      <h2>Repair Request</h2>
      {/* Name input */}
      <label>
        Name:
        <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
      </label>
      {/* Email input */}
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      {/* Device Type input */}
      <label>
        Device Type:
        <input type="text" value={deviceType} onChange={(e) => setDeviceType(e.target.value)} required />
      </label>
      {/* Problem Description textarea */}
      <label>
        Problem Description:
        <textarea value={problemDescription} onChange={(e) => setProblemDescription(e.target.value)} required />
      </label>
      {/* Submit button */}
      <button type="submit">Submit Request</button>
    </form>
    <Footer />
    </>
  );
};

export default RepairRequestForm;
