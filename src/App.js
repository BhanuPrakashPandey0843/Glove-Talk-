// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/LandingPage'; 
import ContactPage  from './Pages/ContactPage';
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
            <Route path="/contact" element={<ContactPage />} />
           
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;