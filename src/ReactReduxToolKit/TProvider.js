import React from 'react'
import { Provider } from 'react-redux'
import TAction from './TAction'
import store from './TStore'

function TProvider() {
  return (
    <Provider store={store}>
        <TAction/>
    </Provider>
  )
}

export default TProvider