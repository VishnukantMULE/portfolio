import React, { useState } from 'react';
import './Contact.css'

export default function Contact({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h2 className='cntc'>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          pattern="[0-9]{10}" // Assuming a 10-digit number
          required
        />

        <button className="buttone"type="submit">Submit</button>
        <button className="buttone close-button" onClick={onClose}>
        Close
      </button>
      </form>
    </div>
  );
}
