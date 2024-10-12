import { motion } from 'framer-motion'
import ShopImg from "../../assets/landing/Shopping Bag.svg";
import UserImg from "../../assets/landing/user.png";
import { MdDarkMode } from 'react-icons/md';


const DashNavbar = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5 , delay:0.5}}
    >
        <div className='flex justify-between items-center pt-2 pb-6 
        max-sm:px-2 max-sm:flex-col-reverse 
        '>
            {/* ACCOUNT section  */}
            <div className='text-2xl flex items-center gap-2 font-bold'>
                <div className='group relative w-14 hover:w-auto h-14 bg-primary mt-8 
                transition-all duration-700 rounded-full cursor-pointer'>
                    <img src={UserImg} alt="" className='w-7 h-7  absolute top-3 left-3.5'/>
                    <h1 className='hidden group-hover:block text-sm font-semibold
                     text-white text-right pr-4 pl-16 leading-[50px]'>حساب کاربری</h1>
                </div>  

                {/* shop basket  */}
                <div className='relative '>
                    <img src={ShopImg} className="mt-8 w-10 h-10 dark:fill-white"/>                                       
                    <div className='absolute w-4 h-4 bg-orange leading-4 text-white
                     text-[10px] text-center rounded-full ml-6 bottom-[1px]'
                    >
                        2
                    </div>   
                </div>

                {/* darkmode button  */}
                <MdDarkMode className='mt-8 w-7 h-7'/>
                
            </div>
        
            {/* Logo section  */}
            <div className='space-x-6'>
            <div className=' bg-gray-600 px-16 py-6 mt-8'></div>             
            </div>
        </div>

    </motion.div>
  )
}

export default DashNavbar
