import React, { useState } from "react";
import ComponantA from "./ComponantA";
import ComponantB from "./ComponantB";
import ComponantC from "./ComponantC";

function ChangeComponantSelect(){
    const [selected,setSelected]=useState('First Componant')

    const handleChange=(e)=>{
        console.log(e.target.value)
        setSelected(e.target.value)
    }

    return(
        <div>
            <select className="Space" value={selected} onChange={(e)=>handleChange(e)}>
                <option>First Componant</option>
                <option>Second Componant</option>
                <option>Third Componant</option>
            </select>
            {selected == "First Componant"?<ComponantA/>:"" }
            {selected == "Second Componant"?<ComponantB/>:"" }
            {selected == "Third Componant"?<ComponantC/>:"" }
        </div>
    );
}
export default ChangeComponantSelect;