import React from 'react';
import PropTypes from 'prop-types';
import './ServiceCard.css';

function ServiceCard({ title, description, image }) {
    return (
        <div className="service-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default ServiceCard;
