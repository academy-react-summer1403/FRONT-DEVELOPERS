import React from 'react'
import { motion } from 'framer-motion'
import FavImg from "../assets/landing/Favorite.svg";
import ShopImg from "../assets/landing/Shopping Bag.svg";
import UserImg from "../assets/landing/user.png";
import { NavLink } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import Lg from './Translate/TranslateButton';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';



const Navbar = () => {
    
 const { t } = useTranslation();

 const NavbarMenu =[
  {
      id:1,
      title:`${t('call')}`,
      link:"/",
  },
  {
      id:2,
      title:`${t('news')}`,
      link:"/article-news",
  },
  {
      id:3,
      title:`${t('teacher')}`,
      link:"/Dashboard",
  },
  {
      id:4,
      title:`${t('courses')}`,
      link:"/courses",
  },
  {
      id:5,
      title:`${t('home')}`,
      link:"/",
  },
]

  return (
    <motion.div  className='z-[200] max-md:px-3 '
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5 , delay:0.5}}
>

    <div>
        <div className='container flex justify-between items-center py-6 dark:bg-gray-900 duration-200
            max-lg:py-1 max-lg:mb-10  max-xl:px-0
        '>
    
                {/* ACCOUNT section  */}
                <div className=' z-[99999] text-2xl flex items-center gap-2 font-bold'>
                    <div className='group relative w-36 max-md:w-[150px]  max-sm:w-[150px] z-[9999] 
                            max-lg:w-[150px] max-xl:w-[200px] h-12 bg-primary
                            mt-6 rounded-3xl hover:shadow-lg  dark:bg-orange 
                            dark:hover:shadow-slate-700 dark:hover:shadow-md z-50
                            transition-shadow'>
                        <NavLink to={"/auth"} >
                            <img src={UserImg} alt="" className='w-7 h-7  absolute top-1.5 left-4'/>
                            <h1 className='text-sm  font-semibold text-white text-right leading-9 mr-3 py-1 '>{t('person')}</h1>
                        </NavLink> 
                        
                
                    </div>
                    {/* shop&favorit  */}
                    <div className='flex justify-center flex-row gap-4 ml-4 max-lg:gap-1 max-lg:ml-0'>                    
                        <NavLink to={"/basket"} className='relative '>
                            <img src={ShopImg} alt="" className='mt-8 '/>
                            <div className='w-[16px] h-[16px] flex  items-center font-Yekan justify-center bg-orange rounded-full absolute px-[1px] max-lg:bottom-0 bottom-0 right-[-2px] text-[12px] font-normal text-white leading-3'>0</div>
                        </NavLink>
                        <Lg/>
                    </div>                   
                    
               </div>

                {/* menu section  */}
                <div className=' max-lg:absolute max-lg:bg-primary max-lg:h-8 max-lg:z[3000] 
                 max-lg:top-[90px] max-lg:w-[100%] max-lg:left-0 max-lg:grid max-lg:justify-items-center'>
                    <ul className='flex items-center gap-4 max-lg:gap-1 pr-10 max-lg:pr-0 mx-auto'>
                        {
                            NavbarMenu.map((item)=>(
                                <li key={item.id}>
                                    <NavLink to={item.link}
                                        className={({isActive})=>`${isActive ? "lg:text-orange max-lg:text-orange dark:text-orange/80" :" "}
                                        inline-block justify-center text-[#555555]
                                        text-[17px]  font-medium max-xl:text-base max-xl:text-right whitespace-nowrap  py-1 px-2 xl:px-3
                                        hover:text-secondary  transition-all duration-300 max-lg:text-sm max-lg:text-white max-lg:mt-0
                                        mt-8 dark:text-white  dark:hover:text-orange`}
                                    >{item.title}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            {/* Logo section  */}
            <div className=' w-[285px] h-[50px]' >
                {/* <img src={Logo} alt="" className='rounded-md'/> */}
                <Logo />
            </div>
            
            
        </div>
    </div>

</motion.div>
  )
}

export default Navbar