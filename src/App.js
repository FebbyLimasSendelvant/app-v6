import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portopolio from './pages/Portopolio.jsx';
import Blog from './pages/Blog.jsx';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path= '/' element = {<Home/>}/>
          <Route path= '/About' element = {<About/>}/>
          <Route path= '/Portopolio' element = {<Portopolio/>}/>
          <Route path= '/Blog' element = {<Blog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
