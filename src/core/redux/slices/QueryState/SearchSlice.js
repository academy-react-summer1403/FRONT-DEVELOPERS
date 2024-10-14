import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
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


export const {search} = searchSlice.actions;
export default searchSlice.reducer
