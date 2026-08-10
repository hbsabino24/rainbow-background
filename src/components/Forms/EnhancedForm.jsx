import React, { useState } from 'react';

export default function EnhancedForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
  });

  // Automatically formats digits into (XXX) XXX-XXXX
  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, ''); // strip non-digits
    const phoneNumberLength = phoneNumber.length;
    
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Apply special formatting if the input field is the phone number
    const finalValue = name === 'phone' ? formatPhoneNumber(value) : value;

    setFormData((prev) => ({ ...prev, [name]: finalValue }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Validates that exactly 10 digits are present in the formatted string
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    
    const isUsernameValid = formData.username.trim().length >= 3;
    const isEmailValid = emailRegex.test(formData.email);
    const isPhoneValid = phoneRegex.test(formData.phone);

    return isUsernameValid && isEmailValid && isPhoneValid;
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
      <h2>Enhanced Form</h2>

      <label htmlFor="username">Username: </label>
      <input
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      
      <label htmlFor="email">Email Address: </label>
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />
      
      <label htmlFor="phone">Phone Number: </label>
      <input
        name="phone"
        type="tel"
        placeholder="Phone (123) 456-7890"
        value={formData.phone}
        maxLength={14} // Prevents extra characters past (XXX) XXX-XXXX
        onChange={handleChange}
      />

      <button type="submit" disabled={!validateForm()}>
        Submit
      </button>
    </form>
  );
}
