// import React from 'react'
// import '../Navbar.css'


// // rafce
// const navbar = () => {
//   return (
//     <div style={{paddingLeft:"5rem"}} >
//       <div className="container1" style={{ paddingLeft: "50px", paddingRight: "50px", width: "90px" }}>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//           <div className="container-fluid">
//             <a href='/'><img src="./images/kirby_logo.jpg" class="card-img-top" alt="logo" style={{ width: "250px", height: "100px" }} /></a>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ paddingLeft: "200px", fontSize: "20px", fontWeight: "bold" }}>
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">

//                 <li className="nav-item dropdown mx-2">
//                   <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     About us
//                   </a>
//                   <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <li><a className="dropdown-item" href="/who">Who we Are</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li><a className="dropdown-item" href="/">Mission,Vision & Values</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li><a className="dropdown-item" href="/">Environmental Health And Safety</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li><a className="dropdown-item" href="/">Executive Team</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li><a className="dropdown-item" href="/">Awards & Recognitions</a></li>
//                     <li><hr className="dropdown-divider" /></li>

//                   </ul>
//                 </li>

//                 <li className="nav-item dropdown mx-2">
//                   <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Products & Services
//                   </a>
//                   <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <li><a className="dropdown-item" href="/">Pre-Engineered Steel Buildings(PEB)</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li><a className="dropdown-item" href="/">Structural Steel(SS)</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li><a className="dropdown-item" href="/">Advantages Of Kirby Products</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li><a className="dropdown-item" href="/">Storage Solutions</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li><a className="dropdown-item" href="/">Accessories</a></li>
//                     <li><hr className="dropdown-divider" /></li>

//                   </ul>
//                 </li>
//                 <li className="nav-item dropdown mx-2">
//                   <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Projects
//                   </a>
//                   <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <li><a className="dropdown-item" href="/">Testimonials</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li><a className="dropdown-item" href="/">Project</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li><a className="dropdown-item" href="/">Build Your design</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                   </ul>
//                 </li>
//                 <li className="nav-item dropdown mx-2">
//                   <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Join us
//                   </a>
//                   <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <li><a className="dropdown-item" href="/">Be A Kirby Certifed Builder</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li><a className="dropdown-item" href="/">Careers At Kirby</a></li>
//                     <li><hr className="dropdown-divider" /></li>


//                   </ul>
//                 </li>
//                 <li className="nav-item dropdown mx-2">
//                   <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Media
//                   </a>
//                   <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <li><a className="dropdown-item" href="/">Brochures</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li><a className="dropdown-item" href="/newspg">News</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li><a className="dropdown-item" href="/">Videos</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li><a className="dropdown-item" href="/">FAQs</a></li>
//                     <li><hr className="dropdown-divider" /></li>


//                   </ul>
//                 </li>
//                 <li className="nav-item dropdown mx-2">
//                   <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Contact us
//                   </a>
//                   <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <li><a className="dropdown-item" href="/">Sales Network</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li><a className="dropdown-item" href="/">Manufacturing Location</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li><a className="dropdown-item" href="/">Enquire Now</a></li>
//                     <li><hr className="dropdown-divider" /></li>



//                   </ul>
//                 </li>


//                 <li class="nav-item">
//                   {/* <a class="nav-link " aria-current="page" href="/login" style={{border:"orange solid 2px", borderRadius:"2em" , backgroundColor:"orange", color:"white"}}>Login</a> */}
//                   <button type="button" class="btn btn-success" href="/login" style={{border:"orange solid 2px", borderRadius:"2em" , backgroundColor:"orange", color:"white"}} >Success</button>
//                 </li>
                
//               </ul>

//             </div>
//           </div>

//         </nav>

//       </div>
//     </div>

//   )
// }

// export default navbar
import React from 'react'
import '../Navbar.css'


