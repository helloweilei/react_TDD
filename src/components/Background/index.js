import { useState, useEffect, useRef } from 'react';
import { Ball } from '../Ball';
import { getReflectAngle } from '../utils';
import './index.css';

const BALL_SIZE = 100;

export const getBallPosition = (ball, speed) => {
  return {
    dx: speed * Math.cos(ball.dir),
    dy: speed * Math.sin(ball.dir),
  };
};

export const getDir = (ball, size, [width, height], { dx, dy }) => {
  if ((ball.x + size / 2 > width && dx > 0) ||
    (ball.x - size / 2 < 0 && dx < 0)
  ) {
    return getReflectAngle(ball.dir, 'Vertical');
  }
  if ((ball.y + size / 2 > height && dy > 0) ||
    (ball.y - size / 2 < 0 && dy < 0)
  ) {
    return getReflectAngle(ball.dir, 'Horizontal');
  }
  return ball.dir;
};

export const Background = (props) => {

  const [balls, setBalls] = useState(() => createBalls(props.initAmount));

  const ballsRef = useRef();
  ballsRef.current = balls;

  const containerRef = useRef();

  useEffect(() => {
    const { offsetWidth, offsetHeight } = containerRef.current;
    if (props.paused) {
      return;
    }
    const timer = setInterval(() => {
      const updatedBalls = ballsRef.current.map((ball) => {
        const { dx, dy } = getBallPosition(ball, 8);
        const newBall = {
          ...ball,
          x: ball.x + dx,
          y: ball.y + dy,
        };
        newBall.dir = getDir(newBall, BALL_SIZE, [offsetWidth, offsetHeight], { dx, dy });
        return newBall;
      });
      setBalls(updatedBalls);
    }, 40);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.paused]);

  return (
    <div ref={containerRef} className="background" data-testid="container">
      {balls.map((ball, index) => (<Ball
        key={index}
        size={BALL_SIZE}
        position={[ball.x, ball.y]}
      />)
      )}
    </div>
  );
}

function createBalls(count) {
  return new Array(count).fill(0).map(() => ({
    x: 0,
    y: 0,
    dir: Math.random() * Math.PI / 2,
  }));
}