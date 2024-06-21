import { useEffect, useState } from 'react';

const useLoadGoogleMaps = (apiKey, libraries) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadError, setLoadError] = useState(null);

    useEffect(() => {
        const scriptId = 'google-maps-api'; // Define scriptId here

        const loadScript = () => {
            if (document.getElementById(scriptId)) {
                setIsLoaded(true);
                return;
            }

            const script = document.createElement('script');
            script.id = scriptId;
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${libraries.join(',')}`;
            script.async = true;
            script.defer = true;

            script.onload = () => setIsLoaded(true);
            script.onerror = (error) => setLoadError(error);

            document.body.appendChild(script);
        };

        loadScript();

        return () => {
            const script = document.getElementById(scriptId);
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, [apiKey, libraries]);

    return { isLoaded, loadError };
};

export default useLoadGoogleMaps;
