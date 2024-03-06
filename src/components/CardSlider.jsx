import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const cards = [
    { id: 1, title: 'Card 1', content: 'Content for Card 1' },
    { id: 2, title: 'Card 2', content: 'Content for Card 2' },
    { id: 3, title: 'Card 3', content: 'Content for Card 3' },
    // Add more cards as needed
  ];

  return (
    <Slider {...settings}>
      {cards.map((card) => (
        <div key={card.id}>
          <h3>{card.title}</h3>
          <p>{card.content}</p>
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;
