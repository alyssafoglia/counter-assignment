import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders counter message', () => {
  const { getByText } = render(<Counter />);
  const message = getByText(/Counter:/i);
  expect(message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const { getByText } = render(<Counter />);
  const count = getByText(/Count: 0/i);
  expect(count).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const { getByText } = render(<Counter />);
  const incrementButton = getByText('+');
  const count = getByText(/Count: 0/i);
  fireEvent.click(incrementButton);
  expect(count).toHaveTextContent('Count: 1');
});

test('clicking - decrements the count', () => {
  const { getByText } = render(<Counter />);
  const decrementButton = getByText('-');
  const count = getByText(/Count: 0/i);
  fireEvent.click(decrementButton);
  expect(count).toHaveTextContent('Count: -1');
});
