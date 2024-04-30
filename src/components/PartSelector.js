// PartSelector.js

import React, { useState, useEffect } from "react";
import "./PartSelector.css"; // Ensure you have the CSS file for styling

const ITEMS_PER_PAGE = 8;

const PartSelector = ({ category, onSelectPart, selectedParts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [motherboardType, setMotherboardType] = useState('intel');
  const [coolingType, setCoolingType] = useState('all');
  const [storageType, setStorageType] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [parts, setParts] = useState([]);

  useEffect(() => {
    let partsData;
    try {
      if (category === 'motherboard') {
        const dataFile = motherboardType === 'amd' ? 'motherboardsamd_data' : 'motherboardsintel_data';
        partsData = require(`../products/${dataFile}.json`);
      } else if (category === 'cpu') {
        partsData = require(`../products/cpu_data.json`);
        if (selectedBrand !== 'all') {
          partsData = partsData.filter(cpu => cpu.title.startsWith(selectedBrand));
        }
      } else if(category === "cpuCooler") {
        switch (coolingType) {
            case 'air':
              partsData = require('../products/cpu_air_cooling_data.json');
              break;
            case 'water':
              partsData = require('../products/cpu_water_cooling_data.json');
              break;
            default:
              partsData = [
                ...require('../products/cpu_air_cooling_data.json'),
                ...require('../products/cpu_water_cooling_data.json')
              ];
              break;
          }
      } else if(category === 'storage') {
        switch (storageType) {
            case 'ssd':
              partsData = require('../products/internal_ssd_data.json');
              break;
            case 'hdd':
              partsData = require('../products/internal_hdd_data.json');
              break;
            default:
              partsData = [
                ...require('../products/internal_ssd_data.json'),
                ...require('../products/internal_hdd_data.json')
              ];
              break;}
      } else {
        partsData = require(`../products/${category.toLowerCase()}_data.json`);
      }
      setParts(partsData);
    } catch (error) {
      console.error(`Failed to load the data for the category: ${category}`, error);
      setParts([]);
    }
  }, [category, motherboardType, selectedBrand, coolingType, storageType]);

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

  const handleBrandSelection = (brand) => {
    setSelectedBrand(brand);
    setCurrentPage(1);
  }

  const handleCoolingTypeChange = (type) => {
    setCoolingType(type);
    setCurrentPage(1);
  }

  const handleStorageTypeChange = (type) => {
    setStorageType(type);
    setCurrentPage(1);
  }

  const handleSelect = (part) => {
    if (selectedParts[category] && selectedParts[category].id === part.id) {
        onSelectPart(category, null);
    } else {
        onSelectPart(category, part);
    }
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
        {category === 'cpu' && (
        <>
          <button onClick={() => handleBrandSelection('all')}>All</button>
          <button onClick={() => handleBrandSelection('AMD')}>AMD</button>
          <button onClick={() => handleBrandSelection('Intel')}>Intel</button>
        </>
      )}
       {category === 'cpuCooler' && (
        <>
          <button onClick={() => handleCoolingTypeChange('all')}>All</button>
          <button onClick={() => handleCoolingTypeChange('air')}>Air</button>
          <button onClick={() => handleCoolingTypeChange('water')}>Water</button>
        </>
      )}
       {category === 'storage' && (
        <>
          <button onClick={() => handleStorageTypeChange('all')}>All</button>
          <button onClick={() => handleStorageTypeChange('ssd')}>SSD</button>
          <button onClick={() => handleStorageTypeChange('hdd')}>HDD</button>
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
                <button onClick={() => handleSelect(part)}>Select</button>
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
