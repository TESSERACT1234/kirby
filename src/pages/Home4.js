import React from 'react'
import './Home4.css';

function Home4() {
  return (
    <div>
         <h1> Customers</h1>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
       
      {/* <img src="..." class="d-block w-100" alt="..."/> */}
        <h2> Being the largest manufacturers of PEB in India, we chose to give orders to Kirby.
             More than 50 projects of PEB have been completed by Kirby, to our utmost satisfaction</h2>
    </div>
    <div class="carousel-item">
      {/* <img src="..." class="d-block w-100" alt="..."/> */}
        <h2> We acknowledge the sincere effort made by Kirby team to complete the project successfully with the best of safety standards. The team has shown excellent commitment towards the project and in all departments of the project like material stacking, painting, execution, safety, maintaining job
             related technical data, monitoring and tracking of project progress and importantly timely completion of project.</h2>
    </div>
    <div class="carousel-item">
      {/* <img src="..." class="d-block w-100" alt="..."/> */}
        <h3> Our heartful appreciation to team of Kirby Building Systems India Ltd., in the way you have successfully carried out the works contribution in achieving Two Million Safe Man Hours at MRF
       Trichy site. </h3>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home4
