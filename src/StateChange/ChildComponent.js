import React from "react";

function ChildComponent(props){

    console.log(props)

    return(
        <div>
            Child Component<br/>
            <button onClick={()=>props.handleChange(!props.value)}>Change</button>
        </div>
    )
}
export default ChildComponent;