import { useState, useEffect } from "react";
import InfoCards from "./Infocards";
import "./Infocards.css"



export default function InputTimer(props) {


  const [isDelayed, setIsDelayed] = useState(false);

useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDelayed(props.input);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, )

  return(
    <div>
      {isDelayed &&(
      <div className="Info-cards">
        <InfoCards input={props.input} problem={props.problem}/>
        <InfoCards input={props.input} location={props.location}/>
        <InfoCards input={props.input} ageRange={props.ageRange}/>
      </div>
      )}
    </div>
  )
}

