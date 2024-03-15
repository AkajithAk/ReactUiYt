import React, { useState } from 'react'
import './ResponsivPopup.css'
import SimplePopup from './SimplePopup'

function ResponsivPopup() {
    const[show,setShow] = useState(false)
    
  return (
    <div className='mainContainer'>
        <h1>Simple Popup</h1>
        <button onClick={()=>setShow(true)}>Show</button>
        {
            show?
            <SimplePopup close={setShow}/>:''
        }
    </div>
  )
}

export default ResponsivPopup