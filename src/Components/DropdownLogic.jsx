import { useState } from "react";



export default function Dropdownlogic() {


    const [location, setLocation] = useState("");

    const [problem, setProblem] = useState("");

    const [ageRange, setAgeRange] = useState("");


    const handleProblemDropdownChange = (e) => {
        setProblem(e.target.value);
    };

    const handleLocationDropdownChange = (e) => {
        setLocation(e.target.value);
    };

    const handleAgeRangeDropdownChange = (e) => {
        setAgeRange(e.target.value);
    };



    return {
        location,
        ageRange,
        problem,
        handleLocationDropdownChange,
        handleAgeRangeDropdownChange,
        handleProblemDropdownChange,
    };
}