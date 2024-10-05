import React, { useState } from 'react'
import { motion } from 'framer-motion'
import FavImg from "../assets/landing/Favorite.svg";
import ShopImg from "../assets/landing/Shopping Bag.svg";
import UserImg from "../assets/landing/user.png";
// import Logo from "../assets/landing/";
import ResponsiveMenu from './ResponsiveMenu';
import { MdDarkMode, MdMenu } from 'react-icons/md';
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';




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
<div className='container flex justify-between items-center py-6 dark:bg-gray-900  duration-200 '>
 {/* ACCOUNT section  */}
 <div className='text-2xl flex items-center gap-2 font-bold'>
    <Link to="/auth" className='relative w-36 max-md:w-[150px]  max-sm:w-[150px] max-lg:w-[150px] max-xl:w-[200px]  h-10 bg-primary
     mt-8 rounded-3xl hover:shadow-lg hover:shadow-orange dark:bg-orange  dark:hover:shadow-lg dark:hover:shadow-orange
    transition-shadow'>
     <img src={UserImg} alt="" className='w-7 h-7  absolute top-1.5 left-4'/>
     <h1 className='text-sm  font-semibold text-white text-right leading-loose px-2 py-1 '>حساب کاربری</h1>
  </Link>  
  <div className='flex justify-center flex-row gap-4 ml-4'>
      <img src={ShopImg} alt="" className='mt-8'/>
      <div className='relative'>
   <img src={FavImg} alt=""  className='mt-8 max-xl:mt-[35px] max-xl:w-[80px]  max-lg:w-[30px] max-2xl:mt-[35px] max-2xl:w-[40px]'/>
    <div className='w-4 h-4 bg-orange rounded-full absolute bottom-0 right-10'></div>

      </div>

          {/* darkmode switch */}
        <div className='mt-[34px] max-lg:mt-[35px]'>
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
