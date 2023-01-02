import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/Ministère_des_Armées.svg-3.png' // import image
import { Form, FormControl, Button, Nav } from 'react-bootstrap';


function Navbar () {
    const [selectedCity, setSelectedCity] = useState('');
    const cities = ['Brest', 'Bordeaux', 'Cazaux', 'Mont-de-Marsan', 'Toulouse', 'Istres', 'Aix-en-Provence'];
  
    function handleChange(event) {
        setSelectedCity(event.target.value);
    }
    
  return (
        <nav style={styles.navbar} class="navbar bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="100" height="80" class="d-inline-block align-text-top"/>
            </a>
        </div>
        <div style={styles.menubar}>
            <Form inline>
                <FormControl as="select" value={selectedCity} onChange={handleChange}>
                    {cities.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                    ))}
                </FormControl>
            </Form>
        </div>
        </nav>
  )
}

const styles = {
    navbar: {
        backgroundColor: '#282c34',
        display: 'flex',
        justifyContent: 'space-between',

    },
    menubar: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        color: 'white',
    },
    
}

export default Navbar
