import React from "react";
import PropTypes from "prop-types";

function UserGreeting({username = "Guest", isLoggedIn = false}) { // using default props if not provided from parent component

    // if(props.isLoggedIn){
    //     return (
    //         <h1>Welcome back! {props.username}</h1>
    //     )
    // } else {
    //     return (
    //         <h1>Please sign in to continue.</h1>
    //     )

    // }

    const welcomeMessage = <h2 className="welcome-message">Welcome back! {username}</h2>

    const loginMessage = <h2 className="login-message">Please sign in to continue.</h2>

    return isLoggedIn ? ( welcomeMessage ) : ( loginMessage );
} 

UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool
}

export default UserGreeting