import { createSlice } from "@reduxjs/toolkit";


 const QuerySlice = createSlice({
    initialState:{
        data:{}
    },
    name:"query",
    reducers:{

        search:(state , action)=>{
            state.data = action.payload
        },
    
        Add:(state , action) =>{
            state.data = action.payload
        },

      
    },


})



export const {search , Add} = QuerySlice.actions;
export default QuerySlice.reducer


















