// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar'; 

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/video">Video Stream</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
}

export default Navbar;
