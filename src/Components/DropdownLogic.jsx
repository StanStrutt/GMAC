import { useState } from "react";



export default function Dropdownlogic() {


    const [location, setLocation] = useState("");

    const [age, setAge] = useState("");

    const [ageRange, setAgeRange] = useState("");


    const handleLocationDropdownChange = (e) => {
        setLocation(e.target.value);
    };

    const handleAgeDropdownChange = (e) => {
        setAge(e.target.value);
        setAgeRange("");
    };

    const handleAgeRangeDropdownChange = (e) => {
        setAgeRange(e.target.value);
    };



    return {
        location,
        ageRange,
        age,
        handleLocationDropdownChange,
        handleAgeRangeDropdownChange,
        handleAgeDropdownChange,
    };
}