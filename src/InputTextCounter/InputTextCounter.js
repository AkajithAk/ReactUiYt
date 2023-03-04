import React, { useState } from "react";

function InputTextCounter(){
    const [val,setVal]=useState('')
    const [word,setWord]=useState(0)

    const handleChange =(e)=>{
        const data = e.target.value.split(' ')
        console.log(data)

        if(data.length<=5){
            setVal(e.target.value)
            setWord(data.length)
            if(e.target.value == ''){
                setWord(0)
            }
        }else{
            alert("you can type only 5 words")
        }
    }

    return(
        <div>
            <h3>Letters count: {val.length}</h3>
            <h3>Words count: {word}/5</h3>
            <input value={val} onChange={(e)=>handleChange(e)} />
        </div>
    )
}
export default InputTextCounter;