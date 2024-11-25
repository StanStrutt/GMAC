import { useState , useEffect} from "react";
import resources from "../resources.json"
import { Card } from "react-bootstrap";


export default function Dropdownlogic() {


    const [location, setLocation] = useState("");

    const [problem, setProblem] = useState("");

    const [ageRange, setAgeRange] = useState("");

    const [allInputsCompleted, setallInputsCompleted] = useState(false)

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

    const [filteredResults, setFilteredResults] = useState([])

    const filterResources = () => {
        const filtered = resources.filter((resource) => {
  
            const problemMatch = problem === "" || resource.categories.includes(problem);
  
            const locationMatch = location === "" || resource.appliesTo.areas.includes(location)
  
            const ageMatch = ageRange === "" ||
            (resource.appliesTo.minAge === null || ageRange >= resource.appliesTo.minAge) &&
            (resource.appliesTo.maxAge === null || ageRange <= resource.appliesTo.maxAge);
            return problemMatch && locationMatch && ageMatch;
        });
        setFilteredResults(filtered)
    };

    return {
        location,
        ageRange,
        problem,
        allInputsCompleted,
        filteredResults,
        setallInputsCompleted,
        handleLocationDropdownChange,
        handleAgeRangeDropdownChange,
        handleProblemDropdownChange,
        filterResources,
    };
}