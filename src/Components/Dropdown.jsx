import './Dropdown.css';

export default function  Dropdownmenu(props) {



    return (
        <div className='dropdowns'>
            <div className='label-holder'>
                <select id='problemDropdown' value={props.problem} onChange={props.handleProblemDropdownChange}>
                    <option hidden selected value="">Support with?</option>
                    <option value="Diagnosis">Diagnosis</option>
                    <option value="Eating">Eating</option>
                    <option value="Education">Education</option>
                    <option value="Employment">Employment</option>
                    <option value="Housing">Housing</option>
                    <option value="Mental Health">Mental Health</option>
                    <option value="Sleep">Sleep</option>
                    <option value="Social Care">Social Care</option>
                    <option value="Transport">Transport</option>
                </select>
            </div>
            {props.problem !== "" &&(
            <div className='label-holder'>              
                <select id='locationDropdown' value={props.location} onChange={props.handleLocationDropdownChange}>
                    <option selected value="">Location?</option>
                    <option value="Bolton">Bolton</option>
                    <option value="Bury">Bury</option>
                    <option value="Manchester">Manchester</option>
                    <option value="Oldham">Oldham</option>
                    <option value="Rochdale">Rochdale</option>
                    <option value="Salford">Salford</option>
                    <option value="Stockport">Stockport</option>
                    <option value="Tameside">Tameside</option>
                    <option value="Trafford">Trafford</option>
                    <option value="Wigan">Wigan</option>
                </select>
            </div>
            )}
            {props.location !== "" &&(
                <div className='label-holder'>
                    <input placeholder='Age' id='ageRangeDropdown' value={props.ageRange} onChange={props.handleAgeRangeDropdownChange}/>
                </div>
            )}
        </div>
    );
}
