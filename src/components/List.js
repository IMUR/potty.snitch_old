import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const List = () => {
  const [pottyLocations, setPottyLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'PottyCollection'));
        setPottyLocations(snapshot.docs.map(doc => doc.data()));
      } catch (err) {
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="list-container">
      {pottyLocations.map((location, index) => (
        <div key={index} className="list-item">
          <h3>{location.pottyName}</h3>
          <p>{location.pottyAddress}</p>
          <p>{location.pottyRule}</p>
          <p>{location.pottyNotes}</p>
          <p>{location.pottyType}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
