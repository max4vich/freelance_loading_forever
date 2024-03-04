// src/App.js
import React from 'react';
import './App.css';
import MainPage from "./MainPage/MainPage";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import MainPage2 from "./MainPage2/MainPage2";

function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route path='/' element={<MainPage/>}/>
                  <Route path='/about' element={<MainPage/>}/>
                  <Route path='/home' element={<MainPage/>}/>
                  <Route path='/contact_us' element={<MainPage2/>}/>
              </Routes>
          </Router>
      </>
  );
}

export default App;
