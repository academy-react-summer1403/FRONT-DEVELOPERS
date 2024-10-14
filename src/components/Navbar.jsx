import React, { useState } from 'react'
import { motion } from 'framer-motion'
import FavImg from "../assets/landing/Favorite.svg";
import ShopImg from "../assets/landing/Shopping Bag.svg";
import UserImg from "../assets/landing/user.png";
import Logo from "../assets/landing/logo1.svg";
import ResponsiveMenu from './ResponsiveMenu';
import { MdDarkMode, MdMenu } from 'react-icons/md';
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
      link:"#",
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
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5 , delay:0.5}}
>

<div>
<div className='container flex justify-between items-center py-6 duration-200 '>
 {/* ACCOUNT section  */}
 <div className='text-2xl flex items-center gap-2 font-bold'>
    <NavLink to={"/auth"} className='relative w-[145px] max-md:w-[150px] px-2 gap-1  max-sm:w-[150px] max-lg:w-[150px] max-xl:w-[200px]  h-[45px] bg-[#01CEC9]
     rounded-[26px] hover:shadow-lg  dark:bg-orange  flex items-center justify-center mt-8'>
     <img src={UserImg} alt="" className='w-[25px] h-[25px]  '/>
     
     <h1 className='text-[16px]  font-semibold text-white text-right leading-[24px]  '>حساب کاربری</h1>
  </NavLink>  
  <div className='flex justify-center  flex-row gap-4 ml-4'>
      <img src={ShopImg} alt="" className='mt-8 w-[32px] h-[32px]'/>
      <div className='relative'>
   <img src={FavImg} alt=""  className='mt-8  w-[32px] h-[32px] max-xl:mt-[35px] max-xl:w-[80px]  max-lg:w-[30px] max-2xl:mt-[35px] max-2xl:w-[40px]'/>
    <div className='w-[14px] h-[14px] bg-[#E48900] rounded-full absolute bottom-0 right-11'></div>

      </div>

          {/* darkmode switch */}
          <div className='  relative'>
      
        <div className='mt-[34px] max-lg:mt-[35px]'>
            <DarkMode/>
        </div></div>
  </div>
    
    
 </div>
 {/* menu section  */}
 <div className='hidden lg:block'>
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
 {/* Logo section  */}

   <div className=' w-[135px] h-[50px] mt-8'>
   <img src={Logo} alt="" className='rounded-md'/>
    
   
 </div>

  {/* mobile hamburger section  */}
  <div className='lg:hidden' onClick={()=>setIsOpen(!isOpen)}>
            <MdMenu className='text-4xl '/>
         </div>
 
</div>
</div>

  {/* mobile sidebar section  */}
  <ResponsiveMenu isOpen={isOpen}/>

</motion.div>
  )
}

export default Navbar