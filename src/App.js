import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          
          <Navbar />

          <div className="contents">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/AboutMe" element={<AboutMe/>} />
              <Route path="/Portfolio" element={<Portfolio/>} />
              <Route path="/Contact" element={<Contact/>} />
            </Routes>
          </div>
          
          <Footer />

        </header>
      </div>
    </Router>
  );
}

export default App;
