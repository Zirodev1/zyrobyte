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
import leftArrow from '../icons/leftArrow.png';

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
        return isNaN(price) ? 0 : price + 110;
      };

  
  const totalCost = Object.values(selectedParts).reduce((acc, part) => {
    return part ? acc + cleanPrice(part.price) : acc;
  }, 0);

  const numberOfSelectedParts = Object.values(selectedParts).filter(part => part !== null).length;

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
    <>
            <div className='sideBar-container text-bg-light'>
              <button className="btn left-arrow " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img className='left-arrow-img' src={leftArrow} alt='left arrow'/></button>
              <p className='sidebar-cost'>Total Cost: ${totalCost === 0 ? '110.00' : totalCost.toFixed(2)}</p>
              {Object.keys(defaultPartSelections).map((category) => (
                            <div key={category} className='sideBar'>

                                <img src={selectedParts[category] ? selectedParts[category].image_url : defaultImages[category]} alt={category} />
                            </div>
                        ))}
            </div>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Selected Parts</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body ">
                    <div className="selected-parts-form">
                        <div className='partInfoContainer'>
                            <h2>My part list</h2>
                            <div className='partsInfo'>
                                <p>Part(s) Selected: {numberOfSelectedParts}</p>
                                <p>Total Cost: ${totalCost === 0 ? '110.00' : totalCost.toFixed(2)}</p>
                            </div>
                        </div>
                        {Object.keys(defaultPartSelections).map((category) => (
                            <div key={category} className='partCard'>
                                <img src={selectedParts[category] ? selectedParts[category].image_url : defaultImages[category]} alt={category} />
                                <div className='part-details'>
                                    <h3>{selectedParts[category] ? trimTitle(selectedParts[category].title) : "No Part Selected"}</h3>
                                    <p>Price: {selectedParts[category] ? selectedParts[category].price : "0.00"}</p>
                                    {selectedParts[category] && (
                                        <button onClick={() => onDeletePart(category)}>Delete</button>
                                    )}
                                </div>
                            </div>
                        ))}
                        <h3>Windows Included: <span>$110</span></h3>
                        <QuoteForm selectedParts={selectedParts} onSubmit={handleSubmit} />
                    </div>
                </div>
            </div>
        </>
  );
};

export default SelectedPartsForm;