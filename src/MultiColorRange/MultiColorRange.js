import React, { useState } from "react";
import './MultiColorRange.css';

function MultiColorRange(){
    const [val,setVal] =useState(0)

    const handleChnage =(e)=>{
        console.log(e.target.value)
        setVal(e.target.value)

    }

    return(
        <div className="App">
            <h1>{val}</h1><br/>
            <input className={val==10?"one":val==20?"two":"three"}  value={val} type="range" min='0' max='30' step='10' onChange={(e)=>handleChnage(e)} />
        </div>
    )
}
export default MultiColorRange;