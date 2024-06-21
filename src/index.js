import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './css/tailwind.css'; // Import Tailwind CSS
import './css/index.css'; // Import global styles
import { motion } from "framer-motion"; // Import Framer Motion for animations if needed

// Get the root element from the DOM
const container = document.getElementById('root');

// Create a root using the container
const root = createRoot(container);

// Render the App component into the root
root.render(<App />);
