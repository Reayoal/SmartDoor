// src/App.jsx
import React from 'react';
import './App.css'; 
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import VideoStream from './components/VideoStream';
import About from './components/About';
import Contact from './components/Contact';
import Settings from './components/Settings';
import Navbar from './components/Navbar';  // Import Navbar

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  {/* Add Navbar component here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<VideoStream />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
