import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DataRecoveryForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [storageType, setStorageType] = useState("");
  const [storageAmount, setStorageAmount] = useState("");
  const [storageUnit, setStorageUnit] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("customerName", customerName);
    formData.append("customerEmail", customerEmail);
    formData.append("serviceType", serviceType);
    formData.append("storageType", storageType);
    formData.append("storageAmount", storageAmount);
    formData.append("storageUnit", storageUnit);
    formData.append("message", message);

    try {
      const response = await fetch("/data-transfer", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Quote request sent successfully:", result);
      alert("Quote request sent successfully!");

      setCustomerName("");
      setCustomerEmail("");
      setServiceType("");
      setStorageType("");
      setStorageAmount("");
      setStorageUnit("GB");
      setMessage("");
    } catch (error) {
      console.log(error);
      alert(`Failed to send data ${serviceType} request. Please try again.`);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="form-container">
          <form onSubmit={handleSubmit} className="repairForm">
            <h2>Data Recovery/Transfer Request</h2>
            <div className="mb-3">
              <label>Name:</label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Email:</label>
              <input
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="me-2">Service Type:</label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                required
              >
                <option value="Data Recovery">Data Recovery</option>
                <option value="Data Transfer">Data Transfer</option>
                <option value="Data Backup">Data Backup</option>
                <option value="Data Migration">Data Migration</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="me-2">Storage Type:</label>
              <select
                value={storageType}
                onChange={(e) => setStorageType(e.target.value)}
                required
              >
                <option value="HDD">HDD</option>
                <option value="SSD">SSD</option>
                <option value="USB">USB</option>
              </select>
            </div>
            <div>
              <label>Storage Size:</label>
              <div className="d-flex">
                <input
                  type="text"
                  value={storageAmount}
                  onChange={(e) => setStorageAmount(e.target.value)}
                  required
                />
                <select
                  value={storageUnit}
                  onChange={(e) => setStorageUnit(e.target.value)}
                >
                  <option value="GB">GB</option>
                  <option value="TB">TB</option>
                </select>
              </div>
            </div>
            <div className="mb-3 mt-3">
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
            <h2>Data Recovery and Transfer Information</h2>
            <p>
              Please fill out the form to request a data recovery or transfer
              service. We will contact you as soon as possible to discuss the
              details.
            </p>
          </div>
          <div>
            <h3>Instructions</h3>
            <ul>
              <li>Ensure all required fields are filled out accurately.</li>
              <li>
                Provide a detailed description of the issue or the service
                required.
              </li>
              <li>
                Specify the type of storage and the amount of data involved.
              </li>
            </ul>
          </div>
          <div>
            <h3>FAQs</h3>
            <ul>
              <li>
                <strong>How long does the data recovery take?</strong> It
                depends on the complexity of the issue, but typically it takes
                3-7 business days.
              </li>
              <li>
                <strong>What types of storage devices do you service?</strong>{" "}
                We handle HDDs, SSDs, USB drives, and other common storage
                media.
              </li>
              <li>
                <strong>Is my data secure during the process?</strong> Yes, we
                take data security very seriously and follow strict protocols to
                ensure your data is safe.
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>
              If you have any questions, feel free to contact us at (956)
              515-8142 or email us at contact@zyrobyte.com.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DataRecoveryForm;
