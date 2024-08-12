import React from "react";
import "./carousel.css";

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://media.houseandgarden.co.uk/photos/65e1e2fc757645d6a95f0c45/16:9/w_2580,c_limit/_hires_v_4-production_digital.jpg"
            className="d-block "
            alt="..."
            id="image"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Balok Perdana</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item text-dark">
          <img
            src="https://media.architecturaldigest.com/photos/564e267053d639997adba986/16:9/w_2560%2Cc_limit/peter-jane-marino-rockies-home-02.jpg"
            className="d-block "
            alt="..."
            id="image"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Sungai Gau</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/11/16/17/p57chatelPRESS2.jpg?quality=75&width=640&height=614&fit=bounds&format=pjpg&crop=16%3A9%2Coffset-y0.5&auto=webp"
            className="d-block "
            alt="..."
            id="image"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Jengkalfornia</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
