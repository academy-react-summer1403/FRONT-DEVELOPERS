// src/core/redux/slices/OptionSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedOption: "",
  selectedOption1: "",
  selectedOption2: "",

};

const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },

    setSelectedOption1: (state, action) => {
      state.selectedOption1 = action.payload;
    },

    setSelectedOption2: (state, action) => {
      state.selectedOption2 = action.payload;
    },
  },
});

export const { setSelectedOption,setSelectedOption1,setSelectedOption2 } = optionSlice.actions;

export default optionSlice.reducer;
