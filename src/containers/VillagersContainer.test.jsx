import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import VillagersContainer from './Villagers';

describe('Villagers Containter', () => {
  it('should display animal crossing villagers', async () => {
    render(<VillagersContainer />);

    const ul = await screen.findByRole('list', { name: 'villagers' });
    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
