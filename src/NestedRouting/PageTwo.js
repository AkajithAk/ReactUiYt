import React from 'react'
import { useLocation } from 'react-router-dom'

function PageTwo() {
    const location = useLocation()
    console.log(location.pathname)
  return (
    <div>PageTwo
        <h1>{location.pathname}</h1>
    </div>
  )
}

export default PageTwo