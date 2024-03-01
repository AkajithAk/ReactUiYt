import React, { useState } from 'react'

function PushValueInExistingArray() {
    const [state,setState] = useState([{name:"database"}])

    const handleAdd = (e)=>{
        e.preventDefault()
        console.log(e.target.fname.value)

        setState([...state,{different:e.target.fname.value}])
    }

    console.log(state)
    
  return (
    <div>
        <form onSubmit={(e)=>handleAdd(e)}>
            <input name='fname' />
            <button>Add</button>
        </form>
    </div>
  )
}

export default PushValueInExistingArray