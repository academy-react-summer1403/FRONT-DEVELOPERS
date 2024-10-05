import React, { useState } from 'react'
import { motion } from 'framer-motion'
import FavImg from "../assets/landing/Favorite.svg";
import ShopImg from "../assets/landing/Shopping Bag.svg";
import UserImg from "../assets/landing/user.png";
// import Logo from "../assets/landing/";
import ResponsiveMenu from './ResponsiveMenu';
import { MdDarkMode, MdMenu } from 'react-icons/md';
import DarkMode from './DarkMode';




export const NavbarMenu =[
  {
      id:1,
      title:"تماس با ما",
      link:"/",
  },
  {
      id:2,
      title:"اخبار و مقالات",
      link:"#",
  },
  {
      id:3,
      title:"اساتید",
      link:"#",
  },
  {
      id:4,
      title:"دوره ها",
      link:"#",
  },
  {
      id:5,
      title:"صفحه نخست",
      link:"#",
  },
]

const Navbar = () => {

    const  [isOpen , setIsOpen] = useState(false)


  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5 , delay:0.5}}
    >

        <div>
            <div className='container flex justify-between items-center py-6 dark:bg-gray-900  duration-200'>
                {/* ACCOUNT section  */}
                <div className='text-2xl flex items-center gap-1 font-bold '>
                    <div className='relative w-36 max-md:w-[150px]  max-sm:w-[150px] max-lg:w-[150px] max-xl:w-[150px] bg-primary
                    mt-8 rounded-3xl hover:shadow-lg hover:shadow-orange dark:bg-orange  dark:hover:shadow-lg dark:hover:shadow-orange
                    transition-shadow px-4 py-[7px]'>
                        <img src={UserImg} alt="" className='w-6 h-6  absolute '/>
                        <h1 className='text-sm  font-semibold text-white text-right leading-loose mr-1 pb-1 '>حساب کاربری</h1>
                    </div> 

                    <div className='flex justify-center flex-row gap-2 ml-3'>
                        <div className='relative '>
                            <img src={ShopImg} alt="" className='mt-9'/>
                            <div className='w-3 h-3 bg-orange rounded-full absolute bottom-[1px] right-0 '></div>
                        </div>
                        <img src={FavImg} alt=""  className='mt-8 
                        max-lg:w-[30px] 
                        max-xl:mt-[35px] max-xl:w-[30px]  
                        max-2xl:mt-[35px] max-2xl:w-[30px]'/>

                        {/* darkmode switch */}
                        <div className='mt-[40px] max-lg:mt-[35px]'>
                           <DarkMode/>
                        </div>
                    </div>                  
                    
                </div>

                {/* menu section  */}
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-4 pr-10 mx-auto'>
                        {
                            NavbarMenu.map((item)=>(
                                <li key={item.id}>
                                    <a href={item.link}
                                        className='inline-block justify-center text-gray-500
                                        text-lg max-xl:text-base max-xl:text-right whitespace-nowrap  py-1 px-2 xl:px-3
                                        hover:text-secondary transition-all duration-300 
                                        font-medium  mt-8 dark:text-white  dark:hover:text-orange'
                                    >{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Logo section  */}
                <div className='hidden lg:block space-x-6'>
                <div className=' py-6 mt-0'>
                {/* <img src={Logo} alt="" className='rounded-full shadow-xl shadow-gray-600'/> */}
                    </div> 
                
                </div>

                {/* mobile hamburger section  */}
                <div className={`${isOpen? "rotate-90" : "rotate-0"} transition duration-500 lg:hidden`} onClick={()=>setIsOpen(!isOpen)}>
                            <MdMenu className='cursor-pointer text-4xl'/>
                </div>
            
            </div>
        </div>

        {/* mobile sidebar section  */}
        <ResponsiveMenu isOpen={isOpen}/>

    </motion.div>
  )
}

export default Navbar
