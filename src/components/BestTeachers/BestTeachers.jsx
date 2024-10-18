import React from 'react'
import BGImg from "../../assets/landing/BG Half.png";
import { motion} from 'framer-motion';
import { SliderRight } from '../../utility/animation';


import SwipeCards from './Swiper';







const BestTeachers = () => {

   
    

  return (
    <div className='flex-1 h-[402px]  xl:px-0 xl:container w-full'>

        <div className='    mx-auto   h-[402px] relative  max-xl:flex justify-center'>
            <img src={BGImg} alt=""  className=' w-full  h-full mx-auto'/>

        <div className='flex  justify-between items-center w-full   absolute top-10'>
              <div className='w-[1500px]  max-xl:flex justify-between max-xl:w-[full] gap-96  h-[400px]  mx-auto relative'>      
                
            {/* Tinder card  */}             
            <div className=' w-[400px] h-[400px] max-sm:h-[250px] max-sm:w-[250px] max-sm:left-5 max-xl:left-[100px] max-md:-left-2  max-2xl:left-[200px]  max-lg:left-[80px] absolute left-[250px] bottom-[50px] '>
              <SwipeCards/>
            </div>                     
               
            {/* text section  */}
          <div
            className="max-xl:right-10  max-md:right-3    absolute right-48 top-20
            "
          >        

          <div className='flex flex-row-reverse max-sm:flex-col max-sm:items-end items-center gap-2 max-sm:gap-1 mb-3'>
            <motion.h1
             variants={SliderRight(0.4)}
             initial="hidden"
             animate="visible"
              className=" text-[#000000] max-lg:text-[20px] max-sm:text-[18px] text-right font-Yekan font-bold text-[40px] "
            >
              برترین اساتید  
        
            </motion.h1>

            <motion.h1
            variants={SliderRight(0.4)}
            initial="hidden"
            animate="visible"
            className=' text-[#006865] font-Yekan font-normal text-[25px] max-lg:text-[18px] max-sm:text-[16px]'>
              !!رو همینجا پیدا می کنید
            </motion.h1>
          </div>

            <motion.p
               variants={SliderRight(0.6)}
               initial="hidden"
               animate="visible"
               className='text-center max-sm:text-[16px] max-sm:w-[200px] text-[#777777] text-[20px] font-normal font-Yekan max-lg:text-[18px] max-lg:w-[280px] max-lg:text-right max-lg:ml-[100px] '
            >
          برجسته ترین اساتید بزرگترین مجموعه برنامه نویسی<p className=''> ! استان مازندران رو بهتر بشناسیم </p>
            </motion.p>
            </div>
            </div>
            </div>
          </div>  
          
        </div>    


    
  )
}

export default BestTeachers
