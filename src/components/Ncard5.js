import React from 'react'
import '../components/News.css'
import { useState} from 'react';

function Ncard5( ) {
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
  <img src="./images/mar20.jpeg" className="card-img-top10" alt="..."/>
  <div className="card-body">
    <p className="card-text"> Mar 20,2023</p>
    <h5 className="card-title10">Kirby Family Day</h5>
    <div className='bt1'>
    <button type="button" style={{marginTop:"78px"}} href="/" className="btn">Know More</button>
  </div>
  </div>
</div>
    </div>
  )
}

export default Ncard5
