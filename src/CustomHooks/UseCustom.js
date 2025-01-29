import React, { useState } from 'react'

function UseCustom(initialVal) {
    const [state,setState] = useState(initialVal)

    const increment = ()=>setState(state + 1)
    const decrement = ()=>setState(state - 1)
    const reset = ()=>setState(0)

  return {
    state,increment,decrement,reset
  }
}

export default UseCustom