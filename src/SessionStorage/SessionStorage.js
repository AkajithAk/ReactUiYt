import React, { useEffect, useState } from "react";

function SessionStorage(){
    const [value,setValue] =useState('')

    useEffect(()=>{

        setValue(sessionStorage.getItem('data'))

    })

    const handleClick =()=>{
        sessionStorage.setItem('data','demo value')
    }
    const handleRemove =()=>{
        sessionStorage.removeItem('data')
    }

    
    return(
        <div className="App">
            <h1>{value}</h1>
            <button onClick={handleClick}>set value</button>
            <button onClick={handleRemove}>Remove value</button>
        </div>
    )
}
export default SessionStorage;