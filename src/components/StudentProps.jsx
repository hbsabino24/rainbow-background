// props = read-ony properties that shared between components.
// A parent component can send data to a child commponent
// e.g. <ChildComponent name={props.name} age={props.age} />

function Student(props) {
    return (
        <>
            <p>My name is <span className='current-value'>{props.name}</span>, I am <span className='current-value'>{props.age}</span> years old. Student? - <span className='current-value'>{props.isStudent ? "Yes" : "No"}</span></p>
        </>
    )
}

export default Student