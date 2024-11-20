import "./Infocards.css"

export default function InfoCards(props) {
    return(
        <div className="cards"> 
            <div className="card">
                <img src="" alt="" width="100%" height="120px"/>
                <h1>{props.problem} {props.location} {props.ageRange}</h1>
                <p>card content card content card content card content card content card content card content card content</p>
            </div>
        </div>
    );
}