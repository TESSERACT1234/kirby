import React from 'react'

import './NewsPg.css';
const NewsPg = () => {
  return (
    <div >
        <div style={{
          backgroundImage: `url("./images/newsbg.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
          backgroundPosition: 'center', height: '500px' }}>
          {/* <div style={{ backgroundImage: `url("./images/bg2.png")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
          backgroundPosition: 'center', height: '900px' }}> */}
        <h2 style={{color:"white",fontSize:"3rem",paddingTop:"18rem", marginLeft:"40rem"}} > News</h2>
        </div>
        {/* </div> */}
     


    </div>
  )
}

export default NewsPg
