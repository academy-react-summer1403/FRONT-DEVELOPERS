import { createSlice } from "@reduxjs/toolkit";


export const QuerySlice = createSlice({
    initialState:{
        data:{}   /* fill with query ??? */
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


export const TokenSlice = createSlice({
    initialState:{
        token:localStorage.getItem("token")
    },
    name:"user",
    reducers:{

        handleToken : (state , action) =>{
            console.log(action)
            state.token = action.payload
        }
      
    },


})



export const searchSlice = createSlice({
    initialState:{
        data:{}
    },
    name:"landingSearch",
    reducers:{

        search : (state , action) =>{
            console.log(action)
            state.data = action.payload
        }
      
    },


})