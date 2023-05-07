import React, { memo, useEffect } from "react";

function Child(props){
    
    useEffect(()=>{
        console.log("Child Render")
    })
    return(
        <>
            <h1>{props.number}</h1>
        </>
    )
}
export default memo(Child);