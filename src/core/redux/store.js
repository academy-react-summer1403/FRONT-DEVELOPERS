import { configureStore } from "@reduxjs/toolkit";
import { QuerySlice } from "./slices/QueryState/QueryRedux";

export const store = configureStore({
  reducer: {
    QueryState: QuerySlice.reducer,

  },

  
});
