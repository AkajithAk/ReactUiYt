import React, { useState } from "react";

function ReactForm(){
    const [first,setFirst]=useState('')
    const [last,setLast]=useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target.fname.value)
        console.log(e.target.lname.value)
        setFirst(e.target.fname.value)
        setLast(e.target.lname.value)
        e.target.fname.value =""
        e.target.lname.value =""
    }    
    return(
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input name="fname" placeholder="First Name" /><br/>
                <input name="lname" placeholder="Last Name" /><br/>
                <button>Submit</button>
            </form>

            <h3>{first}</h3>
            <h3>{last}</h3>
        </div>
    );
}
export default ReactForm;