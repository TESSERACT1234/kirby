import React from 'react'

import './NewsPg.css';
import Ncard1 from '../components/Ncard1';
import Ncard2 from '../components/Ncard2';
import Ncard3 from '../components/Ncard3';
import Ncard4 from '../components/Ncard4';
import Ncard5 from '../components/Ncard5';
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

        <div className="newscontent">
          <div className='newsa'>
          <Ncard1/>
          <Ncard2/>
          <Ncard3/>
         </div>
         <div className="newsb">
          <Ncard4/>
          <Ncard5/>
         </div>
          
        </div>
     


    </div>
  )
}

export default NewsPg
