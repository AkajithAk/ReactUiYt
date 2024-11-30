import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

function DropZone() {
    const [files,setFiles] = useState([])

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
        setFiles(data=>[...data,...acceptedFiles])
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

      console.log(files,"test")

      const handleDelete = (i)=>{
        setFiles(val=>{
            const cpy = [...val]
            cpy.splice(i,1)
            return cpy
        })
      }

  return (
    <div>
        <h1>DropZone</h1>
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
        {
            files.length > 0 && 
            files.map((data,i)=>
            <div>
                <p>{data.name}</p>
                <button onClick={()=>handleDelete(i)}>Delete</button>
            </div>)
        }
    </div>
  )
}

export default DropZone