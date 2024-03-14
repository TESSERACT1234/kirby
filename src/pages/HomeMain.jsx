import React from 'react'
import './Home.css';
import Cardw1 from '../components/Cardw1';
import Cardw2 from '../components/Cardw2';
import Cardw3 from '../components/Cardw3';
import Cardw4 from '../components/Cardw4';
import Cardw5 from '../components/Cardw5';
import Cardw6 from '../components/Cardw6';
import CardH from '../components/CardH';
import CardH2 from '../components/CardH2';
import CardH3 from '../components/CardH3';
import CardH4 from '../components/CardH4';
import CardH5 from '../components/CardH5';
import CardH6 from '../components/CardH6';
import CardH7 from '../components/CardH7';
import CardH8 from '../components/CardH8';
import Ncard1 from '../components/Ncard1';
import Ncard2 from '../components/Ncard2';
import Ncard3 from '../components/Ncard3';
import Ncard4 from '../components/Ncard4';
import Ncard5 from '../components/Ncard5';

const HomeMain = () => {

    
    return (
        <div>
            <div className="video">
                <div className='home-video'>
                    <video width="100%" height="100%" autoPlay>
                        <source src="./images/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>


            <div className="comp1" style={{backgroundColor:"#e8e8e8"}}>
                <div className="pmain">
                    <h1 id="heading">Built for quality,<br />
                        Built to last</h1>
                    <p> Kirby Building Systems is the ideal choice for enterprises and organizations seeking pre-engineered
                        and structural steel buildings, offering industry-leading,
                        customer-centric services that combine quality, speed, and safety.</p>

                </div>
                <div className="cardmain">
                    <div style={{ paddingTop: "10px" }}>
                        <Cardw1 />
                        <Cardw2 />
                    </div>
                    <div style={{ paddingTop: "40px" }}>
                        <Cardw3 />
                        <Cardw4 />
                    </div>

                    <div>
                        <Cardw5 />
                        <Cardw6 />
                    </div>
                </div>

            </div>

            <div className="comp2" style={{
                backgroundImage: `url("./images/kbggg.png")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
                backgroundPosition: 'center', height: '100%'
            }}>
                <div className="pmain2" style={{ color:"white", fontSize: "70px", paddingLeft: "20px" }}>
                    Our Expertise in Varied Applications
                </div>
                <div className="cardmain2" style={{paddingLeft:"3px",marginRight:"26px",marginTop:"50px",marginBottom:"75px",padding:"2px"}}>
                    <div style={{ paddingTop: "10rem" }}>
                        <CardH />
                    </div>
                    <div style={{ paddingTop: "4rem" }}>
                        <CardH2 />
                        <CardH3 />
                    </div>
                    <div style={{ paddingTop: "8rem" }}>
                        <CardH4 />
                        <CardH5 />
                    </div>
                    <div>
                        <CardH6 />
                        <CardH7 />
                        <CardH8 />
                    </div>

                </div>

            </div>

            <div className="fourth" style={{paddingTop:"50px"}}>
                <h1 style={{ fontWeight: "600",paddingLeft:"30rem" }}> WHy Kirby??</h1>
                
                <div className='demo4'>
                <div className="fourthpara">

                    <p style={{ color: "orangered" }}>  Amongst the World’s Largest PEB manufacturers </p>
                    <p> Global Footprint of projects</p>
                    <p> Global Engineering Expertise with Innovative Solutions</p>
                    <p> High Safety Standards and Sustainable Building Solutions</p>
                    <p> Complete Solution Provider</p>
                </div>
                <div className='fourthimg'>
               <img src="images/kirbibg.png" ></img>
               </div>
               </div>
                    
                    
              


            </div>
            <div className="news">
                <div className="news1">
                <Ncard1/>
                <Ncard2/>
                <Ncard3/>
                <Ncard4/>
                <Ncard5/>
                </div>
            </div>
        </div>
    )
}

export default HomeMain
