import React from 'react'

function FormToSheet() {

  const handleSubmit = (e)=>{
    e.preventDefault()
    const url = "hosted sheet url"
    fetch(url,{
      method:"POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:(`Name=${e.target.name.value}&Email=${e.target.email.value}`)
    }).then(res=>res.text()).then(data=>{
      alert(data)
    }).catch(error=>console.log(error))
  }


  return (
    <div>
        <h1>React to Sheet</h1>
        <form onSubmit={handleSubmit}>
          <input name='name' placeholder='Name 1' /> <br/>
          <input name='email' placeholder='Email 1' /> <br/>
          <button>Add</button>
        </form>
    </div>
  )
}

export default FormToSheet


