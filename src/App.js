// src/App.js
import React from 'react';
import './App.css';
import LongLoading from "./LongLoading/LongLoading";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import ContactUs from "./ContactUs/ContactUs";
import About from "./About/About";
import Home from "./Home/Home";

function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route path='/' element={<LongLoading/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/home' element={<Home/>}/>
                  <Route path='/contact_us' element={<ContactUs/>}/>
              </Routes>
          </Router>
      </>
  );
}

export default App;
