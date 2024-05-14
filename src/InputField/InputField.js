import React, { useState } from 'react'
import './InputField.css'

function InputField() {
    const [value,setValue]  = useState('')
    
  return (
    <div>
       <div className='main'>
            <input onChange={(e)=>setValue(e.target.value)} />
            <span className={value.length == 0?"":'fill'}>Email</span>
       </div>
    </div>
  )
}

export default InputField