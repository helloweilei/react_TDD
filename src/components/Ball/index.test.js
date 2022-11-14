import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import { Ball } from './index';

test('should render ball', () => {
  render(<Ball />);
  expect(screen.getByTestId('ball')).toBeInTheDocument();
});

test('should render correct position and style for ball', () => {
  render(<Ball position={[20, 20]} size={40} />);
  const ball = screen.getByTestId('ball');
  expect(ball.style.left).toEqual('0px');
  expect(ball.style.top).toEqual('0px');
});