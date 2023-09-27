import React from "react";
import { useLocation } from "react-router-dom";


function Details(){
    const location = useLocation()
    console.log(location,"got data")
    
    return(
        <div>
            <h1>{location.state.title}</h1>
            <p>{location.state.desc}</p>
        </div>
    )
}
export default Details;