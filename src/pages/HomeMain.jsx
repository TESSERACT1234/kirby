import React, { useState, useEffect, useRef,Component}  from 'react';
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

import '../components/News.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsDetail from '../components/NewsDetail';

const HomeMain = () => {

    // State to store the API data
    const [newsdata, setNewsData] = useState(null);
    const [loading, setLoading] = useState(true);

    const sliderRef = useRef(null);

    // Effect to fetch data when the component mounts
    useEffect(() => {
        // Function to fetch data from the API
        const fetchData = async () => {
            try {
                // Make the API call
                const response = await fetch('http://kirbyapp.weblivelink.com/api/services/app/Media/GetNewsDetailsData?langname=English');

                // Check if the response is successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                // Parse the JSON response
                const jsonData = await response.json();
                console.log(jsonData.result);
                // Set the data in the state
                setNewsData(jsonData.result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            finally {
                setLoading(false);
            }
        };

        // Call the fetch data function
        fetchData();
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts
    if (loading) return <div>Loading...</div>;

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1700,
        prevArrow: <button type="button" className="slick-prev">Previous</button>,
        nextArrow: <button type="button" className="slick-next">Next</button>,
        appendDots: dots => (
            <div>
              <ul style={{ margin: "0px" }}> {dots} </ul>
              <button className="slick-next">End</button>
            </div>
          )
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
       
    };
    

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


            <div className="comp1" style={{ backgroundColor: "#e8e8e8" }}>
                <div className="pmain">
                    <h1 id="heading">Built for quality,<br />
                        Built to last</h1>
                    <p id="paraaa"> Kirby Building Systems is the ideal choice for enterprises and organizations seeking pre-engineered
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
                <div className="pmain2" style={{ color: "white", fontSize: "70px", paddingleft: "30px", paddingRight: "10px" }}>
                    Our Expertise in Varied Applications
                </div>
                <div className="cardmain2" style={{ paddingLeft: "3px", marginRight: "26px", marginTop: "80px", marginBottom: "75px", padding: "2px" }}>
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

            <div className="fourth" style={{ paddingTop: "50px" }}>
                <h1 style={{ fontWeight: "600", paddingLeft: "30rem" }}> WHy Kirby??</h1>

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

            <NewsDetail/>
            <div className="news">

                <div className="news1 row ">
                
                    <Slider  {...settings}>
                        
                        {newsdata?.items.slice(1, 6).map((item, index) => (
                            // Using `map()` to generate a list of <li> elements
                            <Ncard1 key={index} newsdetail={item} />
                        ))}
                    </Slider>
                    
                    {/* <Ncard1/>
                <Ncard2/>
                <Ncard3/>
                <Ncard4/>
                <Ncard5/> */}
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default HomeMain
