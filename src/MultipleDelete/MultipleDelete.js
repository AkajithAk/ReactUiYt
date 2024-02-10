import React, { useEffect, useState } from 'react'
import { database } from './MultttipleDeleteConfig'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'

function MultttipleDelete() {
    const [value,setValue] = useState([])
    const [checked,setChecked] = useState([])

    const getData = async()=> {
        const valueDb = collection(database,'category')
        const data = await getDocs(valueDb) 
        setValue(data.docs.map(doc=>({...doc.data(),id:doc.id})))
    }
    useEffect(()=>{
        getData()
    },[])

    const handleClick =(id)=>{
        const index = checked.indexOf(id)

        if(index == -1){
            setChecked(data=>[...data,id])
        }else{
            const newVal = [...checked]
            newVal.splice(id,1)
            setChecked(newVal)
        }
    }
    const handleDelete =()=>{
        try{
            checked.forEach(async list=>{
                const deleteref = doc(database,"category",list)
                await deleteDoc(deleteref)
                const getChecked = document.querySelectorAll('input[type="checkbox"]')
                getChecked.forEach(unCheck=>unCheck.checked = false)
                getData()
            })
        }catch(e){
            console.log("error",e)
        }
    } 
    
  return (
    <div>
        {
            value.map((res,i)=><div key={i}>
                <input type='checkbox' onClick={()=>handleClick(res.id)} />
                <span>{res.language}</span>
            </div>)
        }
        {
            checked.length>0?<button onClick={handleDelete}>Delete</button>:''
        }
    </div>
  )
}

export default MultttipleDelete