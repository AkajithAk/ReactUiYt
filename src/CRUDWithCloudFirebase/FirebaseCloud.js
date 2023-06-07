import { useEffect, useState } from 'react';
import {db} from './FirebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
function FirebaseCloud(){
    const [users,setusers] = useState([])
    const userCollection = collection(db,'users')

    useEffect(()=>{
        const getUsers = async()=>{
            const data = await getDocs(userCollection)
            setusers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
            console.log(data,"sdsd")
        }
        getUsers()
    },[])
    console.log(users)

    const handleCreate =async(e)=>{
        e.preventDefault()
        await addDoc(userCollection,{name:e.target.name.value,age:e.target.age.value})
    }
    const handleUpdate =async(id,name,age)=>{
        const userDoc = doc(db,'users',id)
        const newFiles = {age:age+1}
        await updateDoc(userDoc,newFiles)
    }
    const handleDelete =async(id)=>{
        const userDoc = doc(db,'users',id)
        await deleteDoc(userDoc)
    }
    return(
        <div>
            <form onSubmit={(e)=>handleCreate(e)}>
            <input type='text' name='name' />
            <input type='text' name='age' />
            <button>Create</button>
            </form>
            {
                users.map((user)=><div>
                    <div>{user.name}</div>
                    <div>{user.age}</div>
                    <button onClick={()=>handleUpdate(user.id,user.name,user.age)}>Update</button>
                    <button onClick={()=>handleDelete(user.id)}>Delete</button>
                </div>)
            }
        </div>
    )
}
export default FirebaseCloud;