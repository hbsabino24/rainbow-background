import React, { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk a dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        setTasks(t => [...t, newTask]);
        setNewTask("");
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        
    }
    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input 
                    type="text"
                    placeholder="Enter a new task..."
                    value={newTask}
                    onChange={handleInputChange} />
                
                <button
                    className="add-button"
                    onClick={addTask}
                >Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="current-value">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>👆</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                ))}
            </ol>
        </div>);
}

export default ToDoList;