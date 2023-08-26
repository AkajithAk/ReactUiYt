import React from "react";
import { useSearchParams } from "react-router-dom";

function PageTwo(){

    const [val] = useSearchParams()

    console.log(val.get('id'))

    return(
        <div>
            Page Two
        </div>
    )
}
export default PageTwo;