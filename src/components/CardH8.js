import React from 'react'
import '../pages/Home.css'
import { useState } from 'react';

const CardH8 = () => {

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
            <img src="images/storage.svg" className="card-img-top" alt="..." />
            <div className="card-body">


              <p className="card-text-h"> Storage Solutions</p>
            </div>
          </div>
          <div className="card-back">
            <div className="card-back-content">
            <li>Pallet Racking</li>
                <li>Multi-Tire Shelving</li>
                <li>Automation Racking</li>
                <li>Drive-in Racking</li>            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default CardH8
