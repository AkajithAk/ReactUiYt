import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

function ReactHookForm() {
    const {
        register,
        handleSubmit,
        formState:{errors},
        reset,
        setValue
    } = useForm()

    const submit = (val) =>{
        console.log(val,"val")
        reset()
    }
    const data = {
        fName:"test",
        lName:'data'
    }

    useEffect(()=>{
        // reset(data)
        setValue('fName',data.fName)
        setValue('lName',data.lName)
    },[])
   
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <input {...register("fName",{required:"Enter First Name"})} />
                {errors.fName && <p>{errors.fName.message}</p>}
            </div>
            <div>
                <input {...register("lName",{required:"Enter Last Name"})}  />
                {errors.lName && <p>{errors.lName.message}</p>}
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ReactHookForm