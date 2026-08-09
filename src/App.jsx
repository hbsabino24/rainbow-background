import { useState } from 'react'
import { Routes, Route, Router, Link, NavLink } from 'react-router-dom'
import './App.css'
import Hello from './components/Hello';
import WindowWidthAndHeight from './components/WindowWidthAndHeight';
import Counter from './components/Counter';
import DigitalClock from './components/DigitalClock';
import Navbar from './components/Navbar';
import StudentProps from './components/StudentProps';
import ReusableStudent from './components/ReusableStudent';
import FormGroup from './components/Forms/FormGroup';
import UserGreeting from './components/UserGreeting';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/window" element={<WindowWidthAndHeight />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/clock" element={<DigitalClock />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/forms" element={<FormGroup /> } /> 
        <Route path="/props" element={<StudentProps name="John Doe" age={20} isStudent={true} />} />
        <Route path="/reusable" element={<ReusableStudent />} />
        <Route path="/usergreeting" element={<UserGreeting username="John Doe" isLoggedIn={true} />} />
      </Routes>    
    </>
  );
}

export default App
