import React from 'react'
import './Navbar.css'

import {
  Link,
} from "react-router-dom";

const Navbar = () => {
  return (
    <div id='navbar'>
      <div className="navbar-logo">
        <Link to={"/"}><i className="fa-solid fa-piggy-bank" style={{ color: "rgb(234, 152, 2)", fontSize: "20px" }}>   CRYPTOCELL</i></Link>
      </div>
      <div className="navbar-menu">
        <ul>
          <Link to={"buycrypto"}><li ><i className="fa-solid fa-cart-shopping" style={{ fontSize: "12px" }}>   Buy Crypto</i></li></Link>
          <Link to={"charity"}><li><i className="fa-solid fa-handshake-angle" style={{ fontSize: "12px" }}>  Charity</i></li></Link>
          <Link to={"azercell"}><li><i className="fa-solid fa-tower-cell" style={{ fontSize: "12px" }}>   Azercell</i></li></Link>
        </ul>
      </div>
      <div className="navbar-login">
        <button>
          <Link to={"user"}><i style={{fontSize:"12px"}} className="fa-solid fa-user"> USER</i></Link>
        </button>
      </div>
    </div>
  )
}

export default Navbar