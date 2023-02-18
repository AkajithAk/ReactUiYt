import React, { useState } from "react";
import { useEffect } from "react";

function ColorGenerator() {
    const [colors,setColor]=useState('')
    useEffect(()=>{
        const val = '#' +
        Math.floor(
            Math.random()*(256*256*256)
            ).toString(16)

        setColor(val)
    },[])
    return(
        <div>
            <div 
            style={{background:`${colors}`,
            height:"80px",width:"100px",
            margin:"50px"}}></div>
            <h1>{colors}</h1>
        </div>
    )
}
export default ColorGenerator;