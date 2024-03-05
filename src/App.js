import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import "../src/pages/HomeMain"
import HomeMain from "../src/pages/HomeMain";

// rfce
function App() {
  return (
    <div>/
       <Navbar />
      <BrowserRouter>
       
        
        <Routes>
          <Route index element={<HomeMain/>}></Route>
          <Route path="/" element={<HomeMain/>}></Route>
        </Routes>
      
        
        
      </BrowserRouter>
      <Footer/>


    </div>
  )
}

export default App
