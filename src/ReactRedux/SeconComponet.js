import React from 'react'
import { useSelector } from 'react-redux'

function SeconComponet() {
    const countValue = useSelector(state=>state)
  return (
    <div>
        <h1>Second component: {countValue.count}</h1>
    </div>
  )
}

export default SeconComponet