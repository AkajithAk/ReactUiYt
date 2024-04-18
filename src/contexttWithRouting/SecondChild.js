import React, { useContext } from 'react'
import MyContext from './Creator'

function SecondChild() {
    const getData = useContext(MyContext)

  return (
    <div>{getData} - SecondChild</div>
  )
}

export default SecondChild