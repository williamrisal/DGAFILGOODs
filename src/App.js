import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Notif from './components/Notif/Notif'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './View/MainPage';
import Questionview from './View/Questionview';
import LoginView from './View/LoginView';
import ResultView from './View/ResultView';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/FILGOODS/" element={<MainPage />} />
        <Route path="/FILGOODS/Question" element={<Questionview />} />
        <Route path="/FILGOODS/Login" element={<LoginView />} />
        <Route path="/FILGOODS/result" element={<ResultView/>} />
      </Routes>
    </div>
  );
}
export default App;