import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    initialState:{
        data:{}
    },
    name:"userImg",
    reducers:{

        userImg : (state , action) =>{
            console.log(action)
            state.data = action.payload
        }
      
    },


})


export const {userImg} = userSlice.actions;
export default userSlice.reducer
