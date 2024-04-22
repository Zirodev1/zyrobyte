import React from "react";
import ServiceDetail from "./ServiceDetail.js";
import './Services.css';
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const servicesData = [
    {
      name: 'Custom PC Building',
      description: 'Tailor-made PCs built to perfection. Whether for gaming, professional use, or content creation, we construct your dream machine.',
      details: 'Choose from the latest components and let our experts assemble a PC that meets your exact needs. We provide advice on the best parts within your budget, ensure all components are compatible, and perform rigorous testing.',
      cta: 'Build Now'
    },
    {
      name: 'Computer Repairs',
      description: 'Expert troubleshooting and repairs for your computers. We fix both hardware and software issues to get you back up and running.',
      details: 'Our repair services include diagnostics, parts replacement, virus removal, software troubleshooting, and performance upgrades. We work on all major brands and models, offering quick turnaround times.',
      cta: 'Request Repair'
    },
    {
      name: 'Data Transfer',
      description: 'Secure and efficient data migration services. Transfer your data safely from one device to another without losing a byte.',
      details: 'Whether upgrading to a new system or backing up important files, our data transfer services ensure your digital belongings are accurately duplicated and moved. We prioritize data integrity and confidentiality.',
      cta: 'Transfer Data'
    },
    {
      name: 'Web Development',
      description: 'Bespoke website and web application development. From concept to launch, we create stunning and responsive digital experiences.',
      details: 'Our web development services cover everything from simple websites to complex web applications. We utilize the latest technologies to build SEO-friendly, mobile-responsive sites that represent your brand and engage your visitors.',
      cta: 'Get a Quote'
    }
  ];

export default function Services() {
    return (
        <>
            <Navbar />
            <section className="services-page">
                <h1>Our Services</h1>
                <div>
                    {servicesData.map((service, index) => (
                        <ServiceDetail key={index} service={service} />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    )
}