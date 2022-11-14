import './App.css';
import { Background } from './components/Background';
import { useCallback, useState } from 'react';

function App() {
  const [isPause, setIsPause] = useState(false);
  const handleClick = useCallback(() => {
    setTimeout(() => {
      setIsPause((prev) => !prev);
    }, 1000);
  }, [setIsPause]);
  return (
    <div className="App">
      <Background paused={isPause} initAmount={4} />
      <button data-custom="button" className="btn" onClick={handleClick}>
        {isPause ? 'Start' : 'Pause'}
      </button>
    </div>
  );
}

export default App;
