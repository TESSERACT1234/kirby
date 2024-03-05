import React, { useState } from 'react';
import './CardSlider.css';
import Ncard1 from './Ncard1';
import Ncard2 from './Ncard2';

const CardSlider = ({ data, cardsPerSlide = 1 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = Math.ceil(data.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  return (
    <div className="card-slider">
      <div
        className="cards-container"
        style={{ transform: `translateX(-${currentSlide * (100 / totalSlides)}%)` }}
      >
        {data.map((item, index) => (
          <div key={index} className="card">
            <Ncard1/>
            <Ncard2/>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="arrow-btn left">
        &#60;
      </button>
      <button onClick={nextSlide} className="arrow-btn right">
        &#62;
      </button>
    </div>
  );
};

export default CardSlider;