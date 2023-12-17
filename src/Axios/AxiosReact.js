import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AxiosReact() {
    const [val,setVal] = useState([])
    // https://api.github.com/users/hacktivist123/repos
    
    useEffect(()=>{
        axios.get('https://api.github.com/users/hacktivist123/repos').then((value)=>{
            console.log(value)
            setVal(value.data)
        })
    },[])

  return (
    <div>
        {
            val.map((res)=><div>{res.archive_url}</div>)
        }
    </div>
  )
}

export default AxiosReact