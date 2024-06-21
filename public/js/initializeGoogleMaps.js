const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
script.async = true;
script.defer = true;

script.onload = () => {
    console.log('Google Maps API loaded successfully.');
};

script.onerror = (error) => {
    console.error('Error loading Google Maps API:', error);
};

document.body.appendChild(script);
