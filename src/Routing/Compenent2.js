import React from "react";
import { useParams } from "react-router-dom";

function Component2(){
    const param = useParams()
    
    console.log(param)
    return(
        <div>
            Component two {param.id}
        </div>
    )
}
export default Component2;