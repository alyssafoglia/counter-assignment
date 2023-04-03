// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const items = await screen.findAllByRole('count')
  expect(items).toHaveValue(0);
  const items2 = await screen.findAllByRole('setcount')
  expect(items).toHaveValue(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const items = await screen.findAllByRole('increment')
  expect(items).toHaveValue('count' + 1);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const items = await screen.findAllByRole('decrement')
  expect(items).toHaveValue('count' - 1);
});
