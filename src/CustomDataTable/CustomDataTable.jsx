import React, { useEffect, useState } from 'react'
import './CustomDataTable.css'

function CustomDataTable() {
    // https://dummyjson.com/users
    const [state,setState] = useState([])
    const [order,setOrder] = useState({name:"asc",age:"asc"})

    useEffect(()=>{
        fetch("https://dummyjson.com/users").then(res=>res.json()).then(data=>setState(data.users))
    },[])

    const handleSort =(type)=>{
        const listDtata = [...state]
        if(type == "name"){
            setOrder({...order,name:order.name == 'asc'?'desc':'asc'})
            listDtata.sort((a,b)=>order.name == 'asc'?a.firstName.localeCompare(b.firstName):b.firstName.localeCompare(a.firstName))
            // listDtata.sort((a,b)=>(order.name == 'asc'?a:b).firstName.localeCompare((order.name == 'asc'?b:a).firstName))
        }else if(type == "age"){
            setOrder({...order,age:order.age == 'asc'?'desc':'asc'})
            listDtata.sort((a,b)=>(order.age == 'asc'?a:b).age-(order.age == 'asc'?b:a).age)
        }
        setState(listDtata)
    }
    
  return (
    <div>
        <div>
            <div className='colRow'>
                <div onClick={()=>handleSort("name")} className='title'>Name</div>
                <div className='title'>Email</div>
                <div  onClick={()=>handleSort("age")} className='title'>Age</div>
            </div>
            {
                state.map(val=><div className='colRow'>
                    <div>{val.firstName}</div>
                    <div>{val.email}</div>
                    <div>{val.age}</div>
                </div>)
            }
        </div>
    </div>
  )
}

export default CustomDataTable