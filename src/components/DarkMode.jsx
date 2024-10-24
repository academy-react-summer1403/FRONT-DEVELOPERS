

import React, { useEffect, useState } from 'react'
import  light from "../assets/darkmode/icons8-moon-80(1).png"
import first from "../assets/darkmode/first.svg"
import second from "../assets/darkmode/second.svg"


const DarkMode = () => {

    const [themeImage , setthemeImage] = useState(light)
    const [theme , setTheme] = useState(
        localStorage.getItem("theme")?localStorage.getItem
        ("theme"):"maintheme"
    )
    console.log(first)
    const element = document.documentElement;


    useEffect(()=>{
        if(theme === "dark"){
            element.classList.add("dark")
            localStorage.setItem("theme","dark")
        }
        else if(theme === "maintheme"){
            element.classList.remove("dark")
            element.classList.remove("secondTheme")
            element.classList.add("maintheme")
            localStorage.setItem("theme","maintheme")
        }
        else if(theme === "secondTheme"){
            element.classList.remove("maintheme")
            element.classList.remove("dark")
            element.classList.add("secondTheme")
            localStorage.setItem("theme","secondTheme")
        }

    },[theme])
  

  return (
    <div 
    className='group cursor-pointer ml-[90%] dark:bg-orange rounded-full flex items-center 
        z-[9999] w-[55px] h-[55px] bg-green fixed bottom-8 right-14 hover:w-80 transition duration-500
        max-lg:top-6 max-lg:left-6  
        max-md:bottom-8
        max-sm:bottom-8     '>
    <div >
        <img src={themeImage}
        
        className= "absolute top-2 right-2 w-[40px] h-[40px] transition-all duration-200  "/>  
       
 
    </div>
    <div className='flex gap-3 ml-5'>
        <div className='' onClick={()=>setTheme("dark")} >
        <img src={light} 
            onClick={()=>setthemeImage(light)}
            className="w-[40px] h-[40px]  transition-all duration-200 hidden group-hover:block" 
            
        />
        </div>
        <div className='' onClick={()=>setTheme("maintheme")} >
        <img src={first} 
            onClick={()=>setthemeImage(first)}
            className="w-[40px] h-[40px]  transition-all duration-200 hidden group-hover:block" 
            
        />
        </div>
        <div className='' onClick={()=>setTheme("secondTheme")} >
        <img src={second} 
            onClick={()=>setthemeImage(second)}
            className="w-[40px] h-[40px]  transition-all duration-200 hidden group-hover:block" 
            
        />
        </div>
        {/* <div className='' onClick={()=>setTheme(theme === "light" ? "dark" : "light")} >
        <img src={first} 
            onClick={()=>setthemeImage(first)}
            className="w-[40px] h-[40px]  transition-all duration-200  group-hover:block" 
            
        />
        </div> */}
    </div>
    
    </div>
  )
}

export default DarkMode
