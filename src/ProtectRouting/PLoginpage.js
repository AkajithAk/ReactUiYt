import React from 'react'
import { useNavigate } from 'react-router-dom'

function PLoginpage({isAuth}) {
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const pass = e.target.pass.value

        if(email && pass){
            isAuth(true)
            navigate('/dashboard')
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input name="email" placeholder='Email' /><br/>
            <input name="pass" placeholder='Password' /><br/><br/>
            <button>Login</button>
        </form>
    </div>
  )
}

export default PLoginpage