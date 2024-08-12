import React from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Home from './home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import Bookingpage from './Build/Bookingpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List/List';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/listing" element={<List />} />
          <Route path="/search" element={<Signup />} /> 
          {/* nanti tukar */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/booking" element={<Bookingpage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
