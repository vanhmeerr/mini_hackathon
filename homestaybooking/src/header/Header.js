import React from 'react';
import './header.css'; // Ensure this CSS file contains styles for the Header component
import { Link } from 'react-router-dom';


const Header = ({ type }) => {
  return (
    <div className="header">
      <div className={`headerContainer ${type === 'list' ? 'listMode' : ''}`}>
        <div className="headerList">
          <div className={`headerListItem ${type === 'list' ? 'active' : ''}`}>
            <Link to="/" className='active'>Home</Link>
          </div>
          <div className="headerListItem">
           <Link to="/" className='active'>Listing</Link>
          </div>
          <div className="headerListItem">
            <Link to="/" className='active'>Booking System</Link>
          </div>
         
        </div>
        <div className="headerContent">
          <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
          <p className="headerDesc">
            Get rewarded for your travels – unlock instant savings of 10% or more
            with a free SwiftBook account
          </p>
          <button className="headerBtn">Sign in / Register</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
