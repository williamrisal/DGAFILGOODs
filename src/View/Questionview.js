import '../App.css';
import Navbar from '../components/Navbar/Navbar'
import Notif from '../components/Notif/Notif'
import Question from '../components/Question';
import React from 'react';
import Main from './MainPage';


function Questionview() {
  // usestate count
  return (
    <div>
      <Navbar />
      <Question />
    </div>
  );
}

export default Questionview;
