import { useState , useEffect} from "react";



export default function Dropdownlogic() {


    const [location, setLocation] = useState("");

    const [problem, setProblem] = useState("");

    const [ageRange, setAgeRange] = useState("");

    const [allInputsCompleted, setallInputsCompleted] = useState(false)

    useEffect(() => {
        if (location && problem && ageRange) {
            setallInputsCompleted(true);
        } else {
            setallInputsCompleted(false)
        }
    }, [problem , location , ageRange]);

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
        allInputsCompleted,
        setallInputsCompleted,
        handleLocationDropdownChange,
        handleAgeRangeDropdownChange,
        handleProblemDropdownChange,
    };
}