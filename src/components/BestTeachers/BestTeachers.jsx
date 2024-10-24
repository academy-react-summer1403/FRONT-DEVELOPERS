import React, { useEffect } from 'react'
import BGImg from "../../assets/landing/BG2.svg";
import { motion} from 'framer-motion';
import { SliderRight } from '../../utility/animation';


import SwipeCards from './Swiper';


import AOS from "aos";
import 'aos/dist/aos.css';




const BestTeachers = () => {

   
  useEffect(() => {
    AOS.init(
      
    );
  }, [])
    

  return (
    <div className='flex-1 h-[402px]  w-full'>

        <div className='    mx-auto   h-[402px] relative  max-xl:flex justify-center'>
            {/* <img src={BGImg} alt=""  className=' w-full  h-full mx-auto'/> */}
            <svg className=' w-full  h-full mx-auto w-full' height="402" viewBox="0 0 1440 402" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_109_539)">
            <path d="M-521 0L97.75 22.4909L407.125 33.7364L561.812 39.3591L639.156 42.1705C639.156 42.1705 696 22.4909 716.5 22.4909C737 22.4909 794.406 42.1705 794.406 42.1705L872.312 39.3591L1028.12 33.7364L1339.75 22.4909L1963 0V402L1339.75 379.306L1028.12 367.96L872.312 362.286L794.406 359.45C794.406 359.45 731.5 357.384 715 357.384C698.5 357.384 639.156 359.45 639.156 359.45L561.812 362.286L407.125 367.96L97.75 379.306L-521 402V0Z" className='fill-primary' fill-opacity="0.3"/>
            </g>
            <defs>
            <filter id="filter0_b_109_539" x="-524" y="-3" width="2490" height="408" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.5"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_109_539"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_109_539" result="shape"/>
            </filter>
            </defs>
            </svg>

        <div className='flex  justify-between items-center w-full   absolute top-10'>
              <div className='w-[1500px]  max-xl:flex justify-between max-xl:w-[full] gap-96  h-[400px]  mx-auto relative'>      
                
            {/* Tinder card  */}             
            <div className=' w-[400px] h-[400px] max-sm:h-[250px] max-sm:w-[250px] max-sm:left-5 max-xl:left-[100px] max-md:-left-2  max-2xl:left-[200px]  max-lg:left-[80px] absolute left-[250px] bottom-[50px] '>
              <SwipeCards/>
            </div>                     
               
            {/* text section  */}
          <div data-aos="fade-right" data-aos-offset="200"  data-aos-duration="600"
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
            className=' text-green font-Yekan font-normal text-[25px] max-lg:text-[18px] max-sm:text-[16px]'>
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
