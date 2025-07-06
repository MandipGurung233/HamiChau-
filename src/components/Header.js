import React from 'react'
import '../index.css'
import Logo from "../assets/charity.png"
import "./header.css";

const Header = () => {
  return (
    <header>
        <img className="logo" src={Logo} alt=""/>
        <a href='/'>Donate</a>
    </header>
  )
}
export default Header