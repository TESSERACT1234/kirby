import React from 'react'
import '../pages/Home.css'
import { useState } from 'react';

const CardH2 = () => {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div className="card-container">
      <div>
        <div className={`card ${isFlipped ? 'flipped' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} style={{ height: "15rem", width: "12rem" }}>
          <div className="card-front">
            <img src="images/warehousing.svg" className="card-img-top" alt="..." />
            <div className="card-body">


              <p className="card-text-h"> Warehousing</p>
            </div>
          </div>
          <div className="card-back">
            <div className="card-back-content">
            <li>Warehouses</li>
                <li>Cold Stores</li>
                <li>Logistics Hubs</li>
                <li>Showrooms</li>
                <li>Storage Sheds</li>
                <li>Storage Hanger</li>            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CardH2
