import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Ministère_des_Armées.svg-3.png' // import image

const Navbar = () => {
  return (
        <nav style={styles.navbar} class="navbar bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="100" height="80" class="d-inline-block align-text-top"/>
            </a>
        </div>
        </nav>
  )
}

const styles = {
    navbar: {
        backgroundColor: '#282c34',
    },
}

export default Navbar
