import React from "react";
import "./ServiceCard.css";

export default function ServicesCard({image, title, description}) {
    return (
        <div className="service-card">
                <img src={image} alt={title} className="service-image"/>
                <h3>{title}</h3>
                <p>{description}</p>
        </div>
    )
}