import React from 'react'
import './Whoweare.css';

import Cardw1 from '../components/Cardw1';
import Cardw2 from '../components/Cardw2';
import Cardw3 from '../components/Cardw3';
import Cardw4 from '../components/Cardw4';
import Cardw5 from '../components/Cardw5';
import Cardw6 from '../components/Cardw6';


const Whoweare = () => {
    return (
        <div>

            <div style={{
                backgroundImage: `url("./images/whobg.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
                backgroundPosition: 'center', height: '500px'
            }} className='imgbg'>
                <p className='imgtext'> Who We Are</p>
            </div>






            <div className='firstdiv'>
                <h1 className='first'> A standard setting leader and among the largest manufacturers of pre-engineered  and structural steel buildings worldwide.</h1>
            </div>

            {/* starts from here */}

            <div className='comp1'>

                <div className='pmain'>
                    <h1 id="heading">A decades-long legacy of putting the customer first </h1>
                    <br />
                    <p> Since its inception, Kirby International has been dedicated to setting and elevating the standard in the field of pre-engineered and structural steel buildings. Through a track record of 90K+ projects executed across more than 70 countries, we have gained a vast amount of learnings, and chief among them was this: Our customers
                        are at the center of everything we do. We prioritize and adapt to the needs of our customers worldwide as we deliver a comprehensive range of products and services under one roof.</p>
                    <br />
                    <p> Kirby is a 100% subsidiary of Kuwait-based Alghanim Industries - one of the largest privately owned companies in the Middle East with a heritage that spans over a century. </p>
                </div>


                <div style={{ marginTop: "2rem" }} className='cardmain'>

                    <div style={{paddingTop:"10px"}}>
                        <Cardw1 />
                        <Cardw2 />
                    </div>
                    <div style={{paddingTop:"40px"}}>
                        <Cardw3 />
                        <Cardw4 />
                    </div>

                    <div>
                        <Cardw5 />
                        <Cardw6 />
                    </div>
                </div>

            </div>
            <div className="thirdpart">
                <h1 className="thirdheading">
                    Unrivaled scale
                </h1>
                <p className="thirdpara">
                    With seven manufacturing facilities across Kuwait, Saudi Arabia, Ras Al Khaimah, Vietnam and India, we have a total installed capacity of over 515,000 MT per annum, supported by a diverse group of 5,000+ employees. We operate through a network of 70 sales offices and 300 certified builders located across five geographical regions, namely the Gulf Cooperation Council, the rest of the Middle East, the Indian Sub-Continent, Africa, and South East Asia. Buildings we manufacture have applications in major market segments such as heavy industry, infrastructure, high rise buildings,
                    warehouses, factories, oil & gas, commercial and leisure structures – spanning across all industry segments.
                </p>
            </div>

            <div className="fourthpart">

                <div className="fourthparapart">
                    <h1 className='fourthparapart1'>Centralized focus on excellence</h1>
                    <p className='fourthparapart2'>
                        We operate our Center of Engineering Excellence (CEE), located in Hyderabad, India, to centralize and optimize four key pillars: people, systems, performance, and products. Our CEE uses the latest technology and best-in-class practices to drive our research and development, design, and talent training. .
                    </p>
                </div>

                    <div className="fourthimg">

                        <div style={{
                            backgroundImage: `url("./images/cee1.svg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
                            backgroundPosition: 'center', height: '500px'
                        }} className='fourthimgbg'>
                        </div>
                    
                    </div>
             </div>


          


        </div>
    )
}

export default Whoweare
