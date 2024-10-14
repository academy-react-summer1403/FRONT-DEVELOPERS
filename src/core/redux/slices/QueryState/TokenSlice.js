import { createSlice } from "@reduxjs/toolkit";

const TokenSlice = createSlice({
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


export const {handleToken} = TokenSlice.actions;
export default TokenSlice.reducer
