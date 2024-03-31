import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pageone from './Pageone'
import PageTwo from './PageTwo'

function NestedRouting() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Pageone/>} />
                <Route path='/:page2/:two' element={<PageTwo/>} />
            </Routes>
        </BrowserRouter>
    </div>  
  )
}

export default NestedRouting