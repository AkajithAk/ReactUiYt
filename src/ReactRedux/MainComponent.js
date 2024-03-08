import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function MainComponent() {
  const dispatch = useDispatch()
  const countValue = useSelector(state=>state)

  return (
    <div>
      {countValue.count}
      <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
    </div>
  )
}

export default MainComponent