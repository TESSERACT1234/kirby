import React from 'react'
import '../pages/Home.css'
import { useState } from 'react';

const CardH6 = () => {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div>
      <div>
        <div className={`card ${isFlipped ? 'flipped' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} style={{ height: "230px", width: "180px" }}>
          <div className="card-front">
            <img src="images/accommodation.svg" className="card-img-top" alt="..." />
            <div className="card-body">


              <p className="card-text-h"> Accommodation</p>
            </div>
          </div>
          <div className="card-back">
            <div className="card-back-content">
            <li>Labor Camps</li>
                <li>Low Cost </li>
                <li>Housing Solutions</li>            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CardH6
