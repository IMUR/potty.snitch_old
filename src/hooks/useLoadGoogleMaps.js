import { useEffect, useState } from 'react';

const useLoadGoogleMaps = (libraries = []) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadError, setLoadError] = useState(null);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
        if (!apiKey) {
            console.error('Google Maps API key is missing. Please add it to your .env file.');
            setLoadError('API key is missing');
            return;
        }

        const scriptId = 'google-maps-api';

        if (document.getElementById(scriptId)) {
            setIsLoaded(true);
            return;
        }

        const script = document.createElement('script');
        script.id = scriptId;
        // Ensure libraries is an array
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${Array.isArray(libraries) ? libraries.join(',') : ''}`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
            setIsLoaded(true);
        };

        script.onerror = (error) => {
            setLoadError(error);
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [libraries]);

    return { isLoaded, loadError };
};

export default useLoadGoogleMaps;
