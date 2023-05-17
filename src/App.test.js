import { render, screen } from '@testing-library/react';
import App from './App';
import populatePokemon from './populate';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

