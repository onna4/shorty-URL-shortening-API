import React from 'react'
import Logo from "./images/logo.svg"
import navIcon from './images/icon-menu.svg'
import { useState } from "react"

function Header() {

const [navMob, setNavMob] = useState(false)

function toggleNavMob () {
  setNavMob(prevNavMob => !prevNavMob)
}

  return (
    <header>
        <div className='flexHeader'>
          <img src={Logo} alt="logo image" />
          <button className='navButton' onClick={toggleNavMob} >
            <img src={navIcon} alt="nav icon" className='navIcon' />
          </button>
        </div>
        {navMob && <ul className='navList'>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Resources</a></li>
          <hr />
          <li><button>Login</button></li>
          <li><button className='btn'>Sign Up</button></li>
        </ul>}
    </header>
  )
}

export default Header