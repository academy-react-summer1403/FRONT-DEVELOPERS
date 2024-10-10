import { createSlice } from "@reduxjs/toolkit";


export const QuerySlice = createSlice({
    initialState:{
        data:{}
    },
    name:"query",
    reducers:{
        ChangeRegType: (state, action) => {
            state.data = action.payload
          },
    }
})