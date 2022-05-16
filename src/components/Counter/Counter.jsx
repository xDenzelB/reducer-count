import { useEffect, useReducer, useState } from 'react';
import styles from './Counter.css';

// const colors = {
//   yellow: 'rgb(236, 222, 153)',
//   green: 'rgb(52, 211, 153)',
//   red: 'rgb(239, 68, 68)',
// };
const initialValue = {
  count: 0,
  color: 'rgb(236, 222, 153)'
}

function countReducer(countState, action) {
  switch (action.type) {
    case 'increment': {
      return {
        count: countState.count + 1,
        color: action.color
      };
    }
    case 'decrement': {
      return {
        count: countState.count - 1,
        color: action.color
      };
    }
    case 'reset': {
      return {
        count: 0,
        color: action.color
      }
    }
  }
}
export default function Counter() {
  const [count, dispatch] = useReducer(countReducer, initialValue);

  // const [count, setCount] = useState(0);
  const [currentColor, setCurrentColor] = useState('rgb(236, 222, 153)');

  useEffect(() => {
    if (count.count === 0) {
      setCurrentColor('rgb(236, 222, 153)');
    }

    if (count.count > 0) {
      setCurrentColor('rgb(52, 211, 153)');
    }

    if (count.count < 0) {
      setCurrentColor('rgb(239, 68, 68)');
    }
  }, [count.count]);

  const increment = () => {
    dispatch({
      type: 'increment',
      color: 'rgb(52, 211, 153)'
    })
  };

  const decrement = () => {
    dispatch({
      type: 'decrement',
      color: 'rgb(239, 68, 68)'
    })
  };

  const reset = () => {
    dispatch({
      type: 'reset',
      color: 'rgb(236, 222, 153)'
    })
  };

  return (
    <main className={styles.main}>
      <h1 style={{ color: currentColor }}>{count.count}</h1>
      <div>
        <button
          type="button"
          onClick={increment}
          aria-label="increment"
        
        >
          Increment
        </button>
        <button
          type="button"
          onClick={decrement}
          aria-label="decrement"
          
        >
          Decrement
        </button>
        <button
          type="button"
          aria-label="reset"
          onClick={reset}
          
        >
          Reset
        </button>
      </div>
    </main>
  );
}
