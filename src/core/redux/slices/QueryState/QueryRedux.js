import { createSlice } from "@reduxjs/toolkit";


export const QuerySlice = createSlice({
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
        }

    },


})



