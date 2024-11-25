import './Dropdown.css';
import resources from "../resources.json"



export default function  Dropdownmenu(props) {


    return (
        <div className='dropdowns'>
            <div className='label-holder'>
                <select id='problemDropdown' value={props.problem} onChange={props.handleProblemDropdownChange}>
                    <option hidden selected value="">Support with?</option>
                    {Array.from(
                        new Set(resources.flatMap((resource) => resource.categories))
                    ).map ((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            {props.problem !== "" &&(
            <div className='label-holder'>              
                <select id='locationDropdown' value={props.location} onChange={props.handleLocationDropdownChange}>
                    <option hidden selected value="">Location?</option>
                    {Array.from(
                        new Set(resources.flatMap((resource) => resource.appliesTo.areas))
                    ).map ((area, index) => (
                        <option key={index} value={area}>
                            {area}
                        </option>
                    ))}
                </select>
            </div>
            )}
            {props.location !== "" &&(
                <div>
                    <div className='label-holder'>
                        <input type="number" placeholder='Age' id='ageRangeDropdown' value={props.ageRange} onChange={props.handleAgeRangeDropdownChange}/>
                    </div>
                </div>
            )}
        </div>
    );
}
