import React from "react";
import './Child.css';

function ChildComponent(props){
    console.log(props)
    return(
        <>
            <div className="modal">
                <button onClick={()=>props.close(false)}>x</button>
            </div>
        </>
    )
}
export default ChildComponent;