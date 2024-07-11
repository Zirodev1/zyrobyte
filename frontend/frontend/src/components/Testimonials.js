// Testimonials.js

import React from 'react';
import './Testimonials.css'; // Create and import corresponding CSS file

const testimonialsData = [
  {
    quote: "The custom PC building service was fantastic! The team guided me through the entire process and I got exactly what I needed.",
    author: "Damian Acevedo",
  },
  {
    quote: "The custom PC building service was fantastic! The team guided me through the entire process and I got exactly what I needed.",
    author: "Jose Romo",
  },
  {
    quote: "My laptop runs like new after the repair. Quick, professional, and affordable service!",
    author: "John Smith",
  },
  {
    quote: "Data transfer service was smooth and secure. I trusted them with my sensitive data and they delivered.",
    author: "Alice Johnson",
  },
];

const TestimonialCard = ({ quote, author }) => (
  <div className="testimonial-card">
    <p className="quote">{quote}</p>
    <p className="author">- {author}</p>
  </div>
);

const Testimonials = () => (
    <>
  <section className="testimonials">
    <h2>Testimonials</h2>
    {testimonialsData.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
    ))}
  </section>
    </>
);

export default Testimonials;
