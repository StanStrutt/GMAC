import { useState, useEffect } from "react";



export default function InputTimer({allInputsCompleted}) {



const [shouldRender, setShouldRender] = useState(false);

useEffect(() => {
    let timeout;
    if (allInputsCompleted) {
      timeout = setTimeout(() => {
        setShouldRender(true);
      }, 2000);
    } else {
      setShouldRender(false);
      clearTimeout(timeout);
    }

    return () => clearTimeout(timeout);
  }, [allInputsCompleted]);
}