import React, { createContext, useState } from 'react';
import MainLayout from './components/MainLayout'; // Ensure correct path to MainLayout component
import './css/App.css'; // Ensure correct path to CSS file

// Create a context for managing selected location
export const LocationContext = createContext();

const App = () => {
  // State for selected location
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    // Provide selected location state and updater to the context
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      <MainLayout />
    </LocationContext.Provider>
  );
};

export default App;
