import React from 'react'



function Button() {

    let count = 0;

    const handleClick = () => {
        console.log("Button Clicked");
    }

    const handleClick2 = (name) => {
        console.log(`${name} stop clicking me!`);
    }

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
        <button onDoubleClick={(e) => handleEventTarget(e)}>Click Me!</button>
    );
}

export default Button