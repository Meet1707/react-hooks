import React, { useState, useEffect } from 'react';
import './App.css';
import Child from './child';

function App() {

  const [count, setCount] = useState(0);
  
    useEffect(() => {
        console.log("parent")
    }, []);

  return (
    <div>
      <p>Parent Counter {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <br />
      <Child count={count} />
    </div>
  );

}

export default App;
