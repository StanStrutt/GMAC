import './Dropdown.css';
import Dropdownlogic  from './DropdownLogic';


export default function  Dropdownmenu() {

    const {location, problem, ageRange, handleLocationDropdownChange, handleAgeRangeDropdownChange, handleProblemDropdownChange} = Dropdownlogic()


    return (
        <div className='dropdowns'>
            <div className='label-holder'>
                <select id='locationDropdown' value={problem} onChange={handleProblemDropdownChange}>
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
            {problem !== "" &&(
            <div className='label-holder'>              
                <select id='locationDropdown' value={location} onChange={handleLocationDropdownChange}>
                    <option hidden selected value="">Location</option>
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
            {location !== "" &&(
                <div className='label-holder'>
                    <select id='ageRangeDropdown' value={ageRange} onChange={handleAgeRangeDropdownChange}>
                        <option hidden selected value="">Age</option>
                        <option value="0-4">0-4</option>
                        <option value="5-16">5-16</option>
                        <option value="16+">16+</option>
                        <option value="Adult">Adult</option>
                    </select>
                </div>
            )}
        {/* <div>
                <h2>Selections:</h2>
                <p>Location: {location || "None"}</p>
                <p>Age: {age || "None"}</p>
                <p>Age range: {ageRange || "None"}</p>
            </div>  */}
        </div>      


    );
}
