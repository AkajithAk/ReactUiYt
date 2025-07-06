import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { database, storage } from './FirebaseConfig'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'

function NewForm(props) {
    const [inputData,setInputData] = useState({name:"",age:"",img:""})
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

    const handleSubmit = async(e) =>{
        e.preventDefault()

        const img = e.target.image.files[0]

        let imgUrl

        if(img){
            const id = crypto.randomUUID() 
            const imgRef = ref(storage,`${props.user.uid}/${id}`)
            await uploadBytes(imgRef,img)
            imgUrl = await getDownloadURL(imgRef)

            // delete previous image
            if(inputData.img){
                const deleteRef = ref(storage,inputData.img)
                await deleteObject(deleteRef)
            }
        }else{
            imgUrl = inputData.img
        }

        const data = {
            name:e.target.name.value,
            age:e.target.age.value,
            img: imgUrl,
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
        e.target.image.value = ''
    }

    const handleEdit =(val)=>{
        console.log(val,"val")
        setEditId(val.id)
        setInputData({name:val.name,age:val.age,img:val.img})
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
            <input name='image' type='file' />
            <button>{editId?"Update":"Add"}</button>
        </form>
        {
            data.map(value=><div>
                <img src={value.img} height="50"/>
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