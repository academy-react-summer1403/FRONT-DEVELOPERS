

import React, { useEffect, useState } from 'react'
import  light from "../assets/darkmode/icons8-moon-80(1).png"
import night from "../assets/darkmode/icons8-sun-64(1).png"

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
    <div onClick={()=>setTheme(theme === "light" ? "dark" : "light")}
    className='cursor-pointer  ml-[90%] max-lg:ml-[70%] dark:bg-orange max-md:ml-[60%] max-sm:ml-[40%] rounded-full  flex justify-center items-center z-50  w-[55px] h-[55px]  border bg-[#01CEC9]  fixed bottom-8'>
    <div >
        <img src={night}
        
        className={` w-[40px] h-[40px] transition-all duration-200   
         ${theme === "dark" ? "flex" : "hidden"}    `}    />  
 
    </div>
    <div >
    <img src={light}
  
        className={`w-[40px] h-[40px]  transition-all duration-200  
        ${theme === "dark" ? "hidden" : "flex"} `} />
    </div>
    </div>
  )
}

export default DarkMode
