import React, { useState } from 'react'
import MyContext from './Context'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'

function WithoutProps() {
  const [state,setState] = useState('State value from Context')
  return (
    <div>
      <MyContext.Provider value={state}>
        <ChildOne/>
        <ChildTwo/>
      </MyContext.Provider>
    </div>
  )
}

export default WithoutProps