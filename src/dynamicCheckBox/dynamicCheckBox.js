import React, { useEffect, useState } from "react";

function DynamicCheckBox(){
    // http://localhost:4000/fruit
    const [api,setApi] =useState([])
    const [selected,setSelected] =useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/fruit").then(data=>data.json()).then(val=>setApi(val))
    },[])

    const handleChnage =(e,index)=>{
        console.log(e.target.value)
        const activeData = document.getElementById(index).checked
        console.log(activeData,"activeData")
        if(activeData == true){
            setSelected (oldData=>[...oldData,e.target.value])
        }else{
            setSelected(selected.filter(values=>values !==e.target.value))
        }
        
    }
    

    return (
        <div>
            {
                api.map((fruit,i)=>
                <div key={i}>
                    <input id={i} type="checkbox" value={fruit.name} onChange={(e)=>handleChnage(e,i)} /><span>{fruit.name}</span>
                </div>
                )
            }
            <br/>
            {
                selected.map((a,i)=><div key={i}>{a}</div>)
            }
        </div>
    );
}
export default DynamicCheckBox;