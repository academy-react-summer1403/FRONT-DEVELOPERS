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
import { useUserProfile } from '../core/services/query/DashboardQuery';
import { useSelector } from 'react-redux';
import ScrollNav from './ScrollNav';
// import { useSelector } from 'react-redux';



const Navbar = () => {
    
 const { t,i18n  } = useTranslation();
 const isEnglish = i18n.language === "en";

 const NavbarMenu =[
  {
      id:1,
      title:`${t('call')}`,
      link:"/call",
  },
  {
      id:2,
      title:`${t('news')}`,
      link:"/article-news",
  },
  {
      id:3,
      title:`${t('teacher')}`,
      link:"/teacher",
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


    const userImageProfile = useUserProfile()
    console.log(userImageProfile.data)

    
 const user = useSelector((state) => state.TokenSlice)

 console.log("user" , user)
  
  const token = user?.token 
  console.log(token)   


//   const currentRoutes = user.token==null ? PublicRoutes : PrivateRoutes


  return (
    <motion.div  className='z-[200] max-md:px-3 '
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5 , delay:0.5}}
>   
    <ScrollNav color="orange"/>
    <div>
        <div className='container flex justify-between items-center py-6 dark:bg-gray-900 duration-200
            max-lg:py-1 max-lg:mb-10  max-xl:px-0
        '>
    
                {/* ACCOUNT section  */}
                <div className=' z-[99999] text-2xl flex items-center gap-2 font-bold'>
                    <NavLink  to={user.token==null ? "/auth" : "/Dashboard" }  className='group relative w-36 max-md:w-[150px]  max-sm:w-[150px] z-[9999] 
                            max-lg:w-[150px] max-xl:w-[200px] h-12 bg-primary
                            mt-6 rounded-3xl hover:shadow-lg  dark:bg-orange 
                            dark:hover:shadow-slate-700 dark:hover:shadow-md z-50
                            transition-shadow'>
                        <div >  
                            <img src={userImageProfile ? userImageProfile.data?.currentPictureAddress : UserImg} alt="" className='w-[40px] h-[40px] rounded-full absolute top-[4px] left-2  border-[2px]   '/>
                            
                            {user.token==null ? <h1 className='text-sm  font-semibold text-white text-right leading-9 mr-3 py-1 '>{t("person")} </h1> :
                                                        <h1 className='text-sm  font-semibold text-white text-right leading-9 mr-3 py-1 '>{t(userImageProfile.data?.fName)} {t(userImageProfile.data?.lName)}</h1>
}
                        </div> 
                        
                
                    </NavLink>
                    {/* shop&favorit  */}
                    <div className='flex justify-center flex-row gap-4 pr-9 mx-4 max-lg:gap-1 max-lg:ml-0 '>                    
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
                    <ul className={`flex items-center gap-4 max-lg:gap-1 max-lg:pr-0 mx-auto ${isEnglish ? 'flex-row-reverse' : 'flex-row'}`}>
                        {
                            NavbarMenu.map((item)=>(
                                <li key={item.id}>
                                    <NavLink to={item.link}
                                        className={({isActive})=>`${isActive ? "text-orange" :" dark:text-white max-lg:text-white"}
                                        inline-block justify-center text-[#555555]
                                        text-[17px]  font-medium max-xl:text-base max-xl:text-right whitespace-nowrap  py-1 px-2 xl:px-3
                                        hover:text-secondary  transition-all duration-300 max-sm:text-[10px] max-lg:text-sm   max-lg:mt-0
                                        mt-8   dark:hover:text-orange`}
                                    >{item.title}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            {/* Logo section  */}
            <div className=' w-[285px]  mb-3 h-[50px] flex flex-row-reverse' >
                {/* <img src={Logo} alt="" className='rounded-md'/> */}
                <Logo />
            </div>
            
            
        </div>
    </div>

</motion.div>
  )
}

export default Navbar