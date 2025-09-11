import { useRef, useEffect, useState } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  // Start timer function
  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    startTimer(); // Start timer on mount

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, []);

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <h1>Timer : {count} seconds </h1>
      <button
        className='border p-2 rounded-lg bg-gray-300 cursor-pointer mr-2'
        onClick={startTimer}
      >
        Start Timer
      </button>
      <button
        className='border p-2 rounded-lg bg-gray-300 cursor-pointer'
        onClick={stopTimer}
      >
        Stop Timer
      </button>
    </div>
  );
};

export default Timer