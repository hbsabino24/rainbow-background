// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(y => y + 1)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous function 
//                    Good practice to use updater functions

import { func } from 'prop-types';
import React, { useState } from 'react'

function StateUpdater() {

    const [count, setCount] = useState(0);

    function increment() {
     
        // Uses the CURRENT state to calculate the NEXT state.
        // set functions do not trigger an update.
        // React batches together state updates for performance reasons.
        // NEXT state becomes the CURRENT state after an update.

        // setCount(count + 1);
        // // UPDATE
        // setCount(count + 1);
        // // UPDATE
        // setCount(count + 1);
        // // UPDATE

        // setCount(prevCount => prevCount + 1);
        // setCount(prevCount => prevCount + 1);
        // setCount(prevCount => prevCount + 1);

        // Take the PENDING state to calculate the NEXT state.
        // React puts your updater function in a queue (waiting in line)
        // During the next render, it will call them in the same order

        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function reset() {
        setCount(c => c = 0);
    }

    return (
        <>
            <p>Count: <span className='current-value'>{count}</span></p>
            <div className='btn-group'>
                <button onClick={increment}>Increment</button>
                <button onClick={reset}>Reset</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </>
    )

}

export default StateUpdater