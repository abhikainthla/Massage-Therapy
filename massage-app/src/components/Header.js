import React from 'react'
import './Header.css'
function Header() {
  return (
    <div>
        <h1 className='heading'>Family Wellness</h1>
        <span className='title'>MASSAGE THERAPY</span>
        <div className='navbar'>
    <div className='nav-item' style={{backgroundColor: "#922047"}}>
        HOME
    </div>
    <div className='nav-item'>
        ABOUT
    </div>
    <div className='nav-item'>
        SERVICES
    </div>
    <div className='nav-item'>
        FAQ
    </div>
    <div className='nav-item'>
        CONTACT
    </div>
        </div>
    </div>
  )
}

export default Header