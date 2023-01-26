import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Notif from './components/Notif/Notif'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './View/MainPage';
import Questionview from './View/Questionview';
import LoginView from './View/LoginView';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Question" element={<Questionview />} />
        <Route path="/Login" element={<LoginView />} />
      </Routes>
    </div>
  );
}
export default App;