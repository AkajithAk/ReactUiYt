import { createSlice } from "@reduxjs/toolkit";

const countReducer = createSlice({
    name:'counter',
    initialState:0,
    reducers:{
        increment: (state) =>state + 2,
        decrement: (state) =>state - 2,
    }
})

export const {increment,decrement} = countReducer.actions
export default countReducer.reducer