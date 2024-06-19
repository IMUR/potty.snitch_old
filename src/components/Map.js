// src/components/Map.js
import React, { useEffect, useRef } from 'react';

const Map = ({ userLocation, places }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google || !userLocation) {
      console.error('Google Maps JavaScript API or user location is not loaded.');
      return;
    }

    const initMap = () => {
      const mapDiv = mapRef.current;
      const newMap = new window.google.maps.Map(mapDiv, {
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

      let infoWindow = null;

      // Add markers for each place
      places.forEach(place => {
        const marker = new window.google.maps.Marker({
          position: place.location,
          map: newMap,
          title: place.pottyName,
        });

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

    if (document.readyState === 'complete') {
      initMap();
    } else {
      window.addEventListener('load', initMap);
      return () => window.removeEventListener('load', initMap);
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
