import React from 'react';
import { render, screen } from '@testing-library/react';
import EventDetail from './index.jsx';

test('renders', () => {
  render(<EventDetail />);
  const linkElement = screen.getByText(/Curumim/i);
  expect(linkElement).toBeInTheDocument();
});
