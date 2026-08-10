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
        console.log(e.target.style.cssText, "Poof!");
    }

    return (
        <img onClick={(e) => handleClickEvent(e)} src={poopProfile} alt="poop profile" />
    )
}

export default ProfilePicture
