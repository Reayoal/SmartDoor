import React from 'react';
import './VideoStream.css'; 

function VideoStream() {
  return (
    <div className="video-stream-page">
      <h1>Live Video Stream</h1>
      <iframe
        src="http://your-camera-stream-url"
        width="100%"
        height="500px"
        title="Live Video Feed"
      />
      
      <div className="status">
        <p>Status: Door is unlocked</p>
        <p>Last access time: 10:00 AM</p>
      </div>
    </div>
  );
}

export default VideoStream;
