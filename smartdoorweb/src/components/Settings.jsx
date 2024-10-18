import React from 'react';
import './Setting.css'; 

function Settings() {
  return (
    <div className="settings-page">
      <h1>Smart Door Settings</h1>
      
      <div>
        <button>Lock Door</button>
        <button>Unlock Door</button>
      </div>

      <div>
        <h3>Wi-Fi Configuration</h3>
        <p>Change your Wi-Fi settings here (if applicable)</p>
        <input type="text" placeholder="Wi-Fi Name" />
        <input type="password" placeholder="Wi-Fi Password" />
        <button>Save Settings</button>
      </div>
    </div>
  );
}

export default Settings;
