import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

import './App.css'
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (user && user.email === email && user.password === password) {
      return true;
    }
    return false;
  };

  const handleRegister = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route path="/account" element={<Account user={user} onLogout={handleLogout} />} />
      </Routes>
    </Router>
  );
}

export default App;
