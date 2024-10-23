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
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
        purple:'rgb(var(--color-purple))',
        orange:'rgb(var(--color-orange))',
        green:'rgb(var(--color-green))',
        light:'rgb(var(--color-light))',
        yellow:'rgb(var(--color-yellow))',
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