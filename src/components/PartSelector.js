// PartSelector.js

import React from 'react';
import './PartSelector.css'; // Ensure you have the CSS file for styling

const PartSelector = ({ category, onSelectPart }) => {
  // Dynamically load the data based on the category
  let parts;
  try {
    parts = require(`../products/${category.toLowerCase()}_data.json`);
  } catch (error) {
    console.error(`Failed to load the data for the category: ${category}`, error);
    parts = []; // Fallback to an empty array in case of an error
  }

  return (
    <div className="part-selector">
      <h2>Select {category}</h2>
      <div className="part-options">
        {parts.map(part => (
          <div key={part.id} className="part-item" onClick={() => onSelectPart(category, part)}>
            <img src={part.image_url} alt={part.name} />
            <div className="part-name">{part.name}</div>
            <div className="part-price">${part.price}</div>
            <button onClick={() => onSelectPart(category, part)}>Select</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartSelector;
