import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, provider } from './FirebaseConfig'
import NewForm from './NewForm'

function ReactFirebase() {
  const [user,setUser] = useState()

  useEffect(()=>{
    onAuthStateChanged(auth,(userData)=>{
      setUser(userData)
    })
  },[])
  const handleSignin =async()=>{
    try {
      const result = await signInWithPopup(auth,provider)
      console.log(result,"result")
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout =async()=>{
    await signOut(auth)
  }
  
  console.log(user,"userData")
  return (
    <div>
      {user?
       <div>
         <h1>{user.displayName}</h1>
         <button onClick={handleLogout}>Logout</button>
         <NewForm user={user}/>
       </div>
       :
        <button onClick={handleSignin}>GoogleSignin</button>
      }
    </div>
  )
}

export default ReactFirebase