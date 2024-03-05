import React from 'react'
import "../style/Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className='Footer-BG'>
            <div className='F-D-1'>
                {/* Logo */}
                <div className='F-D-1-I'><img src="./images/kirby_logo.jpg" alt="kirby_logo" /></div>
                {/* Social Meadia Icons                */}
                <div className='F-S-M-I'>
                    <a href="https://www.youtube.com/c/jamesqquick" className="youtube social"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                    <a href="https://www.youtube.com/c/jamesqquick" className="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                    <a href="https://www.youtube.com/c/jamesqquick" className="twitter social"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                    <a href="https://www.youtube.com/c/jamesqquick" className="instagram social"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                </div>

                {/* text */}
                <h2 className='F-D-1-T'>Have an idea of project ?</h2>

                {/* Button */}
                <button type='button' className='F-D-1-B'><b>Get In Touch With Us</b></button>


            </div>

            <div className='F-D-2'>
                <div className='AboutUs'><h4><b>About Us</b></h4>
                    <div className='AboutUs-Children'>Who We Are</div>
                    <div className='AboutUs-Children'>Who We Are</div>
                    <div className='AboutUs-Children'>Who We Are</div>
                    <div className='AboutUs-Children'>Who We Are</div>
                    <div className='AboutUs-Children'>Who We Are</div>
                </div>
                <div className='AboutUs'><h4><b>Product & Service</b></h4>
                    <div className='AboutUs-Children'>Who We Are</div>
                    <div className='AboutUs-Children'>Who We Are</div>
                    <div className='AboutUs-Children'>Who We Are</div>
                    <div className='AboutUs-Children'>Who We Are</div>
                    <div className='AboutUs-Children'>Who We Are</div>

                </div>
                <div className='AboutUs'><h4><b>Projects</b></h4>
                    <div className='AboutUs-Children'>Who We Are</div>
                    <div className='AboutUs-Children'>Who We Are</div>
                    <div className='AboutUs-Children'>Who We Are</div>
                    <div className='AboutUs-Children'>Who We Are</div>

                </div>
                <div className='AboutUs'><h4><b>Join Us</b></h4>
                    <div className='AboutUs-Children'>Who We Are</div>
                    <div className='AboutUs-Children'>Who We Are</div>
                    <div className='AboutUs-Children'>Who We Are</div>
                    <div className='AboutUs-Children'>Who We Are</div>
                    <div className='AboutUs-Children'>Who We Are</div>
                    <div className='AboutUs-Children'>Who We Are</div>
                    <div className='AboutUs-Children'>Who We Are</div>


                </div>
                <div className='AboutUs'><h4><b>Contact Us</b></h4>
                    <div className='AboutUs-Children'>Who We Are</div>
                    <div className='AboutUs-Children'>Who We Are</div>
                    <div className='AboutUs-Children'>Who We Are</div>

                </div>
            </div>
            <center><p style={{marginBottom:0 , padding:0}}>Made with ❤️ in India</p></center>
        </div>

    )
}

export default Footer