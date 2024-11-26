

export default function DropContext(props) {
    return(
        <div>
            <h2>Selections:</h2>
            <p>Problem: {props.problem || "None"}</p>
            <p>Location: {props.location || "None"}</p>
            <p>Age: {props.ageRange || "None"}</p>
        </div>
    );
}