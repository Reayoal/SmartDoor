import React from 'react';
import './About.css'; 

function About() {
  return (
    <div className="about-page">
      <h1>About the Smart Door System</h1>
      <p>
        The Smart Door system allows for secure, remote access control using RFID or mobile credentials. It uses an ESP32 camera for live streaming, providing real-time monitoring.
      </p>

      <h3>Technologies Used</h3>
      <ul>
        <li>Arduino</li>
        <li>ESP32</li>
        <li>Wi-Fi</li>
        <li>Video Streaming</li>
        <li>RFID</li>
      </ul>

      <h3>Project Goals</h3>
      <p>
        Our goal is to provide a simple, cost-effective solution for secure home access. The system is highly customizable and can be expanded to fit various use cases.
      </p>
      
      <h3>Team Members</h3>
      <p>Yingyi Zhu - Project Lead</p>
      <p>Yunze - Hardware & System Design</p>
    </div>
  );
}

export default About;
