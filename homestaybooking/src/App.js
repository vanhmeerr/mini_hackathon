import React from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Home from './home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from './ForgotPassword/ForgotPassword';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
