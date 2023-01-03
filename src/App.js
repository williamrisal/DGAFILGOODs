import './App.css';
import Question from './components/Question';
import Navbar from './components/Navbar'
import Notif from './components/Notif'
import React from 'react';

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
