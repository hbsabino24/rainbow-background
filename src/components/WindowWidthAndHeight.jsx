//useEffect() = React Hook that tells React TO DO THIS CODE WHEN (pick one):
//              This component re-renders
//              This component mounts
//              The state of a value

//useEffect(funtion, [dependencies])

// 1. useEffect(() => {})           // Runs after every re-render
// 2. useEffect(() => {}, [])       // Runs only on mount
// 3. useEffect(() => {}, [values]) // Runs on mount + when values change

// USES:
// #1 Event Listeners
// #2 DOM Manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import { useEffect, useState } from "react";

function WindowWidthAndHeight() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Window Resize - Event listener added");

        return () => { // if no dependencies, this will run when component unmounts
            window.removeEventListener("resize", handleResize);
            console.log("Window Resize - Event listener removed");
        };
        
    }, []);

    useEffect(() => {
        document.title = `${width} x ${height}`;
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    
    return (
        <div>
            <hr />
            <h2>Try resizing the window and see <br />the changes of width and height, also the window title</h2>
            <p>Window width: {width}</p>
            <p>Window height: {height}</p>
        </div>
    );
}

export default WindowWidthAndHeight