import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { database } from './FirebaseConfig'

function NewForm(props) {
    const [inputData,setInputData] = useState({name:"",age:""})
    const [editId,setEditId] = useState(null)
    const [data,setData] = useState([])

    const userRef = collection(database,props.user.uid)

    const getData = async()=>{
        const que = query(userRef,orderBy('created','asc'))
        const userData = await getDocs(que)
        const value = userData.docs.map(val=>({id:val.id,...val.data()}))
        setData(value)
    }
    useEffect(()=>{
        getData()
    },[inputData])


    console.log(inputData,"datadatadata")

    const handleSubmit = async(e) =>{
        e.preventDefault()

        const data = {
            name:e.target.name.value,
            age:e.target.age.value,
            created: new Date()
        }
        if(editId){
            const editRef = doc(database,props.user.uid,editId)
            try {
                await updateDoc(editRef,data)
            } catch (error) {
                console.log(error)
            }
        }else{
            try {
                await addDoc(userRef,data)
                console.log("testData")
            } catch (error) {
                console.log(error)
            }
        }
        setInputData({name:"",age:""})
        setEditId(null)
    }

    const handleEdit =(val)=>{
        setEditId(val.id)
        setInputData({name:val.name,age:val.age})
    }

    const handleDelete =async(id)=>{
        const deleteRef = doc(database,props.user.uid,id)
        try {
            await deleteDoc(deleteRef)
            getData()
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input name='name' value={inputData.name} onChange={(e)=>setInputData({...inputData,name:e.target.value})} />
            <input name='age' value={inputData.age} onChange={(e)=>setInputData({...inputData,age:e.target.value})}/>
            <button>{editId?"Update":"Add"}</button>
        </form>
        {
            data.map(value=><div>
                <h1>{value.name}</h1>
                <h1>{value.age}</h1>
                <button onClick={()=>handleEdit(value)}>Edit</button>
                <button onClick={()=>handleDelete(value.id)}>Delete</button>
            </div>)
        }
    </div>
  )
}

export default NewForm