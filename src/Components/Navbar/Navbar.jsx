import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Actualités</li>
            <li>Besoins</li>
            <li>Solutions</li>
            <li>Services</li>
            <li><button className='btn'>Contact</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
