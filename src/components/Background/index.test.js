import { render, screen } from '@testing-library/react';
import { Background, updateBallPosition } from '.';
import { expect } from '@jest/globals';

test('should render background comp', () => {
  render(<Background/>);
  const container = screen.getByTestId('container');
  expect(container).toHaveClass('background');
});

test('should render 2 balls when given init amount', () => {
  render(<Background initAmount={2} />);
  const balls = screen.getAllByTestId('ball');
  expect(balls.length).toBe(2);
});

test('should update ball position', () => {
  const { dx, dy } = updateBallPosition({
    x: 10, y: 10, dir: Math.PI / 2,
  }, 100);
  expect(dx).toBeLessThan(0.0001);
  expect(dy).toBe(100);
});