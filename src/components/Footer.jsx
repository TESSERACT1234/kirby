import React from 'react'
import "../style/Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='Footer-BG'>
           
                <div className='F-D-1'>
                    {/* {/ Logo /} */}
                    <div className='F-D-1-I'><a href='/'><img src="./images/kirby_logo.jpg" alt="kirby_logo" /></a></div>
                    {/* {/ Social Meadia Icons                /} */}
                    <div className='F-S-M-I'>
                        <a href="https://www.youtube.com/c/jamesqquick" className="youtube social"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                        <a href="https://www.youtube.com/c/jamesqquick" className="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                        <a href="https://www.youtube.com/c/jamesqquick" className="twitter social"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                        <a href="https://www.youtube.com/c/jamesqquick" className="instagram social"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                    </div>

                    {/* {/ text /} */}
                    <h2 className='F-D-1-T'>Have an idea of project ?</h2>

                    {/* {/ Button /} */}
                    <button type='button' className='F-D-1-B'><a href='/' style={{ textDecoration: "none", color: "white" }}><b>Get In Touch With Us</b></a></button>


                </div>

                <div className='F-D-2'>
                    <div className='AboutUs'><h3 style={{ marginBottom: "2rem" }}><b>About Us</b></h3>
                        <p style={{ marginBottom: "0.75rem", marginTop: "0rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>Who We Are</a></p>
                        <p style={{ marginBottom: "0.75rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>Mission, Vision & Values</a></p>
                        <p style={{ marginBottom: "0.75rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>Environmental Health and safety</a></p>
                        <p style={{ marginBottom: "0.75rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>Executive Team</a></p>
                        <p style={{ marginBottom: "0.75rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>Awards & Recognitions</a></p>
                    </div>

                    <div className='AboutUs'><h3 style={{ marginBottom: "2rem" }}><b>Product & service</b></h3>
                        <p style={{ marginBottom: "0.75rem", marginTop: "0rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>Pre-Engineered Steel Buildings (PEB)</a></p>
                        <p style={{ marginBottom: "0.75rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>Structural Steel (SS)
 </a></p>
                        <p style={{ marginBottom: "0.75rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>Advantages of Kirby Products </a></p>
                        <p style={{ marginBottom: "0.75rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>Storage Solutions </a></p>
                        <p style={{ marginBottom: "0.75rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>Accessories </a></p>
                    </div>

                    <div className='AboutUs'><h3 style={{ marginBottom: "2rem" }}><b>Projects</b></h3>
                        <p style={{ marginBottom: "0.75rem", marginTop: "0rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>Testimonials</a></p>
                        <p style={{ marginBottom: "0.75rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>Project </a></p>
                        <p style={{ marginBottom: "0.75rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}> Build your Design</a></p>
                        <p style={{ marginBottom: "0.75rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}><h3><b>Kirby edge</b></h3> </a></p>
                        {/* {/ <p style={{ marginBottom: "0.75rem"}}> <a href="/" class="text-white" style={{textDecoration:"none"}}>Accessories </a></p> /} */}
                    </div>

                    <div className='AboutUs'><h3 style={{ marginBottom: "2rem" }}><b>Join Us</b></h3>
                        <p style={{ marginBottom: "0.75rem", marginTop: "0rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>Be a Kirby Certified Builder</a></p>
                        <p style={{ marginBottom: "0.75rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>Careers At Kirby</a></p>
                        <p style={{ marginBottom: "0.75rem" }}> <a class="text-white" style={{ textDecoration: "none" }}><h3><b>Media </b></h3></a></p>
                        <p style={{ marginBottom: "0.75rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>Brochures </a></p>
                        <p style={{ marginBottom: "0.75rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>News </a></p>
                        <p style={{ marginBottom: "0.75rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>Videos </a></p>
                        <p style={{ marginBottom: "0.75rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>FAQs </a></p>
                    </div>

                    <div className='AboutUs'><h3 style={{ marginBottom: "2rem" }}><b>Contact Us</b></h3>
                        <p style={{ marginBottom: "0.75rem", marginTop: "0rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>Sales Network</a></p>
                        <p style={{ marginBottom: "0.75rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}>Manufacturing Location </a></p>
                        <p style={{ marginBottom: "0.75rem" }}> <a href="/" class="text-white" style={{ textDecoration: "none" }}> Enquire Now </a></p>
                        {/* {/ <p style={{ marginBottom: "0.75rem"}}> <a href="/" class="text-white" style={{textDecoration:"none"}}><h3><b>Kirby edge</b></h3> </a></p> /} */}
                        {/* {/ <p style={{ marginBottom: "0.75rem"}}> <a href="/" class="text-white" style={{textDecoration:"none"}}>Accessories </a></p> /} */}
                    </div>

                </div>

                <div className='F-D-3' style={{ marginTop: "3rem" }}>
                    <p>Kirby Building Systems - A group company of Alghanim Industries </p>
                    <div style={{ marginLeft: "25rem" }}>
                        <div className='F-D-3-1'>
                            <p style={{ marginBottom: "0.75rem", marginTop: "0rem" }}></p>
                            <div className='AboutUs-Children' style={{ marginRight: "2rem" }}> <a href="/" style={{ textDecoration: "none", color: "#e8741f" }}>Terms and Conditions</a> </div>
                            <div className='AboutUs-Children' style={{ marginRight: "2rem" }}><a href="/" style={{ textDecoration: "none", color: "#e8741f" }}>Privacy Policy </a></div>
                            <div className='AboutUs-Children' style={{ marginRight: "2rem" }}><a href="/" style={{ textDecoration: "none", color: "#e8741f" }}>Enquire Now </a></div>
                            <div className='AboutUs-Children' style={{ marginRight: "2rem" }}><a href="/" style={{ textDecoration: "none", color: "#e8741f" }}>Get a Quote</a></div>
                        </div>
                    </div>

                </div>

                <center><p style={{ marginBottom: 0, padding: 0, marginTop: "2rem" }}>Made with ❤️ in India</p></center>
            
        </div>

    )
}

export default Footer