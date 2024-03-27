// import React from 'react'

// import './NewsPg.css';
// import Ncard1 from '../components/Ncard1';
// import Ncard2 from '../components/Ncard2';
// import Ncard3 from '../components/Ncard3';
// import Ncard4 from '../components/Ncard4';
// import Ncard5 from '../components/Ncard5';
// const NewsPg = () => {
//   return (
//     <div >
//         <div style={{
//           backgroundImage: `url("./images/newsbg.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
//           backgroundPosition: 'center', height: '500px' }}>
//           {/* <div style={{ backgroundImage: `url("./images/bg2.png")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
//           backgroundPosition: 'center', height: '900px' }}> */}
//         <h2 style={{color:"white",fontSize:"3rem",paddingTop:"18rem", marginLeft:"40rem"}} > News</h2>
//         </div>
//         {/* </div> */}

//         <div className="newscontent">
//           <div className='newsa'>
//           <Ncard1/>
//           <Ncard2/>
//           <Ncard3/>
//          </div>
//          <div className="newsb">
//           <Ncard4/>
//           <Ncard5/>
//          </div>

//         </div>



//     </div>
//   )
// }

// export default NewsPg



import React, { useState, useEffect } from 'react';

import './NewsPg.css';
import Ncard1 from '../components/Ncard1';

const NewsPg = () => {
  // State to store the API data
  const [newsdata, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);

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
  return (
    <div >
      <div style={{
        backgroundImage: `url("./images/newsbg.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
        backgroundPosition: 'center', height: '500px'
      }}>

        <h2 style={{ color: "white", fontSize: "3rem", paddingTop: "18rem", marginLeft: "40rem" }} > News</h2>
      </div>
      <div className="newscontent">
        <div className='newsa row'>
          {newsdata?.items.map((item, index) => (
            // Using `map()` to generate a list of <li> elements
            <Ncard1 key={index} newsdetail={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsPg
