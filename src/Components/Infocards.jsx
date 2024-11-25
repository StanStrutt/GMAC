import "./Infocards.css"
import resources from "../resources.json"

export default function InfoCards(props) {

    {filteredResults.length > 0 && (
        <div className="cards"> 
        {filteredResults.map((resource) => (
            <div key={resource.id} className="card">
                <div className="card-text-image">
                    <img src={props.source} alt="" />
                    <h1>{resource.title}</h1>
                    <p>{resource.description}</p>
                    <hr/>
                </div>
                <div className="card-resources">
                    <ul>{resource.contact}</ul>
                </div>
            </div>
        ))}
    </div>
})