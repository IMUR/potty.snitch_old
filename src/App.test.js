import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// This is where the mocking code goes
beforeEach(() => {
  global.window.google = {
    maps: {
      Map: jest.fn(),
      places: {
        Autocomplete: jest.fn(),
        // Mock other objects from the Google Maps Places API here...
      },
      // Mock other objects from the Google Maps JavaScript API here...
    },
  };

  // Mocking the geolocation
  const mockGeolocation = {
    getCurrentPosition: jest.fn()
      .mockImplementationOnce((success) => Promise.resolve(success({
        coords: {
          latitude: 51.1,
          longitude: 45.3
        }
      })))
  };
  global.navigator.geolocation = mockGeolocation;
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});