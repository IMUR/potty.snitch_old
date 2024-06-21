import React, { createContext, useState, useEffect } from 'react';
import MainLayout from './components/MainLayout';
import useLoadGoogleMaps from './hooks/useLoadGoogleMaps';

// Exporting LocationContext for use in other components
export const LocationContext = createContext();

const loadGoogleMapsScript = (apiKey, libraries) => {
  return new Promise((resolve, reject) => {
    if (document.getElementById('google-maps-api')) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-maps-api';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${libraries.join(',')}`;
    script.async = true;
    script.defer = true;

    script.onload = resolve;
    script.onerror = reject;

    document.body.appendChild(script);
  });
};

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const { isLoaded, loadError } = useLoadGoogleMaps(process.env.REACT_APP_GOOGLE_MAPS_API_KEY, ['places']);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const libraries = ['places'];

    if (!apiKey) {
      console.error('Google Maps API key is missing.');
      return;
    }

    loadGoogleMapsScript(apiKey, libraries)
      .then(() => setIsMapLoaded(true))
      .catch(error => {
        console.error('Failed to load Google Maps API:', error);
        setIsMapLoaded(false);
      });
  }, []);

  useEffect(() => {
    if (loadError) {
      console.error('Failed to load Google Maps API:', loadError);
    }
  }, [loadError]);

  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {isLoaded && isMapLoaded ? <MainLayout /> : <p>Loading map...</p>}
    </LocationContext.Provider>
  );
};

export default App;
