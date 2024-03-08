import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => <div data-testid="mocked-browser-router">{children}</div>,
  Routes: ({ children }: { children: React.ReactNode }) => <div data-testid="mocked-routes">{children}</div>,
  Route: ({ children }: { children: React.ReactNode }) => <div data-testid="mocked-route">{children}</div>,
  Navigate: () => null,
}));

test('renders App component', () => {
  render(<App />);

  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();

  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();

});
