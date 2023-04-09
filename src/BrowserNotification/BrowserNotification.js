import React, { useEffect, useState } from "react";

function BrowserNotification(){
    const [msg,setMsg] = useState(false)
    const [count,setCount] = useState(1)
    
    useEffect( ()=>{
            document.title = msg?`(${count}) New Message`:"WhatsApp"
    })

    const handleClick = () =>{
        setMsg(!msg)
        if(msg){
            setCount(count + 1)
        }
    }
    return(
        <>
            <button onClick={handleClick}>Message</button>
        </>
    )
}
export default BrowserNotification;