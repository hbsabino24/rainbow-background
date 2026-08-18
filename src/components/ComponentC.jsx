import ComponentD from "./ComponentD";

function ComponentC({ user }) {

    return (
        <div className="box">
            <h1>Component C</h1>
            <h2>👇🏼</h2>
            <ComponentD user={user}/>
        </div>
    );
}

export default ComponentC;