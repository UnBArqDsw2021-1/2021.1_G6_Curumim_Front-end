import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index.jsx';

test('renders', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Curumim/i);
  expect(linkElement).toBeInTheDocument();
});
