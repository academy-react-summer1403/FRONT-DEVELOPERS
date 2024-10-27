import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { useCourseId } from '../../../core/services/query/queries';
import { useTranslation } from 'react-i18next';


const Description = ({courseId}) => {

  const [showMore, setShowMore] = useState(true);
  const {t}=useTranslation()

  

 

  const CourseDetail = useCourseId(courseId);
  console.log(CourseDetail.data);


  return (
    <>
     {/* Description section */}
     

     <div className="  max-sm:w-full  mb-[15px]">

      <div className=' relative '>
            <h4 className=" mark max-xl:text-[20px] max-md:mt-5 dark:text-slate-300 ">{t("describe")}</h4>
            <motion.div style={{boxShadow:" 0px 1px 2px 0 rgba(0, 0, 0, 0.25)"}} className="bg-white  dark:bg-slate-700 max-sm:w-full    mt-[15px] rounded-[15px] w-full  p-[36px]    ">
              <div className="overflow-hidden relative ">
                <motion.p 
                 initial={{ x:0,opacity:0,y:-300}}
                 animate={{ x:0,y:0,opacity:1}}
                 transition={{type:"spring" ,duration:3 , delay:0}}

                  className={` text-[#7B7B7B] dark:text-slate-300 dark:bg-slate-700 max-sm:w-full text-[19px] text-right font-Yekan font-normal max-xl:text-[17px] max-lg:text-[15px]  leading-[32px] ${
                    showMore ? "  max-h-[570px] " : "h-[]  "
                  }`}
                >
                  {CourseDetail.data?.describe}
                </motion.p>
              </div>
              <button
                onClick={() => setShowMore(!showMore)}
                className="border-[#01CEC9] max-xl:text-[18px] dark:border-[#E48900]   dark:text-[#fdb359]  border-[1px] text-[#006865] hover:scale-105 ease-in-out duration-150 
leading-[32px] font-normal font-Yekan text-[20px] flex items-center w-[174px] h-[45px] rounded-[45px] mx-auto justify-center gap-2 mt-3 max-lg:text-[16px] max-lg:w-[150px] "
              >
                {showMore ? (
                  <svg width="14" height="8" className='dark:stroke-orange stroke-[#005B58] ' viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.25 0.875L7 7.125L0.75 0.875" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  
                ) : (
                  <svg width="14" height="8" className='dark:stroke-orange stroke-[#005B58]  rotate-180' viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.25 0.875L7 7.125L0.75 0.875" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                )}
                 {t("readmore")}
              </button>
            </motion.div>
          </div></div>
</>
  )
}

export default Description