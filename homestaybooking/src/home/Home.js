import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import MailList from "../mailList/MailList";
import Navbar from "../navbar/Navbar";
import "./home.css";
import Carousel from "../carousel/carousel";
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate(); // Call useNavigate inside the component

  const Search = () => {
    navigate('/search'); // Use navigate to go to the search route
  };

  return (
    <div>
      <Navbar />
      <Header />
      <Carousel />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      </div>
      <div className="homeContainer">
        <MailList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
