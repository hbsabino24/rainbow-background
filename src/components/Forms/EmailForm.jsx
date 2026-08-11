import React, { useState } from 'react';

export default function EmailForm() {
  const [email, setEmail] = useState('');

  // Standard regex pattern for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // The button is disabled if the regex test fails
  const isInvalidEmail = !emailRegex.test(email);

  return (
    <div className="forms-row">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <h2>Email Form</h2>
        <label htmlFor="email">Email Address: </label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        
        <button type="submit" disabled={isInvalidEmail}>
          Submit
        </button>
      </div>
    </div>
  );
}
