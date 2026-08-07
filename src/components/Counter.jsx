import React, { useState, useEffect } from "react";


function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <>
            <hr />
            <p>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
        </>
    );
}

export default Counter;