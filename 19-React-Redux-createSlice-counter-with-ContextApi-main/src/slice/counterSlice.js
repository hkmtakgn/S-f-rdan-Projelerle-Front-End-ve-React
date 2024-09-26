import { createSlice } from "@reduxjs/toolkit";

const initialState = {value:100};

const counterSlice = createSlice({
name:"counter",
initialState:initialState,
reducers:{
    increment (state) {
        state.value ++ ;
    },
    decrement (state) {
        state.value -- ;
    },
    reset () {
        return initialState
    }
}
});

export const {increment , decrement , reset} = counterSlice.actions
export default counterSlice.reducer
