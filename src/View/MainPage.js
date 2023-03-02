import React, { useState, useEffect } from 'react';
import Questionview from './Questionview';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [selectedCity, setSelectedCity] = useState('Choisir');
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  function handleConfirmClick() {
    if (selectedCity !== 'Choisir') {
      localStorage.setItem('city', null);
      localStorage.clear();
      localStorage.setItem('city', selectedCity);
      navigate("/FILGOODS/Question");
    } else {
      setError(true);
    }
  }

  console.log("city", selectedCity)

  return (
    <div style={styles.mainpage}>
      <div style={styles.textmain}>
        <h1>Objectif :</h1>
        <text>1/ Questionnaire à renseigner avant 1ère prise de poste et chaque fois que nécessaire</text>
        <br></br>
        <text>2/ Réponse au RUE 2017/378: surveillance de la consommation des SPA et gestion du stress + fatigue</text>
      </div>
      <div style={styles.selectbutton}>
        <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)}>
          <option value="Choisir">Choisir</option>
          <option value="Brest">Brest</option>
          <option value="Bordeaux">Bordeaux</option>
          <option value="Cazaux">Cazaux</option>
          <option value="Mont-de-Marsan">Mont-de-Marsan</option>
          <option value="Toulouse">Toulouse</option>
          <option value="Istres">Istres</option>
          <option value="Aix-en-Provence">Aix-en-Provence</option>
        </select>
        {error && <p style={{ color: 'red' }}>Veuillez choisir une ville avant de confirmer</p>}
      </div>
      <button style={styles.buttonconfirm} type="button" onClick={handleConfirmClick}>
        Confirm
      </button>
    </div>
  );
}

const styles = {
  textmain: {
    marginTop: '10vh',
    textAlign: 'center',
  },
  selectbutton: {
    margin: '2%',
  },
  buttonconfirm: {
    backgroundColor: '#1e90ff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '10px'
  },
  mainpage: {
    backgroundColor: '#282c34',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    color: 'white',
  },
};

export default MainPage;
