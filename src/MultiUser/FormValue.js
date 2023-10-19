import React, { useEffect, useState } from "react";
import './commonStyle.css';
import { useNavigate } from "react-router-dom";

function FormValue(){
    const [signin,setSignIn] = useState(false)
    const [data,setData] = useState([])
    const [email,setEmail] = useState('')


    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem('user')))
    },[])

    const navigate = useNavigate()

    const handleSubmit =(e,type)=>{
        e.preventDefault()
        console.log(e.target.email.value)
        if(e.target.email.value && e.target.password.value){
            if(!localStorage.getItem('user')){
                localStorage.setItem('user',JSON.stringify([{email:e.target.email.value,passeord:e.target.password.value}]))
                navigate('/home',{state:e.target.email.value })
            }else{
                for(let val of data){
                    setEmail(val.email)
                    if(val.email.includes(e.target.email.value)){
                        if(type == 'signUp'){
                        alert("User already Exist")
                        setSignIn(true)
                        }else{
                            if(val.passeord == e.target.password.value){
                                navigate('/home',{state:e.target.email.value })
                            }else{
                                alert('Password does not match')
                            }
                        }
                        return true;
                    }
                }
                if(type =='signUp' && email !==e.target.email.value){
                    localStorage.setItem('user',JSON.stringify([...data,{email:e.target.email.value,passeord:e.target.password.value}]))
                    navigate('/home',{state:e.target.email.value })
                }else{
                    alert('User does not exist')
                    setSignIn(false)
                }
            }
        }
    }
    return(
        <div className="mainBox">
            <div className="tabs">
                <h1 className={!signin?'activeBtn':'nonActive'} onClick={()=>setSignIn(false)}>SignUp</h1>
                <h1 className={signin?'activeBtn':'nonActive'} onClick={()=>setSignIn(true)}>SignIn</h1>
            </div>
            <form onSubmit={(e)=>handleSubmit(e,signin?'signIn':'signUp')}>
                <input placeholder="Email" name="email" /><br/><br/>
                <input placeholder="Password" name="password" /><br/><br/>
                <button>{signin?'SignIn':'SignUp'}</button>
            </form>
        </div>
    )
}
export default FormValue;