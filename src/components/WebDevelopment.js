import React, { useState } from "react";
import "./WebDevelopment.css"; // Ensure you have a corresponding CSS file
import Navbar from "./Navbar";
import Footer from "./Footer";

const WebDevelopment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [timeLine, setTimeLine] = useState("");
  const [files, setFiles] = useState([]);

  const handlerFileChange = (e) => {
    setFiles(e.target.files);
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create a new FormData instance
    const formData = new FormData();
  
    // Append form data
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('company', company);
    formData.append('message', message);
    formData.append('timeLine', timeLine);
  
    // Append files
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    try {
      const response = await fetch("/web-development", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log(result);
      alert(
        "Thank you for contacting us. We will get back to you as soon as possible."
      );

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setMessage("");
      setTimeLine("");
      setFiles([]);
    } catch (error) {
      console.error(error);
      alert(
        "There was an error processing your request. Please try again later."
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="form-container">
          <form className="repairForm" onSubmit={handleSubmit}>
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
                <label>Company:</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
            <div className="mb-3">
              <label>Phone:</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
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
              <label>What are your goals?:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label>Time Line:</label>
              <input
                type="text"
                value={timeLine}
                onChange={(e) => setTimeLine(e.target.value)}
                required
              />
            </div>
            <label htmlFor="file-upload" className="file-upload">
            <input
              id="file-upload"
              type="file"
              name="file"
              onChange={handlerFileChange}
            />
            Upload An RFP (10MB Max, PDF, Docx, JPG, PNG)
          </label>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="info-container d-flex flex-column justify-content-evenly">
          <div>
            <h2>Web Development Information</h2>
            <p>
              Our team specializes in creating custom web solutions tailored to
              your business needs. Whether you need a new website, a redesign,
              or advanced web applications, we have the expertise to deliver
              outstanding results.
            </p>
          </div>
          <div>

          <h3>Our Services</h3>
          <ul>
            <li>
              <strong>Custom Website Design:</strong> Unique designs that
              represent your brand.
            </li>
            <li>
              <strong>Responsive Web Development:</strong> Ensuring your site
              looks great on all devices.
            </li>
            <li>
              <strong>E-commerce Development:</strong> Building powerful online
              stores.
            </li>
            <li>
              <strong>Web Application Development:</strong> Creating dynamic and
              scalable applications.
            </li>
            <li>
              <strong>Content Management Systems:</strong> Easy-to-manage CMS
              solutions.
            </li>
            <li>
              <strong>API Integration:</strong> Enhancing functionality with
              custom APIs.
            </li>
          </ul>
          </div>
          <div>

          <h3>Contact Us</h3>
          <p>
            If you have any questions, feel free to contact us at (956) 515-8142
            or email us at contact@zyrobyte.com.
          </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WebDevelopment;
