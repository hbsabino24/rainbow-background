import React, { useState } from "react";
import styles from "./ToDoList.module.css";

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk a dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className={styles["to-do-list"]}>
            <h1>To-Do-List</h1>
            <div>
                <input 
                    type="text"
                    placeholder="Enter a new task..."
                    value={newTask}
                    onChange={handleInputChange} />
                
                <button
                    className={styles["add-button"]}
                    onClick={addTask}
                >Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="current-value">{task}</span>
                        <button className={styles["delete-button"]} onClick={() => deleteTask(index)}>Delete</button>
                        <button className={styles["move-button"]} onClick={() => moveTaskUp(index)}>👆</button>
                        <button className={styles["move-button"]} onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                ))}
            </ol>
        </div>);
}

export default ToDoList;