// SelectedPartsForm.js
import React from 'react';
import './SelectedPartsForm.css';
import QuoteForm from './QuoteForm';


import cpuPng from '../icons/cpu.png';
import cpuFanPng from '../icons/cpu-fan.png';
import motherboardPng from '../icons/motherboard.png';
import memoryPng from '../icons/ram.png';
import gpuPng from '../icons/gpu.png';
import casePng from '../icons/case.png';
import psuPng from '../icons/psu.png';
import hddPng from '../icons/hdd.png';

const defaultImages = {
    cpu: cpuPng,
    cpuCooler: cpuFanPng,
    motherboard: motherboardPng,
    memory: memoryPng,
    gpu: gpuPng,
    case: casePng,
    psu: psuPng,
    storage: hddPng,
    
  };

  const trimTitle = (title, maxLength = 30) => {
    if(title.length > maxLength) {
        return `${title.substring(0, maxLength)}...`;
    }
    return title;
  }

const SelectedPartsForm = ({ selectedParts, onDeletePart, defaultPartSelections }) => {

    const cleanPrice = (priceStr) => {
        
        const cleanedPriceStr = priceStr.replace(/[^\d.-]/g, '');
        
        const price = parseFloat(cleanedPriceStr);
        return isNaN(price) ? 0 : price;
      };

  
  const totalCost = Object.values(selectedParts).reduce((acc, part) => {
    return part ? acc + cleanPrice(part.price) : acc;
  }, 0);

  const handleSubmit = async (customerData) => {
    const data = {
      parts: selectedParts,
      customer: customerData,
      totalCost: totalCost.toFixed(2),
    };
    
    try {
      const response = await fetch('http://localhost:3001/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log('Quote request sent successfully:', result);
      alert('Quote request sent successfully!');
    } catch (error) {
      
      alert('Failed to send quote request.');
      console.error('Error sending quote:', error);
    }
  }

  return (
    <div className="selected-parts-form">
      <div className='partInfoContainer'>
        <h2>My part list</h2>
        <div className='partsInfo'>
          <p>Part(s) Selected</p>
          <p>Total Cost: ${totalCost.toFixed(2)}</p>
        </div>
      </div>
      {Object.keys(defaultPartSelections).map((category) => (
        <div key={category} className='partCard'>
          <img src={selectedParts[category] ? selectedParts[category].image_url : defaultImages[category]} alt={category}/>
          <div className='part-details'>
          <h3>{selectedParts[category] ? trimTitle(selectedParts[category].title) : "No Part Selected"}</h3>
            <p>Price: {selectedParts[category] ? selectedParts[category].price : "0.00"}</p>
            {selectedParts[category] && (
              <button onClick={() => onDeletePart(category)}>Delete</button>
            )}
          </div>
        </div>
      ))}
      <QuoteForm selectedParts={selectedParts} onSubmit={handleSubmit}/>
    </div>
  );
};

export default SelectedPartsForm;