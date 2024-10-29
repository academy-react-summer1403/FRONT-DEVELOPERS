import { createSlice } from "@reduxjs/toolkit";


 const lessRangeSlice = createSlice({
    initialState:{
        
        less:{}

    },
    name:"less",
    reducers:{
    
        lessRange:(state , action) =>{
            state.less = action.payload
        },
    },

})



export const {  lessRange} = lessRangeSlice.actions;
export default lessRangeSlice.reducer
