import React, { useState } from "react";
import "./RepairRequestForm.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RepairRequestForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("email");
  const [deviceType, setDeviceType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('contactMethod', contactMethod);
    formData.append('deviceType', deviceType);
    formData.append('message', message);

    try {
      const response = await fetch("/repairs", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Result:", result);
      alert("Repair request submitted! We will get back to you soon.");

      setName("");
      setEmail("");
      setPhone("");
      setContactMethod("email");
      setDeviceType("");
      setMessage("");
    } catch (error) {
      console.error("Error sending repair request:", error);
      alert("Failed to send repair request. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="form-container">
          <form onSubmit={handleSubmit} className="repairForm">
            <h2>Repair Request</h2>
            <div className="mb-3">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Phone Number:</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Preferred Contact Method:</label>
              <select
                value={contactMethod}
                onChange={(e) => setContactMethod(e.target.value)}
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
            </div>
            <div className="mb-3">
              <label>Device Type:</label>
              <input
                type="text"
                value={deviceType}
                onChange={(e) => setDeviceType(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Problem Description:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit Request</button>
          </form>
        </div>
        <div className="info-container d-flex flex-column justify-content-evenly">
          <div>
            <h2>Repair Information</h2>
            <p>Please fill out the form to request a repair for your device. We will contact you as soon as possible to schedule a repair.</p>
          </div>
          <div>
            <h3>Instructions</h3>
            <ul>
              <li>Ensure all required fields are filled out accurately.</li>
              <li>Provide a detailed description of the problem.</li>
              <li>Attach any relevant photos of the issue if possible.</li>
            </ul>
          </div>
          <div>
            <h3>FAQs</h3>
            <ul>
              <li><strong>How long does the repair take?</strong> Repairs typically take 3-5 business days.</li>
              <li><strong>What devices do you repair?</strong> We repair all types of electronic devices, including phones, tablets, and laptops.</li>
              <li><strong>Is there a warranty?</strong> Yes, all repairs come with a 90-day warranty.</li>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>If you have any questions, feel free to contact us at (956) 515-8142 or email us at contact@zyrobyte.com.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RepairRequestForm;
