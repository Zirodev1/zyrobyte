// QuoteForm.js
import React, { useState } from 'react';
import './QuoteForm.css';

const QuoteForm = ({ selectedParts, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();


    onSubmit({
      email,
      name,
      message,
    });
  };

  return (
    <form onSubmit={handleSubmit} className='infoForm'>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        required
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Additional Message (optional)"
      />
      <button type="submit">Send Quote Request</button>
    </form>
  );
};

export default QuoteForm;
