import { configureStore } from "@reduxjs/toolkit";
import countReducer from './TReducer'

const store = configureStore({
    reducer:{
        counter:countReducer
    }
})

export default store