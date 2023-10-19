import React from "react";
import './commonStyle.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormValue from "./FormValue";
import HomeScreen from "./HomeScreen";

 function UserRouting(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormValue/>} />
                <Route path="/home" element={<HomeScreen/>} />
            </Routes>
        </BrowserRouter>
    )
 }
 export default UserRouting;