import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import "../src/pages/HomeMain"
import HomeMain from "../src/pages/HomeMain";
import "../src/pages/Login";
import Login from "../src/pages/Login";
import NewsPg from "./pages/NewsPg";
import Whoweare from "./pages/Whoweare";

// rfce
function App() {
  return (
    <div>/
       <Navbar />
      <BrowserRouter>
       
        
        <Routes>
          <Route index element={<HomeMain/>}></Route>
          <Route path="/" element={<HomeMain/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/newspg" element={<NewsPg/>}></Route>
          <Route path="/who" element={<Whoweare/>}></Route>
          

        </Routes>

      
 
        
      </BrowserRouter>
      <Footer/>


    </div>
  )
}

export default App
