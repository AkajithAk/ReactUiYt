import React from 'react'
import { useNavigate } from 'react-router-dom'

function Pageone() {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Pageone</h1>
        <button onClick={()=>navigate('/page2/new')}>Next screen</button>
    </div>
  )
}

export default Pageone