import React from 'react'
import MyContext from './Creator'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FirstChild from './FirstChild'
import SecondChild from './SecondChild'

function ContexttWithRouting() {
  return (
    <MyContext.Provider value="Dummy data">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FirstChild/>} />
          <Route path='/home' element={<SecondChild/>} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  )
}

export default ContexttWithRouting