import React, { useState } from 'react'

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 2024
    })

    function handleBrandChange(e) {
        setCar(c => ({
            ...c,
            brand: e.target.value
        }))
    }

    function handleYearChange(e) {
        setCar(c => ({
            ...c,
            year: e.target.value
        }))
    }

    function handleModelChange(e) {
        setCar(c => ({
            ...c,
            model: e.target.value
        }))
    }

    function handleColorChange(e) {
        setCar(c => ({
            ...c,
            color: e.target.value
        }))
    }

    return (
        <div>
            <div className='list-details'>
                <h1>My car is <span className='current-value'>{car.brand}</span></h1>
                <ul>
                    <li>Year: <span className='current-value'>{car.year}</span></li>
                    <li>Model: <span className='current-value'>{car.model}</span></li>
                    <li>Color: <span className='current-value'>{car.color}</span></li>
                </ul>
            </div>

            {/* <h2>Update Car</h2> */}
            <div className='input-group'>
                <input type="text" value={car.brand} onChange={handleBrandChange} /> 
                <input type="number" value={car.year} onChange={handleYearChange} />
                <input type="text" value={car.model} onChange={handleModelChange} />
                <input type="text" value={car.color} onChange={handleColorChange} />
            </div>

        </div>
    )
}

export default Car