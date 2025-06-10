import { addDoc, collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { database } from './FirebaseConfig'

function NewForm(props) {
    const [inputData,setInputData] = useState({name:"",age:""})
    const [data,setData] = useState([])

    const userRef = collection(database,props.user.uid)

    useEffect(()=>{
        const getData = async()=>{
            const userData = await getDocs(userRef)
            const value = userData.docs.map(val=>({id:val.id,...val.data()}))
            setData(value)
        }
        getData()
    },[inputData])


    console.log(inputData,"datadatadata")

    const handleSubmit = async(e) =>{
        e.preventDefault()
        setInputData({name:e.target.name.value,age:e.target.age.value})
        const data = {
            name:e.target.name.value,
            age:e.target.age.value,
            created: new Date()
        }
        try {
            await addDoc(userRef,data)
            console.log("testData")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input name='name'/>
            <input name='age'/>
            <button>Add</button>
        </form>
        {
            data.map(value=><div>
                <h1>{value.name}</h1>
                <h1>{value.age}</h1>
            </div>)
        }
    </div>
  )
}

export default NewForm