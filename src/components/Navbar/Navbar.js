import React, { useState } from 'react';
import logo from '../../assets/LOGO_CER.JPG' // import image
import logoiftl from '../../assets/patch_IFTL_vf.png' // import image
import logo_filgoods from '../../assets/FildGOOD-2.png' // import image
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
        
        <img src={logo_filgoods} alt="Logo" width="250"  height="100" class="d-inline-block align-text-top"/>
        <div style={styles.menubar}>
        <img src={logoiftl} alt="Logo" width="100" height="80" class="d-inline-block align-text-top"/>
        {/* <button type="button" onClick={handleConfirmClick}>
        <div class="container-fluid">
        </div>
       Admin click me
        </button> */}
        </div>
        </nav>
  )
}

const styles = {
    filgoodstitle: {
        color: 'white',
        fontSize: '30px',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        textAlign: 'center',
        padding: '0 20px',
    },
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
