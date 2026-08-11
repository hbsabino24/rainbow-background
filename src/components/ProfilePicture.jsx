import React from 'react'
import Button from './Button'
import poopProfile from '../assets/poop-profile.jpg'

// click event = An interaction when a user clicks on a specific element
//               We can respond to clicks by passing a callback
//               to the onClick event handler

function ProfilePicture() {

    const handleClick = () => {
        console.log("Pooped!");
    }


    const handleClickEvent = (e) => { 
        e.target.style.display = "none";
        console.log("Poof! Poop image " + e.target.style.cssText);
        document.getElementById("reset").style.display = "block";
        console.log( "Reset button " + document.getElementById("reset").style.cssText);
    }

    const handleReset = (e) => {
        document.getElementById("poop").style.display = "block";
        document.getElementById("reset").style.display = "none";
        console.log( "Reset! Reset button " + e.target.style.cssText);
        console.log( "Poop image " + document.getElementById("poop").style.cssText);
    }

    return (
        <>
            <img className="img-btn" onClick={handleClick} src={poopProfile} alt="poop profile" />
            <img className="img-btn" id='poop' onClick={(e) => handleClickEvent(e)} src={poopProfile} alt="poop profile" />
            <button id='reset' onClick={(e) => handleReset(e)}>Reset</button>
        </>
    )
}

export default ProfilePicture
