import React, { useState } from "react";
import resources from "./resources.json";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [age, setAge] = useState("");

  const [filteredResults, setFilteredResults] = useState([]);

  // Handle Filtering
  const filterResources = () => {
    const filtered = resources.filter((resource) => {
      // Check category match
      const categoryMatch =
        selectedCategory === "" || resource.categories.includes(selectedCategory);

      // Check area match
      const areaMatch =
        selectedArea === "" || resource.appliesTo.areas.includes(selectedArea);

      // Check age range match
      const ageMatch =
        age === "" ||
        (resource.appliesTo.minAge === null || age >= resource.appliesTo.minAge) &&
        (resource.appliesTo.maxAge === null || age <= resource.appliesTo.maxAge);

      // Return true if all conditions match
      return categoryMatch && areaMatch && ageMatch;
    });

    setFilteredResults(filtered);
  };

  return (
    <div>
      <h1>Resource Finder</h1>

      {/* Dropdown for Categories */}
      <label>
        Select Category:
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">-- All Categories --</option>
          {Array.from(
            new Set(resources.flatMap((resource) => resource.categories))
          ).map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>

      {/* Dropdown for Areas */}
      <label>
        Select Area:
        <select
          value={selectedArea}
          onChange={(e) => setSelectedArea(e.target.value)}
        >
          <option value="">-- All Areas --</option>
          {Array.from(
            new Set(resources.flatMap((resource) => resource.appliesTo.areas))
          ).map((area, index) => (
            <option key={index} value={area}>
              {area}
            </option>
          ))}
        </select>
      </label>

      {/* Input for Age */}
      <label>
        Enter Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter Age"
        />
      </label>

      {/* Filter Button */}
      <button onClick={filterResources}>Find Resources</button>

      {/* Display Results */}
      <div style={{ marginTop: "20px" }}>
        <h2>Results</h2>
        {filteredResults.length > 0 ? (
          filteredResults.map((resource) => (
            <div key={resource.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <p>
                <strong>Phone:</strong> {resource.contact.phoneNumber}
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a href={resource.contact.website} target="_blank" rel="noopener noreferrer">
                  {resource.contact.website}
                </a>
              </p>
            </div>
          ))
        ) : (
          <p>No matching resources found.</p>
        )}
      </div>
    </div>
  );
};

export default App;