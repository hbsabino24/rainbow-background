import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul className="nav__list">
        <li>
          <a href="/">Home</a>
        </li>
        <li className='nav__listitem'> 
          <a href="#">React Components</a>
          <ul className='nav__listitemdrop'>
            <li><a href="/hello">Hello</a></li>
            <li><Link to="/clock">Digital Clock</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/window">Window Resize</Link></li>
            <li><Link to="/forms">Forms</Link></li>
            <li><Link to="/registration-form">Registration Form</Link></li>
            <li><Link to="/exchanced-form">Exchanced Form</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar