import React, { useState } from 'react'

function NameState() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const [btnText, setBtnText] = useState("Set Name");

    const updateName = () => {
        setName(name === "Guest" ? "SpongeBob" : "Guest");
        setAge(age <= 100 ? 0 : 100);
        setIsEmployed(isEmployed === false ? true : false);
        setBtnText(btnText === "Set Name" ? "Reset" : "Set Name");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const decrementAge = () => {
        setAge(age - 1);
    }

    const toggleEmployeeStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <>
            <div className='btn-group'>
                <p>Name: <span className='current-value'>{name}</span></p>
                <button onClick={updateName}>{btnText}</button>
            </div>
            <div className='btn-group'>
                <p>Age: <span className='current-value'>{age}</span></p>
                <button onClick={incrementAge}>Increment</button>
                <button onClick={decrementAge}>Decrement</button>
            </div>
            <div className='btn-group'>
                <p>Employed? - <span className='current-value'>{isEmployed ? "Yes" : "No"}</span></p>
                <button onClick={toggleEmployeeStatus}>Toggle Status</button>
            </div>
        </>
    )
}

export default NameState