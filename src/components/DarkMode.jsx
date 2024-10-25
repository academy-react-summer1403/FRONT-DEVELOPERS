

import React, { useEffect, useState } from 'react'
import  light from "../assets/darkmode/icons8-moon-80(1).png"
import first from "../assets/darkmode/first.svg"
import second from "../assets/darkmode/second.svg"
import third from "../assets/darkmode/third.svg"


const DarkMode = () => {

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
            element.classList.remove("thirdTheme")
            element.classList.add("maintheme")
            localStorage.setItem("theme","maintheme")
        }
        else if(theme === "secondTheme"){
            element.classList.remove("thirdTheme")
            element.classList.remove("maintheme")
            element.classList.remove("dark")
            element.classList.add("secondTheme")
            localStorage.setItem("theme","secondTheme")
        }
        else if(theme === "thirdTheme"){
            element.classList.remove("secondTheme")
            element.classList.remove("maintheme")
            element.classList.remove("dark")
            element.classList.add("thirdTheme")
            localStorage.setItem("theme","thirdTheme")
        }
    },[theme])
  

  return (
    <div 
    className='group cursor-pointer ml-[90%] dark:bg-orange rounded-full flex items-center 
        z-[9999] w-[55px] h-[55px] bg-green fixed bottom-8 right-12 hover:w-80 transition-all duration-700
            '>
    <div >
        <img src={`${theme === "dark" ? light : theme === "maintheme" ? first : second}`}
        
        className= "absolute top-2 right-2 w-[40px] h-[40px] transition-all duration-200  "/>  
       
 
    </div>
    <div className='flex gap-3 ml-5'>
        <div className='' onClick={()=>setTheme(`${theme === 'dark'? "maintheme" : "dark"}`)} >
        <img src={light} 
            className="w-[40px] h-[40px]  transition-all duration-200  group-hover:block" 
            
        />
        </div>
        <div className='' onClick={()=>setTheme("maintheme")} >
        <img src={first} 
            className="w-[40px] h-[40px]  transition-all duration-200  group-hover:block" 
            
        />
        </div>
        <div className='' onClick={()=>setTheme("secondTheme")} >
        <img src={second} 
            className="w-[40px] h-[40px]  transition-all duration-200  group-hover:block" 
            
        />
        </div>
        <div className='' onClick={()=>setTheme("thirdTheme")} >
        <img src={third} 
            className="w-[40px] h-[40px]  transition-all duration-200  group-hover:block"             
        />
        </div>
    </div>
    
    </div>
  )
}

export default DarkMode
