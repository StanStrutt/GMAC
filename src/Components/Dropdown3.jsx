import React, { useState } from "react";


// is there and easier way to do this? which way is correct



function Dropdown3() {
  // State to track the selected option from the initial independent dropdown
  const [location, setLocation] = useState("");

  // State to track the selected option from the first dropdown
  const [ageRange, setAgeRange] = useState("");

  // State to track the selected option from the second dropdown
  const [ageNumber, setAgeNumber] = useState("");

  // Handler for the initial independent dropdown
  const handleInitialDropdownChange = (e) => {
    setLocation(e.target.value);
  };

  // Handler for the first dropdown
  const handleFirstDropdownChange = (e) => {
    setAgeRange(e.target.value);
    setAgeNumber(""); // Reset second dropdown when the first dropdown changes
  };

  // Handler for the second dropdown
  const handleSecondDropdownChange = (e) => {
    setAgeNumber(e.target.value);
  };

  return (
    <div>

      {/* Initial Independent Dropdown */}
      <label htmlFor="initialDropdown"></label>
      <select
        id="initialDropdown"
        value={location}
        onChange={handleInitialDropdownChange}
      >
        <option value="" hidden selected>Location</option>
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

      {/* First Dropdown */}
      <label htmlFor="firstDropdown"></label>
      <select
        id="firstDropdown"
        value={ageRange}
        onChange={handleFirstDropdownChange}
      >
        <option value="" selected hidden>Age range</option>
        <option value="showSecond">Show Second Dropdown</option>
        <option value="hideSecond">Do Not Show</option>
      </select>

      {/* Conditionally render the second dropdown */}
      {ageRange === "showSecond" && (
        <div>
          <label htmlFor="secondDropdown"></label>
          <select
            id="secondDropdown"
            value={ageNumber}
            onChange={handleSecondDropdownChange}
          >
            <option value="">-- Choose an option --</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      )}

      {/* Display selected values */}
      <div>
        <h2>Selections:</h2>
        <p>Initial Dropdown: {location || "None"}</p>
        <p>First Dropdown: {ageRange || "None"}</p>
        <p>Second Dropdown: {ageNumber || "None"}</p>
      </div>
    </div>
  );
}

export default Dropdown3;