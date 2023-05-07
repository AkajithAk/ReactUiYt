import React, { useState } from "react";
import Child from "./Child";

function Parent(){
    const [val,setVal] = useState(0)

    const handleClick = () =>{
        setVal(val+1)
    }
    
    return(
        <>
            <h1>Parent - {val}</h1>
            <button onClick={handleClick}>Increament</button>
            <Child number="{val}"/>
        </>
    )
}
export default Parent;