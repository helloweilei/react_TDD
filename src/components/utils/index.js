export const getReflectAngle = (inAngle, dir) => {
  if (dir === 'Horizontal') {
    return -inAngle;
  } else if (dir === 'Vertical') {
    return Math.PI - inAngle;
  }
}