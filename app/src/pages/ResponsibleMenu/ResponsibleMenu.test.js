import React from 'react';
import { render, screen } from '@testing-library/react';
import ResponsibleMenu from './index.jsx';

test('renders', () => {
  render(<ResponsibleMenu />);
  const linkElement = screen.getByText(/Curumim/i);
  expect(linkElement).toBeInTheDocument();
});
