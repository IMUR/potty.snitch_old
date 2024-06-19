// App.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import App from './App';

jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  getDocs: jest.fn(),
}));

describe('App', () => {
  it('renders the correct number of places', async () => {
    const mockPlaces = [
      { id: '1', place: 'Place 1' },
      { id: '2', place: 'Place 2' },
      { id: '3', place: 'Place 3' },
    ];

    getDocs.mockResolvedValueOnce({
      docs: mockPlaces.map((place) => ({
        id: place.id,
        data: () => place,
      })),
    });

    const { getAllByRole } = render(<App />);

    await waitFor(() => expect(getDocs).toHaveBeenCalled());

    // Assuming places are rendered as list items
    const listItems = getAllByRole('listitem');
    expect(listItems).toHaveLength(mockPlaces.length);
  });

  it('logs an error when there is an error getting the user location', () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementationOnce((success, error) =>
        Promise.resolve(error(new Error('Geolocation is not supported by this browser.')))
      ),
    };
    global.navigator.geolocation = mockGeolocation;

    const consoleSpy = jest.spyOn(console, 'error');

    render(<App />);

    expect(consoleSpy).toHaveBeenCalledWith('Error getting user location:', expect.any(Error));
  });
});