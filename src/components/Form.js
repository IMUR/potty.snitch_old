import React, { useState, useEffect, useRef } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import useLoadGoogleMaps from '../hooks/useLoadGoogleMaps';

const Form = () => {
  const [pottyName, setPottyName] = useState('');
  const [pottyAddress, setPottyAddress] = useState('');
  const [pottyRule, setPottyRule] = useState('');
  const [pottyRules, setPottyRules] = useState([]);
  const [pottyNotes, setPottyNotes] = useState('');
  const [pottyType, setPottyType] = useState('');
  const [pottyTypes, setPottyTypes] = useState([]);
  const [geocodeResult, setGeocodeResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const inputRef = useRef(null);

  const { isLoaded, loadError } = useLoadGoogleMaps(
    process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    ['places']
  );

  useEffect(() => {
    if (loadError) {
      setErrorMessage('Failed to load Google Maps API. Please try again later.');
      return;
    }

    if (isLoaded) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.formatted_address) {
          setPottyAddress(place.formatted_address);
          geocodeAddress(place.formatted_address);
        } else {
          setErrorMessage('Selected place does not contain a formatted address.');
        }
      });
    }
  }, [isLoaded, loadError]);

  const geocodeAddress = (address) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const location = results[0].geometry.location;
        setGeocodeResult({
          latitude: location.lat(),
          longitude: location.lng(),
        });
      } else {
        setErrorMessage(`Geocode was not successful: ${status}`);
        setGeocodeResult(null);
      }
    });
  };

  useEffect(() => {
    const fetchPottyRules = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'PottyRules'));
        const rules = querySnapshot.docs.map((doc) => doc.data().pottyRule);
        setPottyRules(rules);
      } catch (error) {
        setErrorMessage('Error fetching potty rules.');
      }
    };

    const fetchPottyTypes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'PottyTypes'));
        const types = querySnapshot.docs.map((doc) => doc.data().pottyType);
        setPottyTypes(types);
      } catch (error) {
        setErrorMessage('Error fetching potty types.');
      }
    };

    fetchPottyRules();
    fetchPottyTypes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!geocodeResult) {
      setErrorMessage('No geocode result available.');
      return;
    }

    try {
      await addDoc(collection(db, 'PottyCollection'), {
        pottyName,
        pottyAddress,
        pottyRule,
        pottyNotes,
        pottyType,
        location: {
          latitude: geocodeResult.latitude,
          longitude: geocodeResult.longitude,
        },
      });
      console.log('Document written successfully!');
      setPottyName('');
      setPottyAddress('');
      setPottyRule('');
      setPottyNotes('');
      setPottyType('');
      setGeocodeResult(null);
      setErrorMessage('');
    } catch (e) {
      setErrorMessage(`Error adding document: ${e.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="form-group">
        <label htmlFor="pottyName">Potty Name:</label>
        <input
          type="text"
          id="pottyName"
          value={pottyName}
          onChange={(e) => setPottyName(e.target.value)}
          className="form-input"
          placeholder="Enter Potty Name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="pottyAddress">Potty Address:</label>
        <input
          type="text"
          id="pottyAddress"
          ref={inputRef}
          value={pottyAddress}
          onChange={(e) => setPottyAddress(e.target.value)}
          className="form-input"
          placeholder="Enter Potty Address"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="pottyRule">Potty Rule:</label>
        <select
          id="pottyRule"
          value={pottyRule}
          onChange={(e) => setPottyRule(e.target.value)}
          className="form-select"
          required
        >
          <option value="">Select a rule</option>
          {pottyRules.map((rule, index) => (
            <option key={index} value={rule}>
              {rule}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="pottyNotes">Potty Notes:</label>
        <input
          type="text"
          id="pottyNotes"
          value={pottyNotes}
          onChange={(e) => setPottyNotes(e.target.value)}
          className="form-input"
          placeholder="Enter Potty Notes"
        />
      </div>
      <div className="form-group">
        <label htmlFor="pottyType">Potty Type:</label>
        <select
          id="pottyType"
          value={pottyType}
          onChange={(e) => setPottyType(e.target.value)}
          className="form-select"
          required
        >
          <option value="">Select a type</option>
          {pottyTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
};

export default Form;
