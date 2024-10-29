import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

// image:
import newsImage from '../../assets/articles and news/Rectangle 95.svg'
import { IoEyeOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";

import AOS from "aos";
import 'aos/dist/aos.css';
import DateApi from '../DateApi'
import { useTranslation } from 'react-i18next'

const ArticleNewsCard = ({title,miniDescribe  , updateDate,currentView , id,currentImageAddressTumb}) => {


    const {t}=useTranslation()


useEffect(() => {
    AOS.init();
  }, [])


  return (
    <NavLink to={"/article-detail/" + id } >
    <motion.div
        initial={{opacity:0 ,y:-200}}
        animate={{opacity:1 ,y:0}}
        transition={{type:"spring" , stiffness:100 , delay:0.3}}
    >
        <div data-aos="fade-up" data-aos-duration="800" className='group bg-white/80 dark:bg-gray-600/90 dark:hover:bg-secondary transition duration-500 relative grid-col-1 rounded-t-full shadow px-6
            max-sm:w-[70%] max-sm:mx-auto  max-sm:px-2 h-[400px]  mt-[30px]  min-w-[300px]   
        '>
            <img src={currentImageAddressTumb} className='mx-auto w-[250px] h-[170px] shadow-sm border  max-sm:w-[70%] rounded-xl'/>

            <div className='py-4  h-[200px] relative'>
                <h3 className='text-lg font-medium text-darkgreen dark:text-white text-right line-clamp-2 '>{title}</h3>

                <p className='text-xs text-gray-400 dark:text-gray-300 text-right my-4 line-clamp-2 h-[50px] '>{miniDescribe}
                </p>

                <div className='absolute w-full bg-red-400 top-[130px] flex flex-row-reverse my-4'>
                    <div className='flex flex-row gap-1 text-xs text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-200 absolute right-4'>
                        {currentView}بازدید
                        <IoEyeOutline className='text-primary w-4 h-4 mt-[2px]'/>
                    </div>
                    <div className='absolute left-0 flex flex-row-reverse gap-1 text-[10px] text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-200'>
                        <DateApi dateapi={updateDate}/>
                        <CiCalendar className='text-primary w-4 h-4 '/>
                    </div>
                </div>

                <div className='flex justify-center pt-2 gap-1 text-xs font-medium w-full
                text-orange border-t-[1px] absolute top-[170px]'> 
                    <IoIosArrowBack  className=' w-4 h-4 mt-[1px]'/>{t("readmore")}
                    
                </div>
            </div>   

        </div>
    </motion.div>
    </NavLink>
  )
}

export default ArticleNewsCard