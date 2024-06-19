// src/App.js
import React, { useState, useEffect } from 'react';
import MainLayout from './components/MainLayout';
import { collection, getDocs } from 'firebase/firestore';
import { firestoreDb } from './firebase';

function App() {
  const [userLocation, setUserLocation] = useState(null);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );

    const fetchPlaces = async () => {
      const pottyCollectionRef = collection(firestoreDb, 'PottyCollection');
      const snapshot = await getDocs(pottyCollectionRef);
      const placesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPlaces(placesData);
    };

    fetchPlaces();
  }, []);

  return (
    <div className="App">
      <MainLayout userLocation={userLocation} places={places} />
    </div>
  );
}

export default App;
