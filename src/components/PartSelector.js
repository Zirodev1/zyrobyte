// PartSelector.js

import React, { useState, useEffect } from "react";
import "./PartSelector.css"; // Ensure you have the CSS file for styling

const ITEMS_PER_PAGE = 8;

const PartSelector = ({ category, onSelectPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [motherboardType, setMotherboardType] = useState('intel');
  const [selectedBrand, setSelectedBrand] = useState('all');

  useEffect(() => {
    if(category ==='cpu') {
        setSelectedBrand('all')
    }
  }, [category]);

  let parts;

  try {
        if (category === 'motherboard') {
            const dataFile = motherboardType === 'amd' ? 'motherboardsamd_data' : 'motherboardsintel_data';
            parts = require(`../products/${dataFile}.json`);
          } else {
            parts = require(`../products/${category.toLowerCase()}_data.json`);
          }
    }   catch (error) {
    console.error(
      `Failed to load the data for the category: ${category}`,
      error
    );
    parts = []; // Fallback to an empty array in case of an error
  }

  const pageCount = Math.ceil(parts.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentParts = parts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSetMotherboardType = (type) => {
    setMotherboardType(type);
    setCurrentPage(1);
  };

  return (
    <div className="part-selector">
      <h2>Select {category.toUpperCase()}</h2>
      {category === 'motherboard' && (
    <>
      <button onClick={() => handleSetMotherboardType('amd')} >AMD</button>
      <button onClick={() => handleSetMotherboardType('intel')}>INTEL</button>
    </>
      )}

      <div className="part-options">
        {currentParts.map((part) => (
          <div key={part.id} className="part-item">
            <img className="part-img" src={part.image_url} alt={part.name} />
            <div className="part-details">
              <div>
                <p>{part.title}</p>
              </div>
              <div>
                <p>{part.core_clock}</p>
              </div>
              <div>
                <p>{part.memory}</p>
              </div>
              <div>
                <p>{part.tdp}</p>
              </div>
            <div className="part-price">{part.price}</div>
            <div>
                <button onClick={() => onSelectPart(part)}>Select</button>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PartSelector;
