import { createSlice } from "@reduxjs/toolkit";


 const SwetchSlice = createSlice({
    initialState:{
        
        data:{},

    },
    name:"switch",
    reducers:{
    
        handleSwitch:(state , action) =>{
            state.data = action.payload
        },
    },

})



export const { handleSwitch } = SwetchSlice.actions;
export default SwetchSlice.reducer
