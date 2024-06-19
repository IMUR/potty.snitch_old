// src/components/Form.js
import React, { useState, useEffect, useRef } from 'react';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { firestoreDb } from '../firebase';

const Form = () => {
  const [formData, setFormData] = useState({
    pottyName: '',
    pottyAddress: '',
    pottyRule: '',
    pottyType: '',
    pottyNotes: '',
    location: { lat: null, lng: null }
  });

  const [pottyRules, setPottyRules] = useState([]);
  const [pottyTypes, setPottyTypes] = useState([]);
  const autocompleteRef = useRef(null);

  useEffect(() => {
    // Fetch Potty Rules
    const fetchPottyRules = async () => {
      const rulesSnapshot = await getDocs(collection(firestoreDb, 'PottyRules'));
      const rulesData = rulesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPottyRules(rulesData);
    };

    // Fetch Potty Types
    const fetchPottyTypes = async () => {
      const typesSnapshot = await getDocs(collection(firestoreDb, 'PottyTypes'));
      const typesData = typesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPottyTypes(typesData);
    };

    fetchPottyRules();
    fetchPottyTypes();

    const initAutocomplete = () => {
      if (!window.google) {
        console.error('Google Maps JavaScript API not loaded.');
        return;
      }
    
      const autocomplete = new window.google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
          types: ['establishment', 'address'],
          componentRestrictions: { country: 'us' }
        }
      );
    
      if (autocomplete && typeof autocomplete.addListener === 'function') {
        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          if (place.geometry) {
            const address = place.formatted_address;
            const location = {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            };
            setFormData(prevData => ({
              ...prevData,
              pottyAddress: address,
              location: location
            }));
          }
        });
      } else {
        console.error('autocomplete or addListener is not defined');
      }
    
      autocompleteRef.current = autocomplete;
    };

    if (document.readyState === 'complete') {
      initAutocomplete();
    } else {
      window.addEventListener('load', initAutocomplete);
      return () => window.removeEventListener('load', initAutocomplete);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(firestoreDb, 'PottyCollection'), formData);
      alert('Potty information submitted successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Potty Name</label>
        <input
          type="text"
          name="pottyName"
          value={formData.pottyName}
          onChange={handleInputChange}
          placeholder="Enter potty name"
        />
      </div>

      <div className="form-group">
        <label>Potty Address</label>
        <input
          id="autocomplete"
          type="text"
          name="pottyAddress"
          value={formData.pottyAddress}
          onChange={handleInputChange}
          placeholder="Enter potty address or POI"
        />
      </div>

      <div className="form-group">
        <label>Potty Type</label>
        <select
          name="pottyType"
          value={formData.pottyType}
          onChange={handleInputChange}
        >
          <option value="">Select type</option>
          {pottyTypes.map(type => (
            <option key={type.id} value={type.pottyType}>
              {type.pottyType}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Potty Rule</label>
        <select
          name="pottyRule"
          value={formData.pottyRule}
          onChange={handleInputChange}
        >
          <option value="">Select rule</option>
          {pottyRules.map(rule => (
            <option key={rule.id} value={rule.pottyRule}>
              {rule.pottyRule}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Potty Notes</label>
        <textarea
          name="pottyNotes"
          value={formData.pottyNotes}
          onChange={handleInputChange}
          placeholder="Enter additional notes"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
