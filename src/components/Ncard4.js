import React from 'react'
import '../components/News.css'
import { useState } from 'react';

function Ncard4( ) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
                  {/* <div className={`cardn ${visible ? 'visible' : 'hidden'}`}> */}

      <div className={`cardn ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} >
  <img src="./images/Aug07.jpg" className="card-img-top10" alt="..."/>
  <div className="card-body">
    <p className="card-text">Aug 07,2023</p>
    <h5 className="card-title10">Exciting Highlights from Kirby Southeast Asia's Q2 2023 Townhall Meeting!</h5>
   <div className='bt1'> 
    <button type="button" href="/" style={{marginTop:"30px"}} className="btn">Know More</button>
 
    </div> </div>
</div>
    </div>
  )
}

export default Ncard4
