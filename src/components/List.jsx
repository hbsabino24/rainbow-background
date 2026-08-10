function List({ items = [], category = '' }) {
    const fruits = ["apple", "banana", "cherry", "coconut", "orange", "pineapple"]
    fruits.sort();
 
    const sortedItems = [...items].sort((a, b) => b.calories - a.calories);

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
                    <h2>Single Array of {category}</h2>
                    <hr />  
                    <ul>{listItems}</ul>
                </div>
                <div className="fruit-list">
                    <h2>Array of Objects (Fruit Details - Name and Calories)</h2>
                    <hr />
                    <ul>{listDetailsItems}</ul>
                </div>
            </div>
            <div className="lists-group">
                <div className="fruit-list">
                    <h2>Array of Objects (Low Calories Fruits)</h2>
                    <hr />
                    <ul>{listLowCaloriesItems}</ul>
                </div>
                <div className="fruit-list">
                    <h2>Array of Objects (High Calories Fruits)</h2>
                    <hr />
                    <ul>{listHighCaloriesItems}</ul>
                </div>
            </div>
        </> 
    )
}

export default List
