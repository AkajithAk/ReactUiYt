import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageOne from "./One";
import PageTwo from "./Two";

function PassIdWithValue(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageOne/>} />
                <Route path="/about" element={<PageTwo/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default PassIdWithValue;