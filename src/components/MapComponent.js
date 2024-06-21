import React, { useEffect, useRef } from 'react';
import useLoadGoogleMaps from '../hooks/useLoadGoogleMaps'; // Assuming your custom hook

const MapComponent = () => {
    const mapRef = useRef(null);
    const { isLoaded, loadError } = useLoadGoogleMaps(['places']);

    useEffect(() => {
        if (loadError) {
            console.error('Failed to load Google Maps API:', loadError);
            return;
        }

        if (isLoaded) {
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
            });
        }
    }, [isLoaded, loadError]);

    return <div ref={mapRef} style={{ height: '500px', width: '100%' }}></div>;
};

export default MapComponent;
