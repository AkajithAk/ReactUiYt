import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import { database } from './FirebaseConfig'

function NewForm(props) {
    console.log(props.user.uid,"props")
    const userRef = collection(database,props.user.uid)

    const handleSubmit = async(e) =>{
        e.preventDefault()
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
    </div>
  )
}

export default NewForm