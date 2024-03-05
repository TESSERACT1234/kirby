import React from 'react'
import Ncard1 from '../components/Ncard1'
import Ncard2 from '../components/Ncard2'
import Ncard3 from '../components/Ncard3'
import Ncard4 from '../components/Ncard4'
import Ncard5 from '../components/Ncard5'
import './News.css';
import Slider from "react-slick";



function News() {
  return (
    <div>

<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <Ncard1 />
    </div>
    <div class="carousel-item">
      <Ncard2 />
    </div>
    <div class="carousel-item">
      <Ncard3 />
    </div>
    <div class="carousel-item">
      <Ncard4 />
    </div>
    <div class="carousel-item">
      <Ncard5 />
    </div>
  </div>
  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    </div>
  )
}

export default News
