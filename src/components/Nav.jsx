import React from 'react'
import logo from "../assets/logo.png"

function Nav() {
  return (
    <nav className='navbar'>
        <ul className='nav__list'>
            <li><a href="" className='nav__list--anchor'> Menu</a></li>
            <div className="nav__logo">
                <img src={logo} alt="" />
            </div>
            <li><a href="" className='nav__list--anchor'> Bookings</a></li>
        </ul>

    </nav>
  )
}

export default Nav