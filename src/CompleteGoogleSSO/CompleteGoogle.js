import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import HomePage from './HomePage'

function CompleteGoogle() {
    // routing -c
    // firebase to react connetion
    // google authentoication
    // maintain user data after login till logout
    // logout
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/home' element={<HomePage/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default CompleteGoogle