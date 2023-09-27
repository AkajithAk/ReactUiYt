import React from 'react';
import './DynamicRouting.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageOne from './PageOne';
import Details from './Details';

function DynamicRouting(){

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PageOne/>} />
                    <Route path='/:details' element={<Details/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default DynamicRouting;