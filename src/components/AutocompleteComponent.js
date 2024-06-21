import React, { useEffect, useRef } from 'react';
import useLoadGoogleMaps from './useLoadGoogleMaps';

const AutocompleteComponent = ({ onPlaceSelected }) => {
    const inputRef = useRef(null);
    const { isLoaded } = useLoadGoogleMaps(process.env.REACT_APP_GOOGLE_MAPS_API_KEY, ['places']);

    useEffect(() => {
        if (!isLoaded || !window.google) return;

        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);
        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            if (place.geometry) {
                onPlaceSelected(place);
            }
        });
    }, [isLoaded]);

    return <input ref={inputRef} type="text" placeholder="Enter a location" />;
};

export default AutocompleteComponent;
