// useState() = Re-renders the component when the state value changes.

// useRef()   = "use Reference" Does not cause re-renders when its value changes.
//              When you want a component to "remember" some information,
//              but you don't want that information to trigger new renders.

//              1. Accessing/Interacting with DOM elements
//              2. Handling Focus, Animations, and Transitions
//              3. Managing Timers and Intervals

import React, { useState, useEffect, useRef } from 'react';

function Remember() {

    let [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("COMPONENT RENDERED")
    });

    function handleClick() {
        setNumber(n => n + 1);
        console.log('clicked, updated number: ' + number);
    }

    return (
        <div>
            <button onClick={handleClick}>
                Click me!
            </button>
        </div>
    )
}

export default Remember