// rafce
const navbar = () => {
 
  return (
    <div >
      <div className="container1" style={{ paddingLeft: "50px", paddingRight: "50px", width: "100px" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{marginInline:"5rem", borderBottomLeftRadius:"1rem", borderBottomRightRadius:"1rem" , height:"100px" }}>
          <div className="container-fluid" >
          
          <a href='/'><img src="images\kirby_logo.jpg" class="card-img-top" alt="logo" style={{ width: "10rem", height: "3rem" }} /> </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ paddingLeft: "190px", fontSize: "23px", fontWeight:'bold'}}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item dropdown mx-2">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About us
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/who">Who we Are</a></li>
                     <li><hr className="dropdown-divider" /></li>
                    <h4><li><a className="dropdown-item" href="/">Mission,Vision & Values</a></li></h4>
                    <li><hr className="dropdown-divider" /></li>
                    <h4><li><a className="dropdown-item" href="/">Environmental Health And Safety</a></li></h4>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/">Executive Team</a></li>
                     <li><hr className="dropdown-divider" /></li>
                    <h4><li><a className="dropdown-item" href="/">Awards & Recognitions</a></li></h4>
                    

                  </ul>
                </li>

                <li className="nav-item dropdown mx-2">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Products & Services
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <h4><li><a className="dropdown-item" href="/">Pre-Engineered Steel Buildings(PEB)</a></li></h4>
                    <li><hr className="dropdown-divider" /></li>
                    <h4><li><a className="dropdown-item" href="/">Structural Steel(SS)</a></li></h4>
                    <li><hr className="dropdown-divider" /></li>
                    <h4><li><a className="dropdown-item" href="/">Advantages Of Kirby Products</a></li></h4>
                    <li><hr className="dropdown-divider" /></li>
                    <h4><li><a className="dropdown-item" href="/">Storage Solutions</a></li></h4>
                    <li><hr className="dropdown-divider" /></li>
                    <h4><li><a className="dropdown-item" href="/">Accessories</a></li></h4>
                    

                  </ul>
                </li>
                <li className="nav-item dropdown mx-2">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Projects
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <h4><li><a className="dropdown-item" href="/">Testimonials</a></li></h4>
                    <li><hr className="dropdown-divider" /></li>
                    <h4><li><a className="dropdown-item" href="/">Project</a></li></h4>
                    <li><hr className="dropdown-divider" /></li>
                    <h4><li><a className="dropdown-item" href="/">Build Your design</a></li></h4>
                    
                  </ul>
                </li>
                <li className="nav-item dropdown mx-2">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Join us
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <h4><li><a className="dropdown-item" href="/">Be A Kirby Certifed Builder</a></li></h4>
                    <li><hr className="dropdown-divider" /></li>
                    <h4> <li><a className="dropdown-item" href="/">Careers At Kirby</a></li></h4>
                   


                  </ul>
                </li>
                <li className="nav-item dropdown mx-2">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Media
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <h4><li><a className="dropdown-item" href="/">Brochures</a></li></h4>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/newspg">News</a></li>
                 <li><hr className="dropdown-divider" /></li>
                    <h4> <li><a className="dropdown-item" href="/">Videos</a></li></h4>
                    <li><hr className="dropdown-divider" /></li>
                    <h4> <li><a className="dropdown-item" href="/">FAQs</a></li> </h4>
                   


                  </ul>
                </li>
                <li className="nav-item dropdown mx-2">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Contact us
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <h4> <li><a className="dropdown-item" href="/">Sales Network</a></li></h4>
                    <li><hr className="dropdown-divider" /></li>
                    <h4> <li><a className="dropdown-item" href="/">Manufacturing Location</a></li></h4>
                    <li><hr className="dropdown-divider" /></li>
                    <h4> <li><a className="dropdown-item" href="/">Enquire Now</a></li></h4>
                  



                  </ul>
                </li>


                <li className="nav-item  mx-1">
                  <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Ar</a>
                </li>
                <li className="nav-item mx-1">
                  <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">En</a>
                </li>
              </ul>

            </div>
          </div>

        </nav>

      </div>
    </div>

  )
}

export default navbar