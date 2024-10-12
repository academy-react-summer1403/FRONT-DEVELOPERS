/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode:"class",

  darkMode:"class",


  theme: {
    extend: {
      colors:{
        primary:"#01CEC9",
        secondary:"#E48900",
        purple:"#A259FF",
        orange:"#D47300",
        green:"#008D8A",
        light:"#CB6D00",

      },
      container:{
        center:true,
        padding:{
          DEFUALT:"1rem",
          sm:"5rem",
          lg:"4rem",
          xl:"1rem",
          "2xl":"8rem",
        }
      },
      
      
    },

    fontFamily:{
      Yekan:['Yekan','sans-serif']
    }
  },
  plugins: [],
}