import React, { useState } from 'react'

function ArrayState() {
    const [foods, setFoods] = useState(['Apple', 'Banana', 'Orange']);

    function handleAddFood() {
        const newFood = document.getElementById('food-input').value;
        document.getElementById('food-input').value = '';
    
        setFoods(f => [...f, newFood]); // Add the new food to the array e.g. ['Apple', 'Banana', 'Orange', newFood]
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div className='list-card'>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food, index) => (
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        <span className="remove-food">{food}</span>
                    </li>
                ))}
            </ul>
            <div className='lists-group'>
                <input type="text" id="food-input" placeholder="Enter your food" />
                <button onClick={handleAddFood}>Add Food</button>
            </div>
        </div>
    )
}

export default ArrayState