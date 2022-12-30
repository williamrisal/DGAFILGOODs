import './App.css';
import Question from './components/Question';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Notif from './components/Notif'

function App() {
  return (
    <div>
      <Navbar />
      <Notif />
      <Question></Question>
      </div>
  );
}

export default App;

const styles = {
  bodyQuestion: {
      color: 'white',
      padding: '1%',
      borderRadius: '10%',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      margin: '10px',
      marginTop: '-20%'
  },
  process: {
    //// move the item up
    marginTop: '-10%',
        
  }
}