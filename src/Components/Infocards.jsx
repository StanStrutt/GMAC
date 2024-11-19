import "./Infocards.css"

export default function InfoCards(props) {
    return(
        <div className="cards">
            {props.input &&(
            <div className="card">
                <h1>{props.problem} {props.location} {props.ageRange}</h1>
                <p>card content card content card content card content card content card content card content card content</p>
            </div>
             )}
        </div>
    );
}