import React, { useState } from "react";
import "./Contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState([]);
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);


  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleProjectTypeChange = (e) => {
    const value = e.target.value;
    setProjectType((prev) => 
      prev.includes(value) 
      ? prev.filter((type) => type !== value)
      : [...prev, value]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('company', company);
    formData.append('projectType', JSON.stringify(projectType)); 
    formData.append('message', message);
    
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }
  
    try {
      const response = await fetch("/contact", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
      }
    
      const result = await response.json();
      console.log(result);
      alert("Thank you for contacting us. We will get back to you as soon as possible.");
  
      // Reset form state
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setProjectType([]);
      setMessage("");
      setFiles([]);
    } catch (error) {
      console.error('Error:', error);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-form-container container-xxl mt-5">
        <form onSubmit={handleSubmit} className="contact-form mb-5">
          <h2 className="mb-3">Request a Quote</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number *"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name *"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <h3>Project Type (select at least one):</h3>
          <div className="checkbox-group">
            {["custom PC", "data", "repairs", "web dev", "Other"].map((type) => (
              <div className="checkbox-item" key={type}>
                <label>{type}:</label>
                <input
                  type="checkbox"
                  name="projectType"
                  value={type}
                  onChange={handleProjectTypeChange}
                />
              </div>
            ))}
          </div>

          <textarea
            name="message"
            placeholder="Project Detail"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <label htmlFor="file-upload" className="file-upload">
            <input
              id="file-upload"
              type="file"
              name="file"
              onChange={handleFileChange}
            />
            Upload An RFP (10MB Max, PDF, Docx, JPG, PNG)
          </label>

          <button className="contact-btn-form" type="submit">
            Send
          </button>
        </form>

        <div className="contact-info mb-5">
          <div>
            <h2>Ways to Reach Us</h2>
            <p>Email: contact@zyrobyte.com</p>
            <p>Phone: (956) 515-8142</p>
            <p>If not answered leave a voice mail or shoot a text message</p>
            {/* Add any other contact information or links to social media */}
          </div>
          <div>
            <h2>Office Hours</h2>
            <p>Monday - Friday: 9 AM - 10 PM</p>
            <p>Saturday: 10 AM - 6 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div>
            <h2>Our Location</h2>
            <p>Located in McAllen, Tx. But we work world wide.</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57303.78662471763!2d-98.29144801618655!3d26.203407793117065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866ad818e96a69b9%3A0x52c5a2033b4d7f03!2sMcAllen%2C%20TX%2C%20USA!5e0!3m2!1sen!2s!4v1653077862062!5m2!1sen!2s"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;

