import React from 'react'
import '../pages/Home.css'
import { useState } from 'react';

const CardH3 = () => {

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
          onMouseLeave={handleMouseLeave}

          style={{ height: "230px", width: "180px" }}>
          <div className="card-front">
            <img src="images/Commercial.svg" className="card-img-top" alt="..." />
            <div className="card-body">


              <p className="card-text-h"> Commercial</p>
            </div>

          </div>
          <div className="card-back">
            <div className="card-back-content">
            <li>High Rise</li>
                <li>Data centers</li>
                <li>Shopping Malls</li>
                <li>Showrooms</li>
                <li>Hypermarkets</li>
                <li>Exibition Halls</li>            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CardH3
