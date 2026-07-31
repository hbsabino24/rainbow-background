import React, { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handle generic input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Helper validation rule function
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const isUsernameValid = formData.username.trim().length >= 3;
    const isEmailValid = emailRegex.test(formData.email);
    const isPasswordValid = formData.password.length >= 6;

    // Returns true only if all fields pass their criteria
    return isUsernameValid && isEmailValid && isPasswordValid;
  };

  // Button remains disabled until validateForm returns true
  const isButtonDisabled = !validateForm();

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
      <h2>Registration Form</h2>
      <input
        name="username"
        placeholder="Username (min 3 chars)"
        value={formData.username}
        onChange={handleChange}
      />
      
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />
      
      <input
        name="password"
        type="password"
        placeholder="Password (min 6 chars)"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit" disabled={isButtonDisabled}>
        Register
      </button>
    </form>
  );
}
