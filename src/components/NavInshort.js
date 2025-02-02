import React from 'react'
import Sidebar from './Sidebar'
import inShortLogo from '../assets/images/logo_inshorts.png'
import '../assets/css/navInShort.css'

function NavInshort() {

  return (
    <nav className='navbar'>
      <div className='nav-icon'>
        <Sidebar />
      </div>
      <div className='nav-logo'>
        <img src={inShortLogo} alt="inShort-Logo" height="60" />
      </div>
    </nav>
  )
}

export default NavInshort
