import "./Infocards.css"
import { Fade } from 'react-awesome-reveal';


export default function InfoCards(props) {

    const safeValue = (value) => value || "";

    if (props.filteredResults.length === 0) return null;

    return(
        <Fade cascade>
        <div className="cards"> 
        {props.filteredResults.map((resource) => (
            <div key={resource.id} className="card">
                <div className="card-text-image">
                    <img src={props.source} alt="" />
                    <div className="card-text">
                        <h1>{safeValue(resource.title)}</h1>
                        <div className="card-p">
                            <p>{safeValue(resource.description)}</p>
                        </div>
                    </div>
                </div>
                <div className="card-resources">
                    <hr/>
                    <div className="resource-details">
                        <p>{safeValue(resource.contact?.phoneNumber)}</p>
                        <p>{safeValue(resource.contact?.email)}</p>                     
                        <p>{safeValue(resource.contact?.website)}</p>                       
                    </div>
                    <div className="resource-address">
                        <p>{safeValue(resource.contact.address?.line1)}</p>
                        <p>{safeValue(resource.contact.address?.line2)}</p>
                        <p>{safeValue(resource.contact.address?.city)}</p>
                        <p>{safeValue(resource.contact.address?.country)}</p>
                        <p>{safeValue(resource.contact.address?.postcode)}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
    </Fade>
)}



