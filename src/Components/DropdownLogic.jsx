import { useState , useEffect} from "react";
import resources from "../resources.json"


export default function Dropdownlogic() {

  const [location, setLocation] = useState("");

  const [problem, setProblem] = useState("");

  const [ageRange, setAgeRange] = useState("");

  const [filteredResults, setFilteredResults] = useState([])


    useEffect(() => {
        if (problem && location && ageRange) {
          const filtered = resources.filter((resource) => {
            const categoryMatch = resource.categories.includes(problem);
            const areaMatch = resource.appliesTo.areas.includes(location);
            const ageMatch =
              (resource.appliesTo.minAge === null || ageRange >= resource.appliesTo.minAge) &&
              (resource.appliesTo.maxAge === null || ageRange <= resource.appliesTo.maxAge);
    
            return categoryMatch && areaMatch && ageMatch;
          });
    
          setFilteredResults(filtered);
        } else {
          setFilteredResults([]); // Clear results if fields are not all filled
        }
      }, [problem, location, ageRange]);

    const handleProblemDropdownChange = (e) => {
      setProblem(e.target.value);
    };

    const handleLocationDropdownChange = (e) => {
      setLocation(e.target.value);
    };

    const handleAgeRangeDropdownChange = (e) => {
      setAgeRange(e.target.value);
    }



    return {
        location,
        ageRange,
        problem,
        filteredResults,
        handleLocationDropdownChange,
        handleAgeRangeDropdownChange,
        handleProblemDropdownChange,
    };
}