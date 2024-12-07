import { createSlice } from "@reduxjs/toolkit";


 const lessRangeSlice = createSlice({
    initialState:{
        
        less:0,

    },
    name:"less",
    reducers:{
    
        LessRange:(state , action) =>{
            state.less = action.payload
        },
    },

})



export const {  LessRange} = lessRangeSlice.actions;
export default lessRangeSlice.reducer
