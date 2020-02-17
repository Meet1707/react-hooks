import React, { useRef } from 'react';

const Child = React.memo(({increment}) => {
    const render = useRef(1);
    console.log("Child render", render.current ++);
    return(
        <button onClick={increment}>Increment   </button>
    )
})

export default Child;