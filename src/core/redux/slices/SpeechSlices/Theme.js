

import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  theme: localStorage.getItem("theme" || "maintheme"),
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);

      
      const element = document.documentElement;
      element.classList.remove("dark", "maintheme", "secondTheme", "thirdTheme");
      element.classList.add(action.payload);
    },
    initializeTheme: (state) => {
      const savedTheme = localStorage.getItem("theme") || "maintheme";
      state.theme = savedTheme;

     
      const element = document.documentElement;
      element.classList.remove("dark", "maintheme", "secondTheme", "thirdTheme");
      element.classList.add(savedTheme);
    }
  },
});

export const { setTheme, initializeTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
