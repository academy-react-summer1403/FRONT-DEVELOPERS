import { createSlice } from "@reduxjs/toolkit";


 const LocationSlice = createSlice({
    initialState:{
        
        location:{}

    },
    name:"Location",
    reducers:{
    
        Location:(state , action) =>{
            state.location = action.payload
        },

    },

})



export const { Location} = LocationSlice.actions;
export default LocationSlice.reducer


