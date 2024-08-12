import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import MailList from "../mailList/MailList";
import Navbar from "../navbar/Navbar";
import "./home.css";
import Carousel from "../carousel/carousel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Carousel />
      <div className="homeContainer">
        <MailList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
