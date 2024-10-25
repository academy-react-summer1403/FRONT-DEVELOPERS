import { createSlice } from "@reduxjs/toolkit";


 const QuerySlice = createSlice({
    initialState:{
        
        search:{}

    },
    name:"query",
    reducers:{

        // search:(state , action)=>{
        //     state.search = action.payload
        // },
    
        Add:(state , action) =>{
            state.search = action.payload
        },
        // onSearchChange :(state,action)=>{
        //     state.search = action.payload
        // }
      
    },


})



export const {search , Add} = QuerySlice.actions;
export default QuerySlice.reducer


















