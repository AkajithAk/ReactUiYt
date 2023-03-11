import React, { useState } from "react";
import data from './data.json';
import './CustomPagination.css'

function CustomPagination(){
    const [current,setCurrent] = useState(1)
    const [count,setCount] = useState(5)
    const [activePg,setActivePg] =useState(1)

    const last = current * count;// 2*5 =10
    const first = last - count; // 10 - 5 = 5

    const values = data.slice(first,last)


    const buttonCount = []
    for(let i=1;i<=Math.ceil(data.length/count);i++){
        buttonCount.push(i)
    }

    const handleClick =(i)=>{
        console.log(i)
        setCurrent(i)
        setActivePg(i)
    }

    return(
        <div>
            {
                values.map((val,i)=>
                    <div key={i}>{val.name}</div>
                )
            }

            {
                buttonCount.map((btn)=>
                    <button key={btn} className={btn==activePg?"active":""} onClick={()=>handleClick(btn)}>{btn}</button>  
                )
            }
        </div>
    )
}
export default CustomPagination;