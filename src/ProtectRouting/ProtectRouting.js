import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectRouting({isAuth,children}) {
  return isAuth ? children : <Navigate to='/'/>
}

export default ProtectRouting