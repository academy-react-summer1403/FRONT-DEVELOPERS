import { createSlice } from "@reduxjs/toolkit";


 const RangeSlice = createSlice({
    initialState:{
        
        Range:0,
        
    },
    name:"uprange",
    reducers:{
        AddRange:(state , action) =>{
            state.Range = action.payload
        },
    },

})
export const { AddRange } = RangeSlice.actions;
export default RangeSlice.reducer