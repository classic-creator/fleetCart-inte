import React from 'react';
import './App.css';
import Header from "./component/Header/Header.js"
import CategoryHeader from "./component/home/CategoryHeader.js"
import Home from "./component/home/Home.js"
import Footer from "./component/footer/footer"

import { BrowserRouter,Route,Routes } from "react-router-dom";



function App() {
  return (
   <BrowserRouter>
   <Header />
   <CategoryHeader/>
   <Routes>
    <Route extact path='/' element={<Home/>} />

 
   

   </Routes>
<Footer/>
   </BrowserRouter>
  );
}

export default App;
