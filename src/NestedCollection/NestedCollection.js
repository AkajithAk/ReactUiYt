import React, { useEffect, useState } from "react";
import { database } from "./firebase";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";

function NestedCollection(){
    const [data,setData] = useState([])

    const handleAdd = (e)=>{
        e.preventDefault()

        const val = doc(database,"blog",'post')
        const collectinVal = collection(val,"feedback")
        addDoc(collectinVal,{title:e.target.title.value})
        alert("added...")

    }

    useEffect(()=>{
        const getValue =async()=>{

            const val = doc(database,"blog",'post')
            const collectinVal = collection(val,"feedback")
    
            const getValue = await getDocs(collectinVal)
            setData(getValue.docs.map((doc)=>({...doc.data(),id:doc.id})))
            
        }
    
        getValue()
    },[])
console.log(data)    

    return(
        <div>
            <form onSubmit={(e)=>handleAdd(e)}>
                <input name='title' /><br/>
                <button>Add</button>
            </form>

            {
                data.map((val)=><div>{val.title}</div>)
            }
        </div>
    )
}
export default NestedCollection;