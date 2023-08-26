import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

function PageOne(){

    const navigate = useNavigate()

    const handleClick =()=>{
        navigate({
            pathname:"about",
            search:createSearchParams({
                id:"demo"
            }).toString()
        })
    }
    return(
        <div>
            Page One

            <button onClick={handleClick}>Page Two</button>
        </div>
    )
}
export default PageOne;