import React from 'react'
import '../pages/Home.css'
import { useState } from 'react';

const CardH5 = () => {

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
            <img src="images/Community.svg" className="card-img-top" alt="..." />
            <div className="card-body">


              <p className="card-text-h"> Community</p>
            </div>
          </div>
          <div className="card-back">
            <div className="card-back-content">
            <li>Training Centers</li>
                <li>Churches</li>
                <li>Mosques</li>
                <li>Hospitals</li>
                <li>Stadiums</li>
                <li>Health Centers</li>            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CardH5
