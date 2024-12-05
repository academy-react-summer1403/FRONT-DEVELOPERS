import { configureStore } from "@reduxjs/toolkit";
import QuerySlice from "./slices/QueryState/QueryRedux" 
import TokenSlice from "./slices/QueryState/TokenSlice" 
import userSlice from "./slices/QueryState/UserSlice"
import LocationSlice from "./slices/QueryState/LocationSlice"
import RangeSlice from "./slices/QueryState/RangeSlice"
import lessRangeSlice from "./slices/QueryState/LessRangeSlice"
import TranslateSlice from "./slices/SpeechSlices/TranslateSlice";
import ThemeSlice from "./slices/SpeechSlices/Theme"
import selectedOptionReducer  from "./slices/FeacherFavorite/fav1"





export const store = configureStore({
  reducer: {
    QuerySlice : QuerySlice,
     TokenSlice : TokenSlice, 
     UserSlice : userSlice,
     LocationSlice : LocationSlice,
    RangeSlice : RangeSlice,
    lessRangeSlice : lessRangeSlice,
    TranslateSlice:TranslateSlice,
    ThemeSlice:ThemeSlice,
    selectedOption: selectedOptionReducer,
    selectedOption1: selectedOptionReducer,
    selectedOption2: selectedOptionReducer,


  },

  
});

