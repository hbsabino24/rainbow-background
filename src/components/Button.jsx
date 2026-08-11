import React from 'react'



function Button() {

    let count = 0;

    const handleClick = () => {
        console.log("Button Clicked");
    }

    // const handleClick2 = (name) => {
    //     console.log(`${name} stop clicking me!`);
    // }

    const handleClickCount = (name) => {
        if(count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s`);

        }
        else {
            console.log(`${name} stop clicking me!`);
        }
    };

    const handleEventClick = (e) => {
        console.log(e);
        console.log(e.target);
    }

    const handleEventTarget = (e) => e.target.textContent = "Boink!";

    return (
        <>
            <h2>Open your console in browser to see the magic</h2>
            <div className='btn-group'>
                <button onClick={handleClick}>Click Me!</button>
                <button onClick={() => handleClickCount("Bro")}>Click Me!</button>
                <button onClick={(e) => handleEventClick(e)}>Click Me!</button>
                <button onDoubleClick={(e) => handleEventTarget(e)}>Double Click Me!</button>
            </div>
        </>
    );
}

export default Button