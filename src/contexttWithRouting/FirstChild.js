import React, { useContext } from 'react'
import MyContext from './Creator'

function FirstChild() {
    const getData = useContext(MyContext)
    console.log(getData)
  return (
    <div>{getData} - One</div>
  )
}

export default FirstChild