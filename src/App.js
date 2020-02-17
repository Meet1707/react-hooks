import React, { useState, useMemo } from 'react';
import './App.css';
import Child from './child';

const App = () => {
  const [count, setCount] = useState(0);
  const memoChild = useMemo(() => { return <Child /> }, [])
  return (<div>
    <h2>Parent Counter: {count}</h2>
    <button onClick={() => setCount(count + 1)}>Click</button>
    <Child />
    <h2>Memorized Child Component</h2>
    {memoChild}
  </div>)
}
export default App; 