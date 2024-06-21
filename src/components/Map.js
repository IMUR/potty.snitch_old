import React, { useEffect, useRef, useState, useContext } from 'react';
import { db } from '../firebase'; // Ensure correct path
import { collection, getDocs } from 'firebase/firestore';
import { LocationContext } from '../App'; // Import context
import '../css/MainLayout.css'; // Ensure correct path to CSS

const Map = () => {
  const mapRef = useRef(null);
  const [locations, setLocations] = useState([]);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const { selectedLocation } = useContext(LocationContext); // Use context
  const userMarkerRef = useRef(null);
  const infoWindowRef = useRef(null);

  useEffect(() => {
    const loadMap = (location) => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 12,
        disableDefaultUI: true,
        gestureHandling: 'greedy',
        clickableIcons: false,
        styles: [
          {
            featureType: 'poi',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'transit',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'road',
            stylers: [{ visibility: 'simplified' }],
          },
          {
            featureType: 'water',
            stylers: [{ visibility: 'simplified' }],
          },
          {
            featureType: 'landscape',
            stylers: [{ visibility: 'simplified' }],
          },
        ],
      });
      setMap(map);

      userMarkerRef.current = new window.google.maps.Marker({
        position: location,
        map,
        title: 'You are here',
      });

      document.querySelector('.map-container').classList.add('map-loaded');

      map.addListener('click', () => {
        if (infoWindowRef.current) {
          infoWindowRef.current.close();
        }
      });
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const initialLocation = { lat: latitude, lng: longitude };
          loadMap(initialLocation);
        },
        (error) => console.error('Error getting user location:', error),
        { enableHighAccuracy: true }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
      const defaultLocation = { lat: 37.7749, lng: -122.4194 };
      loadMap(defaultLocation);
    }
  }, []);

  useEffect(() => {
    if (map) {
      const fetchLocations = async () => {
        const querySnapshot = await getDocs(collection(db, 'PottyCollection'));
        const locationsData = querySnapshot.docs
          .filter(doc => doc.id !== 'rpx4ZIj1WcMcpbxu962z')
          .map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
        setLocations(locationsData);
      };

      fetchLocations();
    }
  }, [map]);

  useEffect(() => {
    if (map && locations.length) {
      const newMarkers = locations.map((location) => {
        if (location.location && location.location.latitude && location.location.longitude) {
          const marker = new window.google.maps.Marker({
            position: {
              lat: location.location.latitude,
              lng: location.location.longitude,
            },
            map,
            title: location.pottyName,
          });

          marker.addListener('click', () => {
            if (infoWindowRef.current) {
              infoWindowRef.current.close();
            }

            infoWindowRef.current = new window.google.maps.InfoWindow({
              content: `
                <div class="custom-info-window">
                  <h3>${location.pottyName}</h3>
                  <p>${location.pottyAddress}</p>
                  <p>${location.pottyNotes}</p>
                </div>
              `,
              disableAutoPan: false,
              pixelOffset: new window.google.maps.Size(0, -30),
            });

            infoWindowRef.current.open(map, marker);
          });

          return { marker, location };
        }
        return null;
      }).filter(marker => marker !== null);

      setMarkers(newMarkers);
    }
  }, [map, locations]);

  useEffect(() => {
    if (map && selectedLocation) {
      const selectedMarker = markers.find(markerObj => markerObj.location.id === selectedLocation.id);
      if (selectedMarker) {
        const marker = selectedMarker.marker;

        // Programmatically trigger the click event on the marker
        window.google.maps.event.trigger(marker, 'click');
        map.setCenter(marker.getPosition());
      }
    }
  }, [selectedLocation, map, markers]);

  const handleCenterOnUser = () => {
    if (userMarkerRef.current) {
      map.setCenter(userMarkerRef.current.getPosition());
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userLocation = { lat: latitude, lng: longitude };
          map.setCenter(userLocation);
        },
        (error) => console.error('Error getting user location:', error),
        { enableHighAccuracy: true }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="map-container">
      <div ref={mapRef} className="map" />
      {map && (
        <button onClick={handleCenterOnUser} className="center-button">
          Me
        </button>
      )}
    </div>
  );
};

export default Map;
