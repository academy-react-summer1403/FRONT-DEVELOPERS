import { configureStore } from "@reduxjs/toolkit";
import { QuerySlice, searchSlice, TokenSlice } from "./slices/QueryState/QueryRedux";

export const store = configureStore({
  reducer: {
    QueryState: QuerySlice.reducer,
    user: TokenSlice.reducer, 
    searchLanding: searchSlice.reducer,
  },

  
});

