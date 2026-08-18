import React, { useState } from 'react';
import ComponentB from "./ComponentB";

function ComponentA() {

    const [user, setUser] = useState("BroCode");

    return (
        <div className="box">
            <h1>Component A</h1>
            <h2>Hello <span className='current-value'>{`${user}`}</span>👇🏼</h2>
            <ComponentB user={user}/>
        </div>
    );
}

export default ComponentA;