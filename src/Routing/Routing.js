import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Component1 from "./Compenent1";
import Component2 from "./Compenent2";

function Routing(){

    const id = 3;
    const value = `/page/${id}`

    
    return(
        <BrowserRouter>
        <Link to="">Page one</Link><br/>
        <Link to={value}>Page two</Link>
        <div>
            <Routes>
                <Route path="/" element={<Component1/>} />
                <Route path="/page/:id" element={<Component2/>} />
            </Routes>
        </div>
        </BrowserRouter>
    )
}
export default Routing;
