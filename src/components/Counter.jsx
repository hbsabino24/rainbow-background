import React, { useState, useEffect } from "react";


function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("lightblue");

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "lightblue" ? "pink" : "lightblue");
    }

    useEffect(() => {
        window.addEventListener("counter", [addCount, subtractCount, changeColor]);
        console.log("Counter - Event listener added");

        return () => { // if no dependencies, this will run when component unmounts
            window.removeEventListener("counter", [addCount, subtractCount, changeColor]);
            console.log("Counter - Event listener removed");
        };
    }, []);

    useEffect(() => {
        document.title = `Count: ${count} - ${color}`;
    }, [count, color]);

    return (
        <>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Change Color</button>
        </>
    );
}

export default Counter;