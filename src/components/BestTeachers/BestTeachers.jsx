import React from 'react'
import BGImg from "../../assets/landing/BG Half.png";
import { motion} from 'framer-motion';
import { SliderRight } from '../../utility/animation';


import SwipeCards from './Swiper';







const BestTeachers = () => {

   
    

  return (
    <div className='flex-1 h-[500px]  '>

        <div className='flex-1   mx-auto  rounded-xl h-[400px] relative '>
            <img src={BGImg} alt=""  className=' w-full  h-full mx-auto'/>

        <div className='flex-1 justify-center items-center w-full absolute top-10'>
              <div className='w-[1500px] h-[400px]  mx-auto relative'>      
                
            {/* Tinder card  */}

        
               
                        <div className=' w-[400px] h-[400px]  absolute left-[200px] bottom-[50px] max-xl:left-[100px] max-md:left-[5px] max-sm:-left-[30px]'>

                  
                        <SwipeCards/>

                        </div>
                      
             


         
   


            {/* text section  */}
          <div
            className="flex flex-col  w-[700px] h-[120px] justify-center py-14 
          md:pr-16 xl:pr-40 md:py-0 absolute top-[140px] right-[100px]  max-xl:right-[400px] max-xl:w-[600px]
          max-lg:right-[600px] max-md:right-[800px] max-sm:right-[900px] "
          >
        
            <motion.h1
             variants={SliderRight(0.4)}
             initial="hidden"
             animate="visible"
              className="text-4xl font-semibold 
              !leading-tight
              text-right absolute -top-[20px] right-[180px] max-xl:-top-[80px] max-lg:-top-[70px] max-lg:text-5xl max-sm:right-[60px]"
            >
              برترین اساتید  
        
            </motion.h1>

            <motion.span 
            variants={SliderRight(0.4)}
            initial="hidden"
            animate="visible"
            className=' font-sans text-[30px] text-green absolute -top-[20px] left-[95px] max-xl:left-[220px] max-xl:-top-[10px] max-sm:left-[280px]
            max-sm:text-4xl'>رو همینجا پیدا کنید</motion.span>

            <motion.p
               variants={SliderRight(0.6)}
               initial="hidden"
               animate="visible"
               className=' text-center indent-[130px] font-sans text-gray-600 pt-[50px] leading-[10px] max-xl:indent-[150px] max-xl:text-right max-md:text-center
               max-sm:text-sm max-sm:ml-[100px]'
            >
            ! برجسته ترین اساتید بزرگترین مجموعه برنامه نویسی<p className='indent-[130px] pt-[25px]'> استان مازندران رو بهتر بشناسیم </p>
            </motion.p>
            </div>
            </div>
            </div>
          </div>  
          
        </div>    


    
  )
}

export default BestTeachers
