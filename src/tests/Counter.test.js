// import necessary react testing library helpers here
// import the Counter component here
/*
beforeEach(() => {
  // Render the Counter component here
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
});
*/

import React from 'react';
import { render, fireEvent , screen} from '@testing-library/react';
import Counter from '../Components/Counter';


test('renders counter message', () => {
  const { getByText } = render(<Counter />);
    const counterMessage = screen.getByText('Counter');
    expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const { getByTestId } = render(<Counter />);
  const countElement = getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
    const{ getByTestId } = render(<Counter />);
    const countElement = getByTestId('count');
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const { getByTestId } = render(<Counter />);
    const countElement = getByTestId('count');
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent('-1');
});

