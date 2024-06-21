import React, { useEffect, useState, useContext } from 'react';
import { db } from '../firebase'; // Ensure correct path
import { collection, getDocs } from 'firebase/firestore';
import { LocationContext } from '../App'; // Import context
import '../css/MainLayout.css'; // Ensure correct path to CSS

const List = () => {
  const [locations, setLocations] = useState([]);
  const { selectedLocation, setSelectedLocation } = useContext(LocationContext); // Use context

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'PottyCollection'));
        const locationsData = querySnapshot.docs
          .filter(doc => doc.id !== 'rpx4ZIj1WcMcpbxu962z') // Filter out the template document
          .map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
        setLocations(locationsData);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  const handleSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="list-container">
      {locations.map((location) => (
        <div
          key={location.id}
          className={`list-item ${selectedLocation && selectedLocation.id === location.id ? 'selected' : ''}`}
          onClick={() => handleSelect(location)}
        >
          <h3>{location.pottyName}</h3>
          <p>{location.pottyAddress}</p>
          <p>{location.pottyRule}</p>
          <p>{location.pottyNotes}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
