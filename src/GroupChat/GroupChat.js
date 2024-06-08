import React, { useEffect, useState } from 'react'
import './GroupChat.css'
import { signInWithPopup } from 'firebase/auth'
import { auth, database, provider } from './firebaseAuth'
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, updateDoc } from 'firebase/firestore'

function GroupChat() {
    const [msg,setMsg] = useState('')
    const [show,setShow] = useState(false)
    const [user,setUser] = useState('')
    const [data,setData] = useState([])
    const [update,setUpdate] = useState(false)
    const [id,setId] = useState('')


    const handleSSO = () =>{
        signInWithPopup(auth,provider).then(data=>{
            console.log(data,"userData")
        })
    }
    const ref = collection(database,'message')

    useEffect(()=>{
        auth.onAuthStateChanged(data=>{
            setUser(data?.providerData[0])
            if(data?.providerData[0]){
                setShow(true)
            }
        })
        // const getMessage =async() =>{
        //     const que = query(ref,orderBy('date','asc'))
        //     const msgList =await getDocs(que)
        //     setData(msgList.docs.map(val=>({...val.data(),id:val.id})))
        // }
        // getMessage()
        onSnapshot(query(ref, orderBy('date', 'asc')), (snapshot) => {
            const updatedData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setData(updatedData);
        });
        console.log("first")
    },[])

    const handleSend =async()=>{
        if(update){
            const editRef = doc(database,'message',id)
            await updateDoc(editRef,{message:msg})
            setUpdate(false)
            setMsg('')
        }else{
            await addDoc(ref,{name:user.displayName,uid:user.uid,message:msg,date:new Date()})
            setMsg('')
        }
    }
    const handleUpdate =async(edit,val)=>{
        console.log(val)
        if(edit == 'Y'){
            setUpdate(true)
            setMsg(val.message)
            setId(val.id)
        }
    }
    const handleDelete =async(del,id)=>{
        if(del== 'Y'){
            setUpdate(false)
            setMsg('')
            const delRef = doc(database,'message',id)
            await deleteDoc(delRef)
        }
    }
    
  return (
    <div>
        {
            show?
        <div>
            <div className='message'>
                {
                    data.map(res=><div  className={user.uid == res.uid?'right':'left'}>
                        <div onClick={()=>handleUpdate(user.uid == res.uid?"Y":"N",res)} onDoubleClick={()=>handleDelete(user.uid == res.uid?"Y":"N",res.id)} className='container'>
                            <label>{res.name}</label><br/><br/>
                            <label>{res.message}</label>
                        </div>
                    </div>)
                }
            </div>
            <div className='sender'>
                <input value={msg} onChange={(e)=>setMsg(e.target.value)} />
                <button onClick={handleSend}>{update?'Update':'Send'}</button>
            </div>
        </div>:
        <button onClick={handleSSO}>Google SignIn</button>
        }
    </div>
  )
}

export default GroupChat