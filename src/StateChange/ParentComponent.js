import React, { useState } from "react";
import ChildComponents from "./ChildComponent";

function ParentComponent(){
    const [show,setShow] = useState(false)

    return(
        <div>
            <ChildComponents value={show} handleChange={setShow} /> 
            {show?'Parent Component':''}
        </div>
    )
}
export default ParentComponent;