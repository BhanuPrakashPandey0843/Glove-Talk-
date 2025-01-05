// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/LandingPage'; 
import ContactPage  from './Pages/ContactPage';
import GallaryPage  from './Pages/GallaryPage';
import TeamPage  from './Pages/Ourteam';
import CarrerPage from './Pages/CarrerPage';
import AboutPage from './Pages/AboutPage';
import Header from './Components/Navbar/Navbar'; 
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/home" element={<Home />} /> 
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/gallery" element={<GallaryPage />} />
            <Route path="/our-team" element={<TeamPage />} />
            <Route path="/career" element={<CarrerPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;