// ServiceDetail.js

import React from 'react';
import './ServiceDetail.css'; // Make sure to link the corresponding CSS file

const ServiceDetail = ({ service }) => {
  return (
    <div className="service-detail">
      <h2>{service.name}</h2>
      <p>{service.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ServiceDetail;
