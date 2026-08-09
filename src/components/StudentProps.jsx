// props = read-ony properties that shared between components.
// A parent component can send data to a child commponent
// e.g. <ChildComponent name={props.name} age={props.age} />

// defaultProps = default values for props in case they are not provided
//                passed from the parent component
//                e.g. <ChildComponent name={props.name || "Guest"} age={props.age || 20} />

import React from 'react';
import PropTypes from 'prop-types';

function Student({ name = "Guest", age = 20, isStudent = false }) { // using default props if not provided from parent component
    return (
        <>
            <p>My name is <span className='current-value'>{name}</span>, I am <span className='current-value'>{age}</span> years old. Student? - <span className='current-value'>{isStudent ? "Yes" : "No"}</span></p>
        </>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
};

export default Student
