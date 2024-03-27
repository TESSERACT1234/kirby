import React from 'react'
import '../components/News.css'
import { useState } from 'react';



function Ncard1(props) {
  const [isHovered, setIsHovered] = useState(false);
  const { newsdetail } = props;
  console.log(newsdetail);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const moredetail = () =>{
   
  
  };

  let image_url="http://kirbyapp.weblivelink.com/DocumentsNews/"+newsdetail?.image[0];
  return (
    <div className='col-md-3'>
      <div className={`cardn ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} >
        {/* <img src="./images/mar15.jpeg" className="card-img-top10" alt="..." /> */}
        <img src={image_url} className="card-img-top10" alt="..." />
        <div className="card-body">
          <p className="card-text"> {newsdetail?.newsDate}</p>
          <h5 className="card-title10">{newsdetail?.langauagecontent?.title}</h5>
          

          <div className='bt1'>
            <button type="button" className="btn" style={{ marginTop: "20px" }} onClick={moredetail}  >Know More</button>
            {/* <h4><li><a className="dropdown-item" href="/who">Who we Are</a></li> </h4>  */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ncard1
