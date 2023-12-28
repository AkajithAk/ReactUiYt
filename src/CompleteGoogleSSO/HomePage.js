import { signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from './ConfigFirebase'
import { useNavigate } from 'react-router-dom'

function HomePage() {

    const navigate = useNavigate()

    const handleLogout = ()=>{
        signOut(auth).then(()=>{
            navigate('/')
        }).catch((err)=>{
            console.log(err,'err')
        })
    }

    useEffect(()=>{
        auth.onAuthStateChanged((userData)=>{
            console.log(userData,"useData")
        })
    })
  return (
    <div>HomePage <button onClick={handleLogout}>Logout</button></div>
  )
}

export default HomePage