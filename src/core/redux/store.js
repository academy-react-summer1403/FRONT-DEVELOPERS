import { configureStore } from "@reduxjs/toolkit";
import QuerySlice from "./slices/QueryState/QueryRedux" 
import TokenSlice from "./slices/QueryState/TokenSlice" 
import userSlice from "./slices/QueryState/UserSlice"
import LocationSlice from "./slices/QueryState/LocationSlice"



export const store = configureStore({
  reducer: {
    QuerySlice : QuerySlice,
     TokenSlice : TokenSlice, 
     UserSlice : userSlice,
     LocationSlice : LocationSlice,
   
  },

  
});

