import React from 'react';
import { render, screen } from '@testing-library/react';
import ClassList from './index.jsx';

test('renders', () => {
  render(<ClassList />);
  const linkElement = screen.getByText(/Curumim/i);
  expect(linkElement).toBeInTheDocument();
});
