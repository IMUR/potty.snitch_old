import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Get the root element from the DOM
const container = document.getElementById('root');

// Create a root using the container
const root = createRoot(container);

// Render the App component into the root
root.render(<App />);
