import React, { useState } from "react";

const Dropdownmenu2 = () => {               // Initial state setup
  
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  
  
  const countryOptions = [      // Example data for countries and states
    { id: 1, name: "Child" },
    { id: 2, name: "Adult" }
  ];
  
  const ageOptions = {
    Child: ["0-4", "5-16", "16+"],
  };

    const handleCountryChange = (event) => {          // Handle the change event for the first dropdown (Country)
    const country = event.target.value;
    setSelectedCountry(country);

    if (country) {
      setStates(ageOptions[country] || []);            // Update the states dropdown based on the selected country
    } else {
      setStates([]);
    }
  };

  return (
    <div>
      {/* First Dropdown: Country */}
      <label>
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option hidden >Age</option>
          {countryOptions.map((country) => (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </label>

        {/* Second Dropdown: State */}
      <label>
        <select hidden={!selectedCountry}>
          <option hidden>Age range</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Dropdownmenu2;