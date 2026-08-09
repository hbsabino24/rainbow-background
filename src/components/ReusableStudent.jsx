import Student from "./StudentProps";

function ReusableStudent() {
    return (
        <>
            <Student name="John Doe" age={20} isStudent={true} />
            <Student name="Jane Doe" age={21} isStudent={false} />
            <Student name="Jack Doe" age={22} isStudent={true} />
            <Student name="Jill Doe" age={23} isStudent={false} />
            <Student /> {/* using default props */}
        </>
    )
}

export default ReusableStudent