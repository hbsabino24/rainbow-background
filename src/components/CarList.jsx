import React, { useState } from "react";

function CarList() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };

        setCars(c => [...c, newCar]);
    
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange(e) {
        setCarYear(e.target.value);
    }

    function handleMakeChange(e) {
        setCarMake(e.target.value);
    }

    function handleModelChange(e) {
        setCarModel(e.target.value);
    }
    
    return (
        <>
            <div className="list-card">
                <h2>List of Car Objects</h2>

                <ul>
                    {cars.map((car, index) => (
                        <li key={index} onClick={() => handleRemoveCar(index)}>
                            <span className="current-value remove-item">{car.year} {car.make} {car.model}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='lists-group'>
                <input type="number" value={carYear} onChange={handleYearChange} placeholder="Enter Year" />
                <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Make" />
                <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Car Model" />
                <button onClick={handleAddCar}>Add Car</button>
            </div>
        </>
    )
}

export default CarList