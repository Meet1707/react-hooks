import React, { useState, useCallback } from 'react';
import Child from './child';

const Parent = () => {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
        setCount(c => c + 1)
    },[setCount])
    return (<>
        <p>Counter: {count}</p>
        <Child increment={increment}/>
    </>);
}

export default Parent;