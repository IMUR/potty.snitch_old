import React, { useEffect, useRef, useState } from 'react';
import { getUserLocation } from './location';

const Map = ({ places }) => {
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Assume this is an async function that fetches user location
    getUserLocation().then(location => {
      setUserLocation(location);
    });
  }, []);

  useEffect(() => {
    let infoWindow = null;
    let newMap = null;

    const loadGoogleMaps = () => {
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCU4dGjzQRlwYVR868Gjk_w95e5l8bQgy0`;
        script.async = true;
        script.defer = true;
        script.addEventListener('load', () => {
          initMap();
        });
        document.body.appendChild(script);
      } else {
        initMap();
      }
    };

    const initMap = () => {
      if (!userLocation) {
        console.error('User location is not available.');
        return;
      }

      const mapDiv = mapRef.current;
      newMap = new window.google.maps.Map(mapDiv, {
        center: userLocation,
        zoom: 15,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: true,
        styles: [
          {
            featureType: 'poi',
            stylers: [{ visibility: 'off' }]
          },
          {
            featureType: 'poi.business',
            stylers: [{ visibility: 'off' }]
          }
        ]
      });

      // Add a user location marker
      new window.google.maps.Marker({
        position: userLocation,
        map: newMap,
        title: 'You are here!',
      });

      // Add markers for each place
      places.forEach(place => {
        const marker = new window.google.maps.Marker({
          position: place.location,
          map: newMap,
          title: place.name,
        });

        // Add an info window for each marker
        const placeInfoWindow = new window.google.maps.InfoWindow({
          content: `
            <div>
              <h3>${place.pottyName}</h3>
              <p>${place.pottyAddress}</p>
              <p>Rule: ${place.pottyRule}</p>
              <p>Notes: ${place.pottyNotes}</p>
            </div>
          `,
        });

        marker.addListener('click', () => {
          if (infoWindow) {
            infoWindow.close();
          }
          placeInfoWindow.open(newMap, marker);
          infoWindow = placeInfoWindow;
        });
      });

      newMap.addListener('click', () => {
        if (infoWindow) {
          infoWindow.close();
          infoWindow = null;
        }
      });
    };

    if (userLocation) {
      loadGoogleMaps();
    }
  }, [userLocation, places]);

  const handleCenterUserLocation = () => {
    if (mapRef.current && userLocation) {
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: userLocation,
        zoom: 15,
      });
      mapInstance.setCenter(userLocation);
    }
  };

  return (
    <div className="map-container" style={{ position: 'relative', height: '100%', width: '100%' }}>
      <div id="map" ref={mapRef} style={{ height: '100%', width: '100%' }}></div>
      <button 
        onClick={handleCenterUserLocation} 
        style={{
          position: 'absolute', 
          bottom: '10px', 
          right: '10px', 
          padding: '10px',
          backgroundColor: '#007bff', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Center on User
      </button>
    </div>
  );
};

export default Map;