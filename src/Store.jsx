import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slice";

const store=configureStore({
    reducer:counterSlice.reducer
})
export default store;