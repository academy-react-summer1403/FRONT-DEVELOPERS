import { motion } from 'framer-motion'
import UserImg from "../../assets/landing/user.png";
import home from '../../assets/dashboard/home.svg'

import logo from '../../assets/landing/logo1.svg'
import { NavLink } from 'react-router-dom';


const DashNavbar = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5 , delay:0.5}}
    >
        <div className='flex justify-between items-center pb-2 
        max-sm:px-2 max-sm:flex-col-reverse 
        '>
            {/* ACCOUNT section  */}
            <div className='text-2xl flex items-center gap-2 font-bold '>
                <div className='group relative w-14 hover:w-40 h-14 bg-primary 
                transition-all duration-900 rounded-full cursor-pointer'>
                    <img src={UserImg} alt="" className='w-7 h-7 transition-all absolute top-3 left-3.5'/>
                    <h1 className='hidden group-hover:block text-sm font-semibold transition-all
                     text-white text-right pr-4 pl-16 leading-[50px]'>حساب کاربری</h1>
                </div>               
                <NavLink to={"/"}>
                    <img src={home}/>
                </NavLink> 
            </div>
        
            {/* Logo section  */}
            <div className='space-x-6'>
            <img src={logo} className='w-[190px]'/>           
            </div>
        </div>

    </motion.div>
  )
}

export default DashNavbar
