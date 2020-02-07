import React, { useEffect } from 'react';

function Child(props) {

    useEffect(() => {
        console.log("child");
    }, [props]);
    
    return (<>
        {props.count}
    </>);
}

export default Child;