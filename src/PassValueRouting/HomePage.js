import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage(){

   const navigate =  useNavigate()

   const data = [
    {
        name:"A"
    },
    {
        name:"A"
    },
    {
        name:"A"
    }
   ]


    const handleClick =()=>{
        navigate('/about',{state:data})
    }
    return(
        <div>
            Home PAge

            <button onClick={handleClick}>About</button>
        </div>
    )
}

export default HomePage;