import "./navbar.css";
import { Link } from "react-router-dom";
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/');
  };
  const handleRegister = () => {
    navigate('/signup');
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link className="navbar-brand text-light" to="/home">
          <img
            src="Images/SB.png"
            alt="Logo"
            style={{ height: "30px", marginRight: "10px" }}
          />
          SwiftBook
        </Link>
        
        <div className="navItems">
          <button className="navButton" onClick={handleRegister}>Register</button>
          <button className="navButton" onClick={handleLoginClick}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
