import React, { useEffect, useState } from "react";
import { auth } from "./FirebaseConfigFile";
function ExistingUSer(){
    const [user,setUser] = useState('')

    useEffect(()=>{
        auth.onAuthStateChanged((data) =>{
            console.log(data,"useData")
            setUser(data)
        })
    },[])

    return(
        <div>
            <h1>{user.email}</h1>
        </div>
    )
}

export default ExistingUSer;