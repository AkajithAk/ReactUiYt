import React, { useContext } from 'react'
import MyContext from './Context'

function ChildOne() {

    const getValue = useContext(MyContext)
    console.log(getValue,"from child one")
    
  return (
    <div>ChildOne</div>
  )
}

export default ChildOne