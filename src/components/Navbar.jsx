import React, { useState } from 'react'
import { motion } from 'framer-motion'
import FavImg from "../assets/landing/Favorite.svg";
import ShopImg from "../assets/landing/Shopping Bag.svg";
import UserImg from "../assets/landing/user.png";
import Logo from "../assets/landing/logo1.svg";
import ResponsiveMenu from './ResponsiveMenu';
import menu from "../assets/darkmode/icons8-menu-64.png"
import DarkMode from './DarkMode';
import { NavLink } from 'react-router-dom';




export const NavbarMenu =[
  {
      id:1,
      title:"تماس با ما",
      link:"#",
  },
  {
      id:2,
      title:"اخبار و مقالات",
      link:"/article-news",
  },
  {
      id:3,
      title:"اساتید",
      link:"/Dashboard",
  },
  {
      id:4,
      title:"دوره ها",
      link:"/courses",
  },
  {
      id:5,
      title:"صفحه نخست",
      link:"/",
  },
]

const Navbar = () => {

    const  [isOpen , setIsOpen] = useState(false)


  return (
    <motion.div  className='z-[200] max-md:px-3'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5 , delay:0.5}}
>

<div>
<div className='container flex justify-between items-center py-6 dark:bg-gray-900  duration-200 '>
 {/* ACCOUNT section  */}
 <div className='text-2xl flex items-center gap-2 font-bold'>
    <NavLink to={"/auth"} className='relative w-36 max-md:w-[150px]  max-sm:w-[150px] max-lg:w-[150px] max-xl:w-[200px]  h-10 bg-primary
     mt-8 rounded-3xl hover:shadow-lg hover:shadow-orange dark:bg-orange  dark:hover:shadow-lg dark:hover:shadow-orange
    transition-shadow'>
     <img src={UserImg} alt="" className='w-7 h-7  absolute top-1.5 left-4'/>
     <h1 className='text-sm  font-semibold text-white text-right leading-loose px-2 py-1 '>حساب کاربری</h1>
  </NavLink>  
  <div className='flex justify-center flex-row gap-4 ml-4'>
      <img src={ShopImg} alt="" className='mt-8'/>
      <div className='relative'>
   <img src={FavImg} alt=""  className='mt-8 max-xl:mt-[35px] max-xl:w-[80px]  max-lg:w-[30px] max-2xl:mt-[35px] max-2xl:w-[40px]'/>
    <div className='w-4 h-4 bg-orange rounded-full absolute bottom-0 right-10'></div>

      </div>

       
  </div>
    
    
 </div>
 {/* menu section  */}
 <div className=' max-lg:hidden'>
    <ul className='flex items-center gap-4 pr-10 mx-auto'>
        {
            NavbarMenu.map((item)=>(
                <li key={item.id}>
                    <a  href={item.link}
                        className='inline-block justify-center text-[#555555]
                         text-[17px]  font-medium max-xl:text-base max-xl:text-right whitespace-nowrap  py-1 px-2 xl:px-3
                         hover:text-secondary  transition-all duration-300 
                          mt-8 dark:text-white  dark:hover:text-orange'
                    >{item.title}</a>
                </li>
            ))
        }
    </ul>
 </div>
 
 {/* mobile sidebar section  */}
    <div className=' flex flex-row-reverse gap-2'>
        <img src={menu} className='w-[40px] h-[40px] lg:hidden mt-8  max-md:' onClick={()=>setIsOpen(!isOpen)}/>
        <ResponsiveMenu isOpen={isOpen}/>
            {/* Logo section  */}

        <div className=' w-[135px] h-[50px] mt-10 max-lg:mt-8'>
        <img src={Logo} alt="" className='rounded-md'/>
        </div>
    </div>
 
</div>
</div>

</motion.div>
  )
}

export default Navbar