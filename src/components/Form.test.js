import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { getDocs, collection, getFirestore } from 'firebase/firestore';
import Form from './Form';

jest.mock('firebase/firestore', () => {
  return {
    getFirestore: jest.fn(() => ({})),
    collection: jest.fn(),
    getDocs: jest.fn(() => Promise.resolve({
      docs: [
        { id: '1', data: () => ({ pottyRule: 'Rule 1' }) },
        { id: '2', data: () => ({ pottyRule: 'Rule 2' }) },
        { id: '3', data: () => ({ pottyRule: 'Rule 3' }) },
      ],
    })),
  };
});

it('renders the correct number of potty rules', async () => {
  const { getAllByRole } = render(<Form />);

  await waitFor(() => expect(getDocs).toHaveBeenCalled());

  const options = getAllByRole('option');
  expect(options).toHaveLength(3);
});