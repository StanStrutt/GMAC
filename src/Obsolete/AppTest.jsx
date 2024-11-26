import React, { useState, useEffect } from "react";
import resources from "./resources.json";

const App = () => {
  const [problem, setProblem] = useState("");
  const [location, setLocation] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // Automatically filter resources when fields change
  useEffect(() => {
    if (problem && location && ageRange) {
      const filtered = resources.filter((resource) => {
        const categoryMatch = resource.categories.includes(problem);
        const areaMatch = resource.appliesTo.areas.includes(location);
        const ageRangeMatch =
          (resource.appliesTo.minAge === null || ageRange >= resource.appliesTo.minAge) &&
          (resource.appliesTo.maxAge === null || ageRange <= resource.appliesTo.maxAge);

        return categoryMatch && areaMatch && ageRangeMatch;
      });

      setFilteredResults(filtered);
    } else {
      setFilteredResults([]); // Clear results if any field is empty
    }
  }, [problem, location, ageRange]);

  return (
    <div>
      <h1>Resource Finder</h1>

      {/* Dropdown for Categories */}
      <label>
        Select Category:
        <select
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        >
          <option value="">-- Select a Category --</option>
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
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">-- Select an Area --</option>
          {Array.from(
            new Set(resources.flatMap((resource) => resource.appliesTo.areas))
          ).map((area, index) => (
            <option key={index} value={area}>
              {area}
            </option>
          ))}
        </select>
      </label>

      {/* Input for ageRange */}
      <label>
        Enter ageRange:
        <input
          type="number"
          value={ageRange}
          onChange={(e) => setAgeRange(e.target.value)}
          placeholder="Enter ageRange"
        />
      </label>

      {/* Display Results */}
      {filteredResults.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Results</h2>
          {filteredResults.map((resource) => (
            <div
              key={resource.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <p>
                <strong>Phone:</strong> {resource.contact.phoneNumber}
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href={resource.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.contact.website}
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;