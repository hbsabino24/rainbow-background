import { useState } from 'react'
import { Routes, Route, Router, Link, NavLink } from 'react-router-dom'
import './App.css'
import Hello from './components/Hello';
import EmailForm from './components/Forms/EmailForm';
import RegistrationForm from './components/Forms/RegistrationForm';
import ExchancedForm from './components/Forms/EnhancedForm';
import WindowWidthAndHeight from './components/WindowWidthAndHeight';
import Counter from './components/Counter';
import DigitalClock from './components/DigitalClock';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/window" element={<WindowWidthAndHeight />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/clock" element={<DigitalClock />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/forms" element={<EmailForm /> } /> 
        <Route path="/registration-form" element={<RegistrationForm />} />
        <Route path="/exchanced-form" element={<ExchancedForm />} />
      </Routes>    
    </>
  );
}

export default App
