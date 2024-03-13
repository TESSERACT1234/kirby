import React from 'react'
import '../components/News.css'
import { useState } from 'react';

function Ncard1() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <div className={`cardn ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} >
        <img src="./images/mar15.jpeg" className="card-img-top10" alt="..." />
        <div className="card-body">
          <p className="card-text"> Mar 15,2023</p>
          <h5 className="card-title10">Kirby Building Systems recently participated at
            The Oman design & build week Show 2023</h5>
          <div className='bt1'>
            <button type="button" href="/" className="btn" style={{ marginTop: "20px" }}>Know More</button>

          </div></div>
      </div>
    </div>
  )
}

export default Ncard1
