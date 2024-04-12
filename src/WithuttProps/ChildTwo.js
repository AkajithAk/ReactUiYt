import React, { useContext } from 'react'
import MyContext from './Context'

function ChildTwo() {
    const getValue = useContext(MyContext)
    console.log(getValue,"from child two")

  return (
    <div>ChildTwo</div>
  )
}

export default ChildTwo