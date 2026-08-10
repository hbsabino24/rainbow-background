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
          </ul>
        </li>
        <li className="nav__listitem"><a href="#">Basics of React</a>
          <ul className="nav__listitemdrop">
            <li><Link to="/props">Student Props</Link></li>
            <li><Link to="/reusable">Reusable Student</Link></li>
            <li><Link to="/usergreeting">Condition Rendering</Link></li>
            <li><Link to="/list">Fruit List</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar