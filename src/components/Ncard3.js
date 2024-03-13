import React from 'react'
import '../components/News.css'
import { useState} from 'react';

function Ncard3( ) {
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
  <img src="./images/jan01.png" className="card-img-top10" alt="..."/>
  <div className="card-body">
    <p className="card-text">Jan 01,2023</p>
    <h5 className="card-title10">Kirby MEA VP's New Year 2023</h5>
   <div className='bt1'>
    <button type="button" href="/" className="btn" style={{marginTop:"70px"}}>Know More</button>
  
    </div></div>
</div>
    </div>
  )
}

export default Ncard3
