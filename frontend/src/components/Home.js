import React from "react";
import { Link } from'react-router-dom';
import "./Home.css"
import ServiceCard from "./ServiceCard";
import Navbar from "./Navbar";
import heroBackground from "../images/heroBackground.jpg";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const services = [
    { 
        title: "PC Building", 
        description: "Custom PCs built to your specifications." ,
        imageUrl: "https://cors-anywhere.herokuapp.com/https://images.unsplash.com/photo-1596697938289-68e8d0c6e8f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
        title: "Repairs", 
        description: "Expert repair services for PCs, phones, and tablets.",
        imageUrl: "https://cors-anywhere.herokuapp.com/https://images.unsplash.com/photo-1576613109753-27804de2cba8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    { 
        title: "Data Transfer", 
        description: "Secure transfer of your data to a new device or backup.",
        imageUrl: "https://cors-anywhere.herokuapp.com/https://images.unsplash.com/photo-1484662020986-75935d2ebc66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    { 
        title: "Web Development", 
        description: "Professional web development services for your business.",
        imageUrl: "https://cors-anywhere.herokuapp.com/https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    }
  ];

export default function Home() {
    return (
        <>
        <Navbar/>
            <main>
                <section className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
                    <div className="container-xxl">
                        <h1>Welcome to ZyroByte</h1>
                        <p className="hero-description">Your one-stop shop for custom PCs, repairs, and Web Dev services</p>
                        <Link to="./services" className="btn-hero">Learn More...</Link>
                    </div>
                </section>
                
                <section className="services-overview container-xxl pt-5 pb-5 d-flex flex-column justify-content-center">
                    <h2>Our Services</h2>
                    <div className="services-container mt-5">
                    {services.map((service, index) => (
                        <ServiceCard key={index} title={service.title} description={service.description} image={service.imageUrl}/>
                    ))}
                    </div>
                 </section>

                <Testimonials/>

                <Footer/>
            </main>
        </>
    )
}