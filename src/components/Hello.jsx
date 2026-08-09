import React, { useState } from 'react'

export default function Hello() {

    const [helloMessage, setMessage] = useState("World");
    const [showPeanutImage, setShowPeanutImage] = useState(false);
    const [changeButton, setButtonName] = useState("CHANGE");

    const[bgColor, setBgColor] = useState("white");

    const handleChange = () => {
        setMessage("Crap Nut"); // displays peanut image when button pressed
        setShowPeanutImage(true); // set true to show image
        setButtonName("RESET"); // shows "RESET" on button
        setBgColor("rainbow-in-action"); // starts rainbow background animation
    };

    const handleReset = () => {
        setMessage("World"); // displays back to original message
        setShowPeanutImage(false); // hide it when 'RESET' button pressed
        setButtonName("CHANGE"); // shows "CHANGE" on button
        setBgColor("white");
    };

  return (
    <div className={bgColor} style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Hello {helloMessage}!</h1>

        <button
            onClick={changeButton == "CHANGE" ? handleChange : handleReset} // based on current name of button
            style={{
            border: "5px inset black",
            padding: "10px 20px",
            marginTop: "15px",
            fontSize: "16px",
            cursor: "pointer",
            }}
        >
            {changeButton}
        </button>

        {showPeanutImage && (
            <div style={{ justifyContent: "center", marginTop: "20px" }}>
            <img
                src="/peanut.png"
                alt="Peanut aka Crap Nut"
                width={200}
            />
            </div>
        )}

        {/* {!showPeanutImage && (
            <>
            <div className="forms-row">
                <EmailForm />
                <RegistrationForm />
                <ExchancedForm />
            </div>
            <WindowWidthAndHeight />  
            <Counter /> 
            <DigitalClock />     
            </>
        )} */}
    </div>
  )
}
