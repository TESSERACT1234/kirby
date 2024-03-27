import React from 'react'
import '../pages/Home.css'
import { useState } from 'react';

const CardH4 = () => {

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
            <img src="images/infra.svg" className="card-img-top" alt="..." />
            <div className="card-body">


              <p className="card-text-h"> Infrastructure & utility</p>
            </div>
          </div>
          <div className="card-back">
            <div className="card-back-content">
              <ul>
            <li>Car Parks</li>
                <li>Airports & Seaports</li>
                <li>Aircraft Hangers</li>
                <li>Pedestrian Bridges</li> 
                </ul>           </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CardH4
