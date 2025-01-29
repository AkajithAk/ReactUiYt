import React from 'react'
import UseCustom from './UseCustom'

function MainHookFile(){
    const {state,increment,decrement,reset} = UseCustom(0)
    return(
        <div>
            <h1>{state}</h1>
           <button onClick={increment}>Increment</button>
           <button onClick={decrement}>Decerement</button>
           <button onClick={reset}>Reset</button>
        </div>
    )
}

export default MainHookFile