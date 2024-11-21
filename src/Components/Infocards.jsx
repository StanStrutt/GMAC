import "./Infocards.css"

export default function InfoCards(props) {
    return(
        <div className="cards"> 
            {props.input &&(
            <div className="card">
                <div className="card-text-image">
                    <img src={props.source} alt="" />
                    <h1>{props.problem} {props.location} {props.ageRange}</h1>
                    <p>card content card content card content card content card content card content card content card content</p>
                    <hr/>
                </div>
                <div className="card-resources">
                    <p>card resources card resources card resources card resources card resources card resources card resources card resources </p>
                </div>
            </div>
            )}
        </div>
    );
}