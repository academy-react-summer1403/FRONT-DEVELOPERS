import { configureStore } from '@reduxjs/toolkit'
import { QuerySlice } from './slices/QueryState/Query'

export const store = configureStore({
  reducer: {
    QueryState:QuerySlice.reducer

  },
})