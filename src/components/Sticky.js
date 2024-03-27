// import React from 'react'
// import './sticky.css'

// const Sticky = () => {
//     return (

//         <div className="sticky-buttons">
//             <button className="round-button">
//                 <img src="./images/getquote_black.svg" className="stickylogo" alt="..." />
//                 <p>
//                     Get a Quote </p></button>
//             <button className="round-button">
//                 <img src="./images/locationblack.svg" className="stickylogo" alt="..." />
//                 <p>
//                     Sales Location </p></button>
//             <button className="round-button">
//                 <img src="./images/build_black.png" className="stickylogo1" alt="..." />

//                 <p> Build your Design </p> </button>
//         </div>
//     )
// }



// export default Sticky

import React, { useEffect, useState } from 'react';
import './sticky.css';

const Sticky = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="sticky-buttons">
            <button className="round-button" style={{ color: isScrolled ? 'black' : 'white',
         backgroundColor : isScrolled ? 'rgb(255, 255, 255)' : 'rgba(0, 0, 0, 0.677)',
        }}>
                <img
                    src={isScrolled ? "./images/getquote_black.svg" : "./images/getquote_white.svg"}
                    className="stickylogo"
                    alt="..."
                />
                <p>Get a Quote</p>
            </button>
            <button className="round-button" style={{ color: isScrolled ? 'black' : 'white',
                    backgroundColor: isScrolled ? 'rgb(255, 255, 255)' : 'rgba(0, 0, 0, 0.677)', }}>
                <img
                    src={isScrolled ? "./images/locationblack.svg" : "./images/locationwhite.svg"}
                    className="stickylogo"
                    alt="..."
                />
                <p>Sales Location</p>
            </button>
            <button className="round-button" style={{ color: isScrolled ? 'black' : 'white' ,
                    backgroundColor: isScrolled ? 'rgb(255, 255, 255)' : 'rgba(0, 0, 0, 0.677)', }}>
                <img
                    src={isScrolled ? "./images/build_black.png" : "./images/build_white.png"}
                    className="stickylogo1"
                    alt="..."
                />
                <p>Build your Design</p>
            </button>
        </div>
    );
};

export default Sticky;

