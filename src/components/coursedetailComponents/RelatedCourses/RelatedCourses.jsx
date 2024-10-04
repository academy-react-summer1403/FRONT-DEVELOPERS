import { div, image, title } from 'framer-motion/client'
import React from 'react'

const RelatedCourses = ({title,image}) => {

  

  return (
   

    

          <>
            <div
                
                  style={{boxShadow:" 0px 1px 1px 0 rgba(0, 0, 0, 0.25)"}}
                  
                  className={` h-[112px] max-lg:h-[90px]  cursor-pointer   max-sm:w-[46%] max-md:justify-center      max-md:w-[48%] max-md:ml-1  dark:bg-slate-800  bg-[#F8F8F8] rounded-[10px] flex   justify-end p-[15px] w-full`}
                >
                  <div>
                    <h3 className=" text-[#005653] max-xl:text-[13px] max-xl:w-40  max-2xl:text-[15px] max-md:line-clamp-none max-md:-mt-[2px] max-md:text-[13px]
                    font-Yekan font-normal text-[17px] dark:text-orange/70  max-sm:w-[80%] max-sm:ml-[10%] max-sm:line-clamp-2 max-lg:w-[100px]  max-lg:text-[15px] max-lg:line-clamp-1 max-lg:mt-2 text-right mr-[15px] w-[198px] ">
                      {title}
                    </h3>
                    
                  </div>

                  <img style={{boxShadow:" 0px 1px 2px 0 rgba(0, 0, 0, 0.25)"}} className='w-[126px] max-sm:w-[70px] h-[84px] max-lg:w-[100px] max-lg:h-[64px] rounded-[10px]' src={image} alt="" />
                  
                  </div><p className='dark:text-secondary  text-[#01B4AF] flex items-center  max-md:hidden   justify-between font-Yekan font-normal text-[12px] ml-[20px]  mt-[-40px]  text-right  w-[75px] h-[21px] '>
                  <svg width="10" height="10" className=' dark:stroke-orange stroke-[#01B4AF]' viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.875 8.75L1.125 5L4.875 1.25"  stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    مشاهده دوره</p>
                  

                  
               
                
        </>

        
           

       

        

  
  )
}

export default RelatedCourses