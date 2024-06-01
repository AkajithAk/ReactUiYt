import React, { useEffect, useState } from "react";

function DetectInternet(){
    const [isOnline,setIsOnline] = useState(navigator.onLine)

    const handleCheck = () =>{
        setIsOnline(navigator.onLine)
    }

    useEffect(()=>{
        window.addEventListener('online',handleCheck)
        window.addEventListener('offline',handleCheck)
    },[])
    
    return(
        <>
            <div style={{textAlign:'center'}}>
               <h1>{isOnline?'Online':'Offline'}</h1>
            </div>
        </>
    )
}

export default DetectInternet;