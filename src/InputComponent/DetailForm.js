import React, { useState } from 'react'
import InputComponent from './InputComponent';

function DetailForm() {
    const [value,setValue] = useState({
        fName: '',
        lName: ''
    })

    const handleclick = ()=>{
        console.log(value,"values")
    }
    
  return (
    <div>
        <InputComponent name='fName' value={value.fName} placeholder='First name' setValues={setValue}  />
        <InputComponent name='lName' value={value.lName} placeholder='Last name' setValues={setValue}  />
        <button onClick={handleclick}>Submit</button>
    </div>
  )
}

export default DetailForm;