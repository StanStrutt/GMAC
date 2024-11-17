import './Dropdown.css';
import Dropdownlogic  from './DropdownLogic';


export default function  Dropdownmenu() {

    const {location, age, ageRange, handleLocationDropdownChange, handleAgeRangeDropdownChange, handleAgeDropdownChange} = Dropdownlogic()


    return (
        <div className='dropdowns'>
            <div className='label-holder'>
                <label>
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
                </label>
            </div>
            {location !== "" &&(
            <div className='label-holder'>
                <label>
                    <select id='ageDropdown' value={age} onChange={handleAgeDropdownChange}>
                        <option hidden selected>Age</option>
                        <option value="Child">Child</option>
                        <option value="Adult">Adult</option>
                    </select>
                </label>
            </div>
            )}
            {age === "Child" &&(
                <div className='label-holder'>
                    <label>
                        <select id='ageRangeDropdown' value={ageRange} onChange={handleAgeRangeDropdownChange}>
                            <option hidden selected>Age range</option>
                            <option value="0-4">0-4</option>
                            <option value="5-16">5-16</option>
                            <option value="16+">16+</option>
                        </select>
                    </label>
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
