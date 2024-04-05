import React, { useState } from 'react'

function Customhook(data) {
    const [value,setValue] = useState(data)

    const handleChange = (e) =>{
        setValue(e.target.value)
    }

    return {
        value,onChange:handleChange
    }
}

export default Customhook