import React, { useState } from "react";
import styles from "./ColorPicker.module.css"

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(e) {
        setColor(e.target.value);
    }

    return (
        <div className={styles["color-picker-container"]}>
            <h1>Color Picker</h1>
            <div className={styles["color-display"]} style={{ backgroundColor: color }}>
                <p>Selected color: <span className='current-value'>{color}</span></p>
            </div>
            <label>Select a Color:</label>
            <input className={styles["input-color"]} type="color" value={color} onChange={handleColorChange} />
        </div>
    )
}

export default ColorPicker