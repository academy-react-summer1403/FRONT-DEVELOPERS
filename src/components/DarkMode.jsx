

import React, { useEffect, useState } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const DarkMode = () => {


    const [theme , setTheme] = useState(
        localStorage.getItem("theme")?localStorage.getItem
        ("theme"):"light"
    )

    const element = document.documentElement;


    useEffect(()=>{
        if(theme === "dark"){
            element.classList.add("dark")
            localStorage.setItem("theme","dark")
        }
        else{
            element.classList.remove("dark")
            localStorage.setItem("theme","light")
        }
    },[theme])
  

  return (
    <div className=' border border-red-700 w-10 h-10  fixed bottom-8'>
    <div>
        <MdOutlineDarkMode 
        onClick={()=>setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer drop-shadow-
        [1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-200 hidden dark:flex
         absolute right-0 z-10   
         ${theme === "dark" ? "opacity-0" : "opacity-100"}    `}    />  
 
    </div>
    <div>
    <MdDarkMode 
    onClick={()=>setTheme(theme === "light" ? "dark" : "light")}
        className="w-12 cursor-pointer drop-shadow-
        [1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-200 block dark:hidden
        "    />
    </div>
    </div>
  )
}

export default DarkMode
