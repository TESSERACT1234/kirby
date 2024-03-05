import React from 'react'
import Ncard1 from '../components/Ncard1'
import Ncard2 from '../components/Ncard2'
import Ncard3 from '../components/Ncard3'
import Ncard4 from '../components/Ncard4'
import Ncard5 from '../components/Ncard5'
import './News.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function News() {
  return (
    <div>
      <div>
      <h1 style={{textAlign:"center",color:"orangered",marginTop:"20px",fontSize:"60px"}}> Latest News</h1>
      </div>
      <div  className='sample'>
       <Ncard1/>
       <Ncard2/>
       <Ncard3/>
       <Ncard4/>
       <Ncard5/>
      
       
       
    </div>
    </div>
  )
}

export default News
