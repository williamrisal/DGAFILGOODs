import React, { useState } from 'react';
import logo from '../../assets/LOGO_CER.JPG' // import image
import { Form, FormControl} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function Navbar () {
    const [selectedCity, setSelectedCity] = useState('');
    const cities = ['Brest', 'Bordeaux', 'Cazaux', 'Mont-de-Marsan', 'Toulouse', 'Istres', 'Aix-en-Provence'];
    const navigate = useNavigate();

    function handleChange(event) {
        setSelectedCity(event.target.value);
    }

    function handleConfirmClick() {
        navigate("/FILGOODS/login"); 
      }
    
  return (
        <nav style={styles.navbar} class="navbar bg-light">
        <div class="container-fluid">
            <img src={logo} alt="Logo" width="100" height="80" class="d-inline-block align-text-top"/>
        </div>
        <div style={styles.menubar}>
        <button type="button" onClick={handleConfirmClick}>
       Admin click me
        </button>
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
