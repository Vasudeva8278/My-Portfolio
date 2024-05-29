// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
//import Home from './components/Home';
//import Skills from './components/Skills';
//import Projects from './components/Projects';
//import Contact from './components/Contact';
import './App.css'; // Import global styles

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/*
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;
