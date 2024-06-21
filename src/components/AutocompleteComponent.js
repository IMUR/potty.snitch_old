import React, { useState, useEffect, useRef } from 'react';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';

const libraries = ['places'];

const AutocompleteComponent = ({ onPlaceSelected }) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_PLACES_API_KEY,
        libraries,
    });

    const [autocomplete, setAutocomplete] = useState(null);
    const inputRef = useRef(null);

    const handlePlaceChanged = () => {
        if (autocomplete !== null) {
            const place = autocomplete.getPlace();
            onPlaceSelected(place);
        } else {
            console.log('Autocomplete is not loaded yet!');
        }
    };

    if (loadError) return 'Error loading Google Maps script';
    if (!isLoaded) return 'Loading...';

    return (
        <Autocomplete
            onLoad={(autocomplete) => setAutocomplete(autocomplete)}
            onPlaceChanged={handlePlaceChanged}
        >
            <input
                type="text"
                placeholder="Enter a location"
                ref={inputRef}
                style={{ width: '300px', height: '40px' }}
            />
        </Autocomplete>
    );
};

export default AutocompleteComponent;
