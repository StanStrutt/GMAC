import "./Infocards.css"
import { Fade } from 'react-awesome-reveal';

export default function InfoCards(props) {

    const safeValue = (value) => value || ""

    if (props.filteredResults.length === 0) return null;

    return(
        <div className="cards"> 
            {props.filteredResults.map((resource) => (
                <Fade key={resource.id} className="card">
                    <div>
                        <div className="card-text-image">
                            <img src={props.source} alt="" />
                            <div className="card-text">
                                <h1>{safeValue(resource.title)}</h1>
                            </div>
                            <div className="card-p">
                                <p>{safeValue(resource.description)}</p>
                            </div>
                        </div>
                        <div className="card-resources">
                            <hr/>
                            <div className="resource-details">
                                <div className="phone" style={{ display: resource.contact?.phoneNumber ? 'flex' : 'none' }}>
                                    <img src="https://media.istockphoto.com/id/1494579261/vector/telephone-handset-simple-circle-icon.jpg?s=612x612&w=0&k=20&c=bpf-J3OuFFZDNS3gQQ25Xgp6PKJ_lhbmvuO-kYgNCSg=" width="20px" height="20px" alt=""/>
                                    <a href={"tel:" + resource.contact?.phoneNumber}>{safeValue(resource.contact?.phoneNumber)}</a>
                                </div>
                                <div className="email" style={{ display: resource.contact?.email ? 'flex' : 'none' }}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/At_sign.svg/800px-At_sign.svg.png" alt="" width="20px" height="20px"/>
                                    <a href={"mailto:" + resource.contact?.email}>{safeValue(resource.contact?.email)}</a>
                                </div>
                                <div className="website" style={{ display: resource.contact?.website ? 'flex' : 'none' }}>
                                    <img src="https://cdn.pixabay.com/photo/2016/11/30/17/10/web-1873373_1280.png" alt="" width="20px" height="20px"/>                 
                                    <a href={resource.contact?.website}>{safeValue(resource.contact?.website)}</a>
                                </div>
                                <div className="resource-address" style={{ display: resource.contact.address?.line1 ? 'flex' : 'none' }}>
                                    <img src="https://www.iconpacks.net/icons/2/free-location-icon-2952-thumb.png" width="20px" height="20px" alt=""/>
                                    <div className="address-details">
                                        <p>{safeValue(resource.contact.address?.line1)}</p>
                                        <p>{safeValue(resource.contact.address?.line2)}</p>
                                        <p>{safeValue(resource.contact.address?.city)}</p>
                                        <p>{safeValue(resource.contact.address?.country)}</p>
                                        <p>{safeValue(resource.contact.address?.postcode)}</p>
                                    </div>
                                </div>         
                            </div>
                        </div>
                    </div>
                </Fade>
            ))}
        </div>
    )
}



