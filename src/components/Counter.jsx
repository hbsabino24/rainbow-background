import React, { useState, useEffect } from "react";
// React hook = Special function that allows functional components
//              to use React features without writing class components (React v16.8)
//              (useState, useEffect, useContext, useReducer, useCallback, and more...)

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

    const resetCount = () => {
        setCount(0);
    }

    useEffect(() => {
        window.addEventListener("counter", [addCount, subtractCount, changeColor, resetCount]);
        console.log("Counter - Event listeners added");

        return () => { // if no dependencies, this will run when component unmounts
            window.removeEventListener("counter", [addCount, subtractCount, changeColor, resetCount]);
            console.log("Counter - Event listeners removed");
        };
    }, []);

    useEffect(() => {
        document.title = `Count: ${count} - ${color}`;
    }, [count, color]);

    return (
        <>
            <p style={{ color: color }}>Count: {count}</p>
            <div className="counter-btns">
                <button onClick={addCount}>Add</button>
                <button onClick={subtractCount}>Subtract</button>
                <button onClick={changeColor}>Change Color</button>
                <button onClick={resetCount}>Reset</button>
            </div>
        </>
    );
}

export default Counter;