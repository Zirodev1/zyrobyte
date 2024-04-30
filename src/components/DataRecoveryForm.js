import React, { useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const DataRecoveryForm = () => {
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [storageType, setStorageType] = useState('');
    const [storageAmount, setStorageAmount] = useState('');
    const [storageUnit, setStorageUnit] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            customerName,
            customerEmail,
            serviceType,
            storageType,
            storageAmount,
            storageUnit,
            message,
        }

        try {
            const response = await fetch('http://localhost:3001/data-recovery', {
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
            console.log('Quote request sent successfully:', result);
            alert('Quote request sent successfully!');
        } catch (error) {
            console.log(error);
            alert(`Failed to send data ${serviceType} request. Please try again.`);
        }
    }
    
    return (
        <>
            <Navbar/>
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
        <input type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} required />
      </label>
      {/* Device Type input */}
      <label>
        Service Type:
        <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} required>
            <option value="Data Recovery">Data Recovery</option>
            <option value="Data Transfer">Data Transfer</option>
            <option value="Data Backup">Data Backup</option>
            <option value="Data Migration">Data Migration</option>
            <option value="Other">Other</option>
        </select>
      </label>
      {/* Problem Description textarea */}
      <label>
        Storage Type:
        <select value={storageType} onChange={(e) => setStorageType(e.target.value)} required>
            <option value="HDD">HDD</option>
            <option value="SSD">SSD</option>
            <option value="USB">USB</option>
        </select>
      </label>
      {/* Problem Description textarea */}
      <label>
        Storage size:
        <input type="text" value={storageAmount} onChange={(e) => setStorageAmount(e.target.value)} required />
        <select value={storageUnit} onChange={(e) => setStorageUnit(e.target.value)}>
            <option value="GB">GB</option>
            <option value="TB">TB</option>
        </select>
        
      </label>
        {/* Problem Description textarea */}
        <label>
        Problem Description:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
      </label>
      {/* Submit button */}
      <button type="submit">Submit Request</button>
    </form>
            <Footer />
        </>
    )
}

export default DataRecoveryForm;