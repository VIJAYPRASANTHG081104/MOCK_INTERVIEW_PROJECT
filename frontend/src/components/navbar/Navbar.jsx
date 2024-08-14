import React from 'react'
import './style.css'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar_wrapper">
      <img src={Logo} alt="logo" />
      <div className="nav_item">
        <div className="nav_profile">
          <img src="" alt="" />
          <span>profile</span>
        </div>
        <button>
            Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar