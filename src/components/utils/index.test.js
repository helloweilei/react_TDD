import { getReflectAngle } from ".";
import { expect } from '@jest/globals';

test('should get reflect angle on Horizontal', () => {
  expect(getReflectAngle(Math.PI / 4, 'Horizontal')).toEqual(-Math.PI / 4);
});

test('should get reflect angle on Vertical', () => {
  expect(getReflectAngle(Math.PI / 4, 'Vertical')).toEqual(3 * Math.PI / 4);
});