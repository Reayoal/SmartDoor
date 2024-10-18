import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to the Smart Door System</h1>
      <p>
        This is a secure, smart access system with live video feed and remote door control.
      </p>
      
      <div>
        <h3>Live Video Stream</h3>
        <p>Watch the live feed from the door camera:</p>
        <iframe
          src="http://your-camera-stream-url"
          width="100%"
          height="300px"
          title="Live Stream"
        />
      </div>

      <div>
        <button>Lock Door</button>
        <button>Unlock Door</button>
      </div>

      <div className="navigation">
        <Link to="/video">Go to Video Stream Page</Link>
        <Link to="/about">Learn More About the Project</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </div>
  );
}

export default Home;
