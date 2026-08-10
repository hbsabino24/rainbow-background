import React from 'react'
import PropTypes from 'prop-types';

function List({ items = [], category = '' }) {
    const fruits = ["apple", "banana", "cherry", "coconut", "orange", "pineapple"]
    fruits.sort();
 
    const sortedItems = [...items].sort((a, b) => b.calories - a.calories); // ... spread operator - copying the array without modifying the original

    const lowCaloriesFruits = sortedItems.filter((fruit) => fruit.calories < 100)
    const highCaloriesFruits = sortedItems.filter((fruit) => fruit.calories >= 100)

    const listItems = fruits.map((fruit) => <li key={fruit}>{fruit}</li>)
    const listDetailsItems = sortedItems.map((fruitDetail) => <li key={fruitDetail.id}>{fruitDetail.name} - <span className='current-value'>{fruitDetail.calories}</span> calories</li>)
    const listLowCaloriesItems = lowCaloriesFruits.map((lowCalFruit) => <li key={lowCalFruit.id}>{lowCalFruit.name} - <span className='current-value'>{lowCalFruit.calories}</span> calories</li>)
    const listHighCaloriesItems = highCaloriesFruits.map((highCalFruit) => <li key={highCalFruit.id}>{highCalFruit.name} - <span className='current-value'>{highCalFruit.calories}</span> calories</li>)

    return (
        <>
            <div className="lists-group">
                <div className="fruit-list">
                    <h2 className="list-category">Single Array of <span className='current-value'>{category}</span></h2> 
                    <ul>{listItems}</ul>
                </div>
                <div className="fruit-list">
                    <h2 className="list-category">Array of Objects - <span className='current-value'>{category}</span></h2>
                    <ul>{listDetailsItems}</ul>
                </div>
            </div>
            <div className="lists-group">
                <div className="fruit-list">
                    <h2 className="list-category">Array of Objects (Low Calories <span className='current-value'>{category}</span>)</h2>
                    <ul>{listLowCaloriesItems}</ul>
                </div>
                <div className="fruit-list">
                    <h2 className="list-category">Array of Objects (High Calories <span className='current-value'>{category}</span>)</h2>
                    <ul>{listHighCaloriesItems}</ul>
                </div>
            </div>
        </> 
    )
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number        
    }))
}

export default List
