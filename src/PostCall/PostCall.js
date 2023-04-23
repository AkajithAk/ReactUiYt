import React from "react";

function PostCall(){

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(e.target.nameVal.value)

    fetch("http://localhost:1000/potApi",{
      method:"POST",
      body:JSON.stringify({name:e.target.nameVal.value})
    }).then(res=>res.json()).then(val=>console.log(val))
  }
  
  
    return(
        <div className="App">
          <form onSubmit={(e)=>handleSubmit(e)}>
            <input name="nameVal" placeholder="Name" />
            <button>Send</button> 
          </form>
        </div>
    )
}

export default PostCall;