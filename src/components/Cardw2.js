import React from 'react'
import { useState, useEffect } from 'react';
import '../pages/Whoweare.css'

const Cardw2 = () => {
    const [projectCount, setProjectCount] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (projectCount < 515) {
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
          onMouseLeave={handleMouseLeave} style={{padding:"1rem", margin:"1rem"}} >
                    <img src="images/2svg.svg" className="card-img-top" alt="..." />
                    <div className="card-body">
                    <div className='cc2'>
                            <span className="card-title">{projectCount}</span> k+
                        </div>
                        <p className="card-text"> MT productions capacity</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cardw2