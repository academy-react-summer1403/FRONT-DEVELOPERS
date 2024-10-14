import { configureStore } from "@reduxjs/toolkit";
import QuerySlice from "./slices/QueryState/QueryRedux" 
import TokenSlice from "./slices/QueryState/TokenSlice" 
import searchSlice from "./slices/QueryState/SearchSlice" 


export const store = configureStore({
  reducer: {
    QuerySlice : QuerySlice,
     TokenSlice : TokenSlice, 
     SearchSlice : searchSlice,
  },

  
});

