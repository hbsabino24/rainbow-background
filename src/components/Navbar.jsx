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
            <li><Link to="/useeffect/clock">Digital Clock</Link></li>
            <li><Link to="/usestate/counter">Counter</Link></li>
            <li><Link to="/window">Window Resize</Link></li>
            <li className="nav__sublistitem"><Link to="/forms">Forms</Link>
              <ul className="nav__listitemdrop nav__submenu">
                <li><Link to="/form/email">Email Form</Link></li>
                <li><Link to="/form/registration">Registration</Link></li>
                <li><Link to="/form/enchanced">Enchanced Form</Link></li>
              </ul>            
            </li>
            <li><Link to="/onchange/color">Color Picker</Link></li>
            <li><Link to="/usestate/cars">Car List</Link></li>
            <li><Link to="/onchange/todo">To-Do List</Link></li>
          </ul>
        </li>
        <li className="nav__listitem"><a href="#">Basics of React</a>
          <ul className="nav__listitemdrop">
            <li className="nav__sublistitem"><Link to="/props">Props</Link>
              <ul className="nav__listitemdrop nav__submenu">
                <li><Link to="/props/student">Student Props</Link></li>
                <li><Link to="/props/reusable">Reusable Student</Link></li>
              </ul>
            </li>
            <li><Link to="/usergreeting">Condition Rendering</Link></li>
            <li className="nav__sublistitem"><Link to="/list/fruits">List</Link>
              <ul className="nav__listitemdrop nav__submenu">
                <li><Link to="/list/fruits">Fruits</Link></li>
                <li><Link to="/list/veggies">Vegetables</Link></li>
                <li><Link to="/usestate/array">Food Array State</Link></li>
              </ul>
            </li>
            <li className="nav__sublistitem"><Link to="/button">Button</Link>
              <ul className="nav__listitemdrop nav__submenu">
                <li><Link to="/button">Button onClick</Link></li>
                <li><Link to="/button/profile">Profile Image</Link></li>
                <li><Link to="/usestate/array">Add/Remove Food Array</Link></li>
              </ul>
            </li>
            <li className="nav__sublistitem"><Link to="/usestate">useState</Link>
              <ul className="nav__listitemdrop nav__submenu">
                <li><Link to="/usestate/counter">Counter</Link></li>
                <li><Link to="/usestate/name">Name State</Link></li>
                <li><Link to="/onchange/color">Color Picker</Link></li>
                <li><Link to="/usestate/updater">Updater</Link></li>
                <li><Link to="/usestate/car">Object State</Link></li>
                <li><Link to="/usestate/array">Array State</Link></li>
              </ul>
            </li>
            <li className="nav__sublistitem"><Link to="/onchange">onChange</Link>
              <ul className="nav__listitemdrop nav__submenu">
                <li><Link to="/onchange/value">Value onChange</Link></li>
                <li><Link to="/onchange/color">Color onChange</Link></li>
                <li><Link to="/forms">Form onChange</Link></li>
              </ul>
            </li>            
            <li className="nav__sublistitem"><Link to="/oncontext">onContext</Link>
              <ul className="nav__listitemdrop nav__submenu">
                <li><Link to="/oncontext/multicomp">Components</Link></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
