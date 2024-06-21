import React, { useEffect } from 'react';

const MapComponent = () => {
    useEffect(() => {
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.defer = true;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        };

        const initMap = () => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
            });
        };

        loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`)
            .then(() => window.google && initMap())
            .catch((error) => console.error('Error loading Google Maps API', error));
    }, []);

    return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default MapComponent;
