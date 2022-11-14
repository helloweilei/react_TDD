import './index.css';

export const Ball = ({ position = [100, 100], size = 100 }) => {
  const ballStyle = {
    left: (position[0] - size / 2) + 'px',
    top: (position[1] - size / 2) + 'px',
    borderRadius: size / 2 + 'px',
    width: size + 'px',
    height: size + 'px',
  };
  return <span
    data-testid="ball"
    className="ball"
    style={ballStyle}
  ></span>
}