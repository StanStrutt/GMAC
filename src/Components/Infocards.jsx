import "./Infocards.css"



const InfoCards = (props) => {

    const safeValue = (value) => value || "";

    if (props.filteredResults.length === 0) return null;

    return(
        <div className="cards"> 
        {props.filteredResults.map((resource) => (
            <div key={resource.id} className="card">
                <div className="card-text-image">
                    <img src={props.source} alt="" />
                    <h1>{safeValue(resource.title)}</h1>
                    <p>{safeValue(resource.description)}</p>
                    <hr/>
                </div>
                <div className="card-resources">
                    <div className="resource-details">
                        <p>{safeValue(resource.contact?.phoneNumber)}</p>
                        <div className="detail-spacer"/>
                        <p>{safeValue(resource.contact?.email)}</p>
                        <div className="detail-spacer"/>
                        <p>{safeValue(resource.contact?.website)}</p>
                        <div className="detail-spacer"/>
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
    )}



export default InfoCards