import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Component1 from "./Compenent1";
import Component2 from "./Compenent2";

function Routing(){
    return(
        <BrowserRouter>
        <Link to="">Home</Link><br/>
        <Link to="page1">Page1</Link>
        <div>
            <Routes>
                <Route path="/" element={<Component1/>} />
                <Route path="/page1" element={<Component2/>} />
            </Routes>
        </div>
        </BrowserRouter>
    )
}
export default Routing;