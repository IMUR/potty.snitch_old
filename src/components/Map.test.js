import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Map from './Map';

// Mock the getUserLocation function
global.getUserLocation = jest.fn(() => Promise.resolve({ lat: 0, lng: 0 }));

// Mock the Google Maps JavaScript API
global.window.google = {
  maps: {
    Map: class {
      constructor() {
        return {
          addListener: jest.fn(),
          setCenter: jest.fn(),
        };
      }
    },
    Marker: class {
      constructor() {
        return {
          addListener: jest.fn(),
        };
      }
    },
    InfoWindow: class {
      constructor() {
        return {
          open: jest.fn(),
          close: jest.fn(),
        };
      }
    },
  },
};

describe('Map', () => {
  test('renders without crashing', () => {
    const { container } = render(<Map places={[]} />);
    expect(container).toBeInTheDocument();
  });
});