import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PLoginpage from './PLoginpage'
import DashboardHome from './DashboardHome'
import ProtectRouting from './ProtectRouting'

function MainRoutingPage() {
  const [isAuth,setIsAuth] = useState(false)
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PLoginpage isAuth={setIsAuth} />} />
          <Route path='/dashboard' element={
            <ProtectRouting isAuth={isAuth} >
              <DashboardHome/>
            </ProtectRouting>
          } />
          <Route path='/profile' element={
            <ProtectRouting isAuth={isAuth} >
              <DashboardHome/>
            </ProtectRouting>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MainRoutingPage