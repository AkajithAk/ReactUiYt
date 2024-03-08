import React from 'react'
import { Provider } from 'react-redux'
import MainComponent from './MainComponent'
import store from './Store'
import SeconComponet from './SeconComponet'

function ProviderData() {
  return (
    <div>
        <Provider store={store}>
            <MainComponent/>
            <SeconComponet/>
        </Provider>
    </div>
  )
}

export default ProviderData