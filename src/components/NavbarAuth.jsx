import React from 'react'
import { motion } from 'framer-motion'
import UserImg from "../assets/landing/user.png";
import DarkMode from './DarkMode';


const NavbarAuth = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5 , delay:0.5}}
>

<div>
<div className='container flex justify-between items-center py-6 dark:bg-gray-900  duration-200 '>
 {/* ACCOUNT section  */}
 <div className='text-2xl flex items-center gap-2 font-bold'>
    <div className='relative w-36 max-md:w-[150px]  max-sm:w-[150px] max-lg:w-[150px] max-xl:w-[200px]  h-10 bg-primary
     mt-0 rounded-3xl hover:shadow-lg hover:shadow-orange dark:bg-orange  dark:hover:shadow-lg dark:hover:shadow-orange
    transition-shadow'>
     <img src={UserImg} alt="" className='w-7 h-7  absolute top-1.5 left-4'/>
     <h1 className='text-sm  font-semibold text-white text-right leading-loose px-2 py-1 '>حساب کاربری</h1>
  </div>  
  <div className='flex justify-center flex-row gap-4 ml-4'>
      
          {/* darkmode switch */}
        <div className='mt-[0px] max-lg:mt-[35px]'>
            <DarkMode/>
        </div>
  </div>
    
    
 </div>

 {/* Logo section  */}
 <div className='hidden lg:block space-x-6'>
   <div className=' py-6 mt-0'>
   {/* <img src={Logo} alt="" className='rounded-full shadow-xl shadow-gray-600'/> */}
    </div> 
   
 </div>


 
</div>
</div>

 

</motion.div>
  )
}

export default NavbarAuth
