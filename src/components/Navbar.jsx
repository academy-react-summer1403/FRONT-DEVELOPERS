import React, { useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import ScrollNav from './ScrollNav';
import { IoIosLogOut } from 'react-icons/io';
import { HiXCircle } from 'react-icons/hi2';
import { handleToken } from '../core/redux/slices/QueryState/TokenSlice';
import { Tooltip } from 'react-tooltip';
import { userImg } from '../core/redux/slices/QueryState/UserSlice';
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

// logout modal 
const [openModal, setOpenModal] = useState(false)

const handleLogout = (token)=>{
    localStorage.removeItem("token" , token);    
    setRemove(false)
    setOpenModal(false)
}


  return (
    <motion.div  className='z-[200] max-md:px-3'
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
                    <NavLink  to={user.token==null ? "/auth/Game" : "/Dashboard" }  className='group relative w-36 max-md:w-[150px]  max-sm:w-[150px] z-[9999] 
                            max-lg:w-[150px] max-xl:w-[200px] h-12 bg-primary
                            mt-6 rounded-3xl hover:shadow-lg  dark:bg-orange 
                            dark:hover:shadow-slate-700 dark:hover:shadow-md z-50
                            transition-shadow'>
                        <div >  
                            <img src={userImageProfile ? userImageProfile.data?.currentPictureAddress : userImg} alt="" className={`w-[40px]  border-white h-[40px] rounded-full absolute top-[4px] left-2  border `}/>
                            
                            {user.token==null ? <h1 className='text-sm  font-semibold text-white text-right leading-9 mr-3 py-1 '>{t("person")} </h1> :
                            <h1 className='text-sm  font-semibold text-white text-right leading-9 mr-3 py-1 '>{t(userImageProfile.data?.fName)} {t(userImageProfile.data?.lName)}</h1>
}
                        </div> 
                        
                
                    </NavLink>
                    {/* shop&favorit  */}
                    <div className='flex justify-center flex-row gap-4 pr-9 mx-4 max-lg:gap-1 max-lg:ml-0 '>  
                        {/* log out     */}
                        <div>
                            <IoIosLogOut className={`${user.token == null ? "hidden" : "block"} block mt-8 text-gray-400 text-3xl cursor-pointer`}
                            onClick={()=>user.token == null ? "": setOpenModal(true) }/>               
                            <div className={`${openModal ==false ? "hidden": "block"} fixed left-0 top-0 w-screen h-screen bg-black/70 z-[9999]
                                 backdrop-blur-sm transition-all duration-700`}
                            >
                                <div className='bg-white rounded-lg shadow-lg grid gap-3 p-8 mx-auto w-1/3 mt-40'>
                                    <HiXCircle onClick={()=>setOpenModal(false)} 
                                        className=' right-4 top-4 w-5 h-5 cursor-pointer text-secondary opacity-100 justify-self-end '
                                    />                                
                                    <p className='dark:text-gray-950 text-[20px] text-center'> آیا میخواهید از حسابتان خارج شوید ؟  </p>
                                    <NavLink to={"#"} onClick={handleLogout}  className='bg-secondary p-2 rounded-md text-sm w-20 hover:scale-110
                                    transition duration-500 hover:shadow-md mx-auto text-center'>بله</NavLink>
                                </div>
                            </div>
                        </div>

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