import React from 'react'
import Card1 from '../components/Card1'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'
import Card4 from '../components/Card4'
import Card5 from '../components/Card5'
import Card6 from '../components/Card6'
import Card7 from '../components/Card7'
import Card8 from '../components/Card8'
import Card11 from '../components/Card11'
import Card12 from '../components/Card12'
import Card13 from '../components/Card13'
import Card15 from '../components/Card15'
import Card16 from '../components/Card16'
import Card14 from '../components/Card14'
import Carddummy from '../components/Carddummy'
import Navbar from '../components/Navbar'

import './Home.css';
const HomeMain = () => {
    return (
        <div>
            <Navbar />
            
            <div className='home-video'>
                <video width="100%" height="100%" autoPlay>
                    <source src="./images/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        
            <div className='home-slider'>
                {/* <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="1000">
                            <img src="./images/2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="1000">
                            <img src="./images/1.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="1000">
                            <img src="./images/3.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="1000">
                            <img src="./images/4.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="./images/5.jpg" className="d-block w-100" alt="..." />
                        </div>

                    </div>

                </div> */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className='home-main-1'>
                <div className='sample'>
                    <Carddummy />
                    <div>
                        <Card11 />
                        <Card12 />
                    </div>
                    <div className='s1' style={{ paddingTop: "70px" }}>
                        <Card13 />
                        <Card14 />
                    </div>
                    <div>
                        <Card15 />
                        <Card16 />
                    </div>
                </div>
            </div>

            <div className='home-main-2'>
                <div style={{
                    backgroundImage: `url("./images/backgd.png")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
                    backgroundPosition: 'center', height: '1000px'
                }}>
                    <h2 className="heading"> Our Expertise in Varied Applications</h2>
                    <div className='sample' >
                        <h1 className='s'> Our Expertise in Varied Applications</h1>
                        <div className='s1' style={{ paddingTop: "250px" }}>
                            <Card1 />
                        </div>
                        <div className='s2' style={{ paddingTop: "70px" }}>

                            <Card2 />
                            <Card3 />
                        </div>
                        <div className='s3' style={{ paddingTop: "180px" }}>

                            <Card4 />
                            <Card5 />
                        </div>
                        <div className='s4' style={{}}>

                            <Card6 />
                            <Card7 />
                            <Card8 />
                            <div />
                        </div>
                    </div>
                </div >
            </div>

            <div className='sample3'>
                <div>
                    <h1 className='s1' > Why Kirby</h1>
                    <div className='s2' >
                        <h2> Amongst the World’s Largest PEB manufacturers</h2>

                        <h2>  Global Footprint of projects</h2>
                        <h2> Global Engineering Expertise with Innovative Solutions</h2>
                        <h2> High Safety Standards and Sustainable Building Solutions</h2>
                        <h2>  Complete Solution Provider </h2>
                    </div>
                </div>
                <div>
                    <img src="./images/kirbibg.png" class="card-img-top" alt="1" />

                </div>
            </div>



        </div>
    )
}

export default HomeMain
