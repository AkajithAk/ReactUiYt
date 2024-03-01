import React, { useState } from 'react'

function SingleStateMultiInput() {
    const [state,setState] = useState({
        fname:'Test',
        lname:'data'
    })
    console.log(state)
  return (
    <div>
        <input value={state.fname} placeholder='First name' onChange={(e)=>setState({...state,fname:e.target.value})} />
        <input value={state.lname} placeholder='Last name' onChange={(e)=>setState({...state,lname:e.target.value})} />
    </div>
  )
}

export default SingleStateMultiInput