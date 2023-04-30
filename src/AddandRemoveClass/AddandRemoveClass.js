import React from "react";
import './AddandRemoveClass.css';

function AddandRemoveClass(){

    const handleAdd = () =>{
       const element = document.getElementById('first')
       element.classList.add("second_class")
    }
    const handleRemove = () =>{
       const element = document.getElementById('first')
       element.classList.remove("second_class")
    }

    return(
        <div>
            <div id="first" className="first_class">Add and Remove</div>
            <button onClick={handleAdd}>Add Class</button>
            <button onClick={handleRemove}>Remove Class</button>
        </div>
    )
}
export default AddandRemoveClass;