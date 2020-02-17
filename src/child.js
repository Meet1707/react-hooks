import React, { useEffect } from 'react';

let childCount = 0
function Child() {
    useEffect(() => {
        childCount++;
    })
    return (
        <h2>Child Counter: {childCount}</h2>
    )
}

export default Child;