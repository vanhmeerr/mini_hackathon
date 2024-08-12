import React from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';



const Header = ({ type }) => {
  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    navigate('/');
  };

  const handleRegister = () => {
    navigate('/signup');
  };

  return (
    <div className="header">
      <div className={`headerContainer ${type === 'list' ? 'listMode' : ''}`}>
        <div className="headerList">
          <div className={`headerListItem ${type === 'list' ? 'active' : ''}`}>
            <Link to="/home" className='active'>Home</Link>
          </div>
          <div className="headerListItem">
            <Link to="/" className='active'>Listing</Link>
          </div>
          <div className="headerListItem">
            <Link to="/booking" className='active'>Booking System</Link>
          </div>
        </div>
        <div className="headerContent">
          <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
          <p className="headerDesc">
            Get rewarded for your travels – unlock instant savings of 10% or more
            with a free SwiftBook account
          </p>
          <div className="headerBtnContainer">
            <button className="headerBtn" onClick={handleLoginClick}>Sign in</button>
            <button className="headerBtn" onClick={handleRegister}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
