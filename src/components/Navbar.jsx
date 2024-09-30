import React from 'react'
import { motion } from 'framer-motion'
import FavImg from "../assets/landing/Favorite.svg";
import ShopImg from "../assets/landing/Shopping Bag.svg";
import UserImg from "../assets/landing/user.png";
import Logo from "../assets/landing/logo1.svg";




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
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5 , delay:0.5}}
>

<div>
<div className='container flex justify-between items-center py-6 '>
 {/* ACCOUNT section  */}
 <div className='text-2xl flex items-center gap-2 font-bold'>
    <div className='relative w-36 h-10 bg-primary mt-8 rounded-3xl'>
     <img src={UserImg} alt="" className='w-7 h-7  absolute top-1.5 left-4'/>
     <h1 className='text-sm font-semibold text-white text-right leading-loose px-2 py-1'>حساب کاربری</h1>
  </div>  
  <div className='flex justify-center flex-row gap-4 ml-4'>
      <img src={ShopImg} alt="" className='mt-8'/>
      <div className='relative'>
   <img src={FavImg} alt=""  className='mt-8 '/>
    <div className='w-4 h-4 bg-orange rounded-full absolute bottom-0 right-10'></div>

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
                        className='flex justify-center text-gray-500
                         text-sm xl:text-base py-1 px-2 xl:px-3
                         hover:text-secondary transition-all duration-300 
                         font-medium  mt-8'
                    >{item.title}</a>
                </li>
            ))
        }
    </ul>
 </div>
 {/* Logo section  */}
 <div className='hidden lg:block space-x-6'>
   <div className=' py-6 mt-0'>
   <img src={Logo} alt="" className='rounded-full shadow-xl shadow-gray-600'/>
    </div> 
   
 </div>
 
</div>
</div>

</motion.div>
  )
}

export default Navbar
