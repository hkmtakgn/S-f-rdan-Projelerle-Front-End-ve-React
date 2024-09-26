import { configureStore } from "@reduxjs/toolkit";
import { fakeStoreApiSlice } from "./fakestoreapi/fakeStoreApi";


const store = configureStore ({
    reducer:{
        [fakeStoreApiSlice.reducerPath]:fakeStoreApiSlice.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(fakeStoreApiSlice.middleware)
})

export default store 
