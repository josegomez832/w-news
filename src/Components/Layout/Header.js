import React, { useState } from 'react'
import logo from './../../logo.svg'
import hamburger from './../../img/icon-menu.svg'
import close from './../../img/icon-menu-close.svg'
import './Header.scss'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  function toggleMenu() {
    setMenuOpen(!menuOpen);
    
    if (!menuOpen) {
      document.querySelector('body').classList.add('overlay');
    } else {
      document.querySelector('body').classList.remove('overlay');
    }
  }
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt="W." width="64" height="40" />
      </div>
      <div className={menuOpen ? 'navigation open' : 'navigation'}>
          <div className="mobile" onClick={toggleMenu}>
              <img src={close} alt="close Mobile menu" className="close-icon" />
          </div>
          <ul className="nav">
            <li><a href="#0">Home</a></li>
            <li><a href="#0">New</a></li>
            <li><a href="#0">Popular</a></li>
            <li><a href="#0">Trending</a></li>
            <li><a href="#0">Categories</a></li>
          </ul>
          
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
              <img src={hamburger} alt="Mobile menu" />
          </div>
    </div>
  )
}

export default Header