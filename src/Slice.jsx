import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'Sclaculator',
    initialState: 5,
    reducers:{
        square:state=>{
            return state=state**2;    
        },
        cube:state=>{
            return state=state**3;
    }
  }
})
export default counterSlice;
export const{square,cube}=counterSlice.actions
