import React, { useState } from "react";

function ImageBlob(){ 
    const [imgs,setImgs] =useState()
   
    const handleChnage=(e)=>{
        console.log(e.target.files)
        const data = new FileReader()
        data.addEventListener('load',()=>{
            setImgs(data.result)
        })
        data.readAsDataURL(e.target.files[0])
    }

    console.log(imgs)
    
    return(
        <div>
            <input type='file' onChange={handleChnage} /><br/>
            <img src={imgs} height="200px" width="200px" />
        </div>
    )
}
export default ImageBlob;