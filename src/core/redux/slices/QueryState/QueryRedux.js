import { createSlice } from "@reduxjs/toolkit";


 const QuerySlice = createSlice({
    initialState:{
        
        search:{}

    },
    name:"query",
    reducers:{
    
        Add:(state , action) =>{
            state.search = action.payload
        },

    },

})



export const { Add} = QuerySlice.actions;
export default QuerySlice.reducer


















