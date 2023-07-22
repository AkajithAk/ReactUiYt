import React, { useState } from "react";
import ChildComponent from "./Child";

function ParentComponent(){
    const [show,setShow] = useState(false)

    console.log(show)
    
    return(
        <>
        <button onClick={()=>setShow(true)}>Show Modal</button>
        {
            show?<ChildComponent close={setShow} />:''
        }
        </>
    )
}
export default ParentComponent;