import React from 'react'
import Customhook from './Customhook'

function MainForm() {
    const fname = Customhook('')
    const lname = Customhook('')

    console.log(fname.value,"data_value",lname.value)
    
  return (
    <div>
       <input placeholder='First name' {...fname} />
       <input placeholder='Last name' {...lname} />
    </div>
  )
}

export default MainForm