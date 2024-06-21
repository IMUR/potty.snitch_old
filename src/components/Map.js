import React, { useEffect, useRef, useState, useContext } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { LocationContext } from '../App';

const Map = () => {
  const mapRef = useRef(null);
  const [locations, setLocations] = useState([]);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]); // Initialize markers state
  const { selectedLocation } = useContext(LocationContext);
  const userMarkerRef = useRef(null);
  const infoWindowRef = useRef(null);

  useEffect(() => {
    if (!window.google || !window.google.maps) return;

    const initializeMap = (location) => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 12,
        disableDefaultUI: true,
        gestureHandling: 'greedy',
      });
      setMap(map);

      userMarkerRef.current = new window.google.maps.marker.AdvancedMarkerElement({
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
        ({ coords }) => initializeMap({ lat: coords.latitude, lng: coords.longitude }),
        () => initializeMap({ lat: 37.7749, lng: -122.4194 })
      );
    } else {
      initializeMap({ lat: 37.7749, lng: -122.4194 });
    }
  }, []);

  useEffect(() => {
    if (map) {
      const fetchLocations = async () => {
        const snapshot = await getDocs(collection(db, 'PottyCollection'));
        setLocations(snapshot.docs.map(doc => doc.data()));
      };
      fetchLocations();
    }
  }, [map]);

  useEffect(() => {
    if (map && locations.length) {
      const newMarkers = locations.map((location) => {
        if (location.location?.latitude && location.location?.longitude) {
          const marker = new window.google.maps.Marker({
            position: { lat: location.location.latitude, lng: location.location.longitude },
            map,
            title: location.pottyName,
          });

          marker.addListener('click', () => {
            if (infoWindowRef.current) {
              infoWindowRef.current.close();
            }
            infoWindowRef.current = new window.google.maps.InfoWindow({
              content: `<div><h3>${location.pottyName}</h3><p>${location.pottyAddress}</p></div>`,
            });
            infoWindowRef.current.open(map, marker);
          });

          return { marker, location };
        }
        return null;
      }).filter(marker => marker !== null);

      setMarkers(newMarkers); // Update state with new markers
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
