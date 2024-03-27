import React from 'react'
import '../pages/Whoweare.css'
import { useState, useEffect } from 'react';

const Cardw1 = () => {
  
  const [projectCount, setProjectCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (projectCount < 100) {
        setProjectCount(projectCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 50); // You can adjust the interval for the speed of the counting
    return () => clearInterval(interval);
  }, [projectCount]);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
         <div>
         <div className={`card ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} style={{padding:"1rem", margin:"1rem"}}>
                <img src="images/1sg.svg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className='cc2' style={{color:"orangered"}}>
                    <span className="card-title">{projectCount}</span> k+
                    </div>
                   
                    <p className="card-text" style={{fontWeight:"600",fontSize:"18px"}}> Projects</p>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Cardw1
