import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import DPageOne from "./DPageOne";
// import DPageTwo from "./DPageTwo";

function LazyLoadingReact(){

    const DPageOne = lazy(()=>import("./DPageOne"))
    const DPageTwo = lazy(()=>import("./DPageTwo"))
    
    return(
        <div>
            <BrowserRouter>
                <Suspense fallback={<h1>Loading....</h1>}>
                    <Routes>
                        <Route path="/" element={<DPageOne/>} />
                        <Route path="/one" element={<DPageTwo/>} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    )
}
export default LazyLoadingReact;