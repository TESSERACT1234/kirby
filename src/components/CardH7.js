import React from 'react'
import '../pages/Home.css'
import { useState } from 'react';

const CardH7 = () => {

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
            <img src="images/agri.svg" className="card-img-top" alt="..." />
            <div className="card-body">


              <p className="card-text-h"> Agriculture</p>
            </div>
          </div>
          <div className="card-back">
            <div className="card-back-content">
            <li>Poultries </li>
                <li>Farms</li>
                <li>Slaughter House</li>
                <li>Parks</li>
                <li>Green Houses</li>            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CardH7
