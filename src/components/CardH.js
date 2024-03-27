import React from 'react'
import '../pages/Home.css'
import { useState } from 'react';

const CardH = () => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => {
        setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        setIsFlipped(false);
    };

    return (
        <div>
            <div  >
                <div className={`card ${isFlipped ? 'flipped' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} style={{ height: "230px", width: "180px" }}>
                    <div className="card-front">

                        <img src="images/industrial.svg" className="card-img-top" alt="..." />
                        <div className="card-body">


                            <p className="card-text-h"
                                style={{ paddingLeft: "1.9rem" }}> Industial</p>
                        </div>
                    </div>
                    <div className="card-back">
                        <div className="card-back-content">
                            <ul>
                                <li>Automotive</li>
                                <li>Tyre</li>
                                <li>Oil Utilities</li>
                                <li>Paints</li>
                                <li>Engineering</li>
                                <li>FMCG</li>
                            </ul>                      </div>
                    </div>



                </div>

            </div>

        </div>
    )
}

export default CardH
