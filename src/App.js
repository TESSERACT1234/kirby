import Footer from "./components/Footer";

import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import React from 'react';
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
// import Home4 from "./pages/Home4";
import News from "./pages/News";
import Slide from "./components/Slide";

// rfce
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Slide/>
        <Routes>
          <Route index element={<Home2/>}></Route>
          <Route path="/home2" element={<Home2/>}></Route>
        </Routes>
      
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route> 
        </Routes>

        <Routes>
          <Route index element={<Home3/>}></Route>
          <Route path="/home3" element={<Home3/>}></Route>
        </Routes>
        
        <Routes>
          <Route index element={<News/>}></Route>
          <Route path="/news" element={<News/>}></Route>
        </Routes>

        {/* <Routes>
          <Route index element={<Home4/>}></Route>
          <Route path="/home4" element={<Home4/>}></Route>  
        </Routes> */}
      </BrowserRouter>
      <Footer/>


    </div>
  )
}

export default App
