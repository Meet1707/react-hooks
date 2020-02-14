import React, { useEffect, useState } from 'react';

let childCount = 0
function Child() {
    useEffect(()=>{
        childCount ++;
    },[childCount])
    return(<>
    <h2>Child Counter: {childCount}</h2>
    
    </>)
}

export default Child;