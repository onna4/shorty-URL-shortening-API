import React from 'react'
import Logo from "./images/logo.svg"

export default function NavDesk() {
  return (
    <header>
      <div className='flexHeader'>
        <img src={Logo} alt="logo image" />
        <ul className='navDesk'>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Resources</a></li>
        </ul>
        <div className='Navbuttons'>
          <button className='login'>Login</button>
          <button className='btn'>Sign Up</button>
        </div>
      </div>
    </header>
  )
}
