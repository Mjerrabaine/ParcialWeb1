import './App.css';
import Home from './components/Home';
import Login from './components/Login'; 
import Detail from './components/Detail'; 
import userData from './components/data/MOCK_DATA.json';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const user = userData[0];

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login user={user} />} />
          <Route path="/home" element={<Home user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
