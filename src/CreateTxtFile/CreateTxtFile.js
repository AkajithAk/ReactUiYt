import React, { useState } from 'react'

function CreateTxtFile() {
   const [val,setVal] = useState('')

   const handleDownload = () =>{
    const blob = new Blob([val],{type:'text/plain'})
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = "test.txt"
    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
    URL.revokeObjectURL(url)
   }
  return (
    <div>
        <textarea value={val} onChange={(e)=>setVal(e.target.value)} /><br/>
        <button onClick={handleDownload}>Download</button>
    </div>
  )
}

export default CreateTxtFile