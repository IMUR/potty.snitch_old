// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/MainLayout.css';

function initMap() {
  // This function is called by the Google Maps script after loading
}

window.initMap = initMap;

ReactDOM.render(<App />, document.getElementById('root'));
