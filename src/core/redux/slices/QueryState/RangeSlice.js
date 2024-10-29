import { createSlice } from "@reduxjs/toolkit";


 const RangeSlice = createSlice({
    initialState:{
        
        Range:{}

    },
    name:"uprange",
    reducers:{
    
        addRange:(state , action) =>{
            state.Range = action.payload
        },
    },

})



export const { addRange } = RangeSlice.actions;
export default RangeSlice.reducer
