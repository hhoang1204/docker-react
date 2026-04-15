import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn docker link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn Docker/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn docker link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn Docker/i);
  expect(linkElement).toBeInTheDocument();
});

