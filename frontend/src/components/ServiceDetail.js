// ServiceDetail.js

import React from 'react';
import { Link } from'react-router-dom';
import './ServiceDetail.css'; 

const ServiceDetail = ({ service }) => {
  return (
    <div className="service-detail">
        <img src={service.image} alt={service.name} className="service-image" />
      <h2>{service.name}</h2>
      <p>{service.description}</p>
      {/* Add more details as needed */}
      <p>{service.details}</p>
      <Link to={service.ctaLink} className="service-cta">{service.cta}</Link>
    </div>
  );
};

export default ServiceDetail;
