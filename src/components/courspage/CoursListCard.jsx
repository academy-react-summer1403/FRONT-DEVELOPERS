import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'


// images: 
import fima from '../../assets/courses/figma.svg'
import starbg from '../../assets/landing/stars.svg'
import star from '../../assets/courses/star2.svg'
import hat from '../../assets/landing/academic hat.svg'
import teacher from '../../assets/courses/Frame(1).svg'
import level from '../../assets/courses/Frame(2).svg'
import buy from '../../assets/landing/Rounded.svg'

import AOS from "aos";
import 'aos/dist/aos.css';


const CoursListCard = ({title , levelName , cost , teacherName , likeCount , courseId,describe}) => {

    useEffect(() => {
        AOS.init();
      }, [])
    

  return (
    // container 
    <div className=' w-[90%] mx-auto grid grid-cols-1 h-[280px]  mt-8 p-2 '>
        {/* map part of card:  */}
        <NavLink  to={"/courses-detail/" + courseId}>
        <div data-aos="fade-up" data-aos-duration="800" className='group h-full relative flex flex-row-reverse rounded-xl p-3 w-full
         gap-[2%] max-md:gap-[9%] max-lg:gap-[10%] bg-white  hover:bg-[#f8f6f6e1] dark:bg-gray-600/70 dark:hover:bg-secondary shadow-lg transition duration-300'
           
        >   
            {/* card image   */}
            <div 
                style={{boxShadow:" 0px 1px 4px 0px rgba(0, 0, 0, 0.25)" }}
                className='relative grid justify-items-center py-8 right-0 w-[60%] 
                rounded-xl bg-gradient-to-tr from-purple to-secondary'
            >
                <img src={fima} className='w-[75px] mt-[20%]'/>
            </div>

            
            {/* carde body  */}
            <div className='relative w-full px-6  grid col-span-3 ' >
                <h3 className='text-right text-lg font-semibold  pt-3'>{title}</h3>

                <div className='grid  grid-cols-2 my-2 px-2 gap-3'>
                    <div className='flex text-gray-400 text-sm dark:text-gray-400 dark:group-hover:text-gray-200'>
                        <img src={hat} className='mr-1 relative top-[2px] w-[17px] h-[17px]'/>{likeCount}
                    </div>
                    <div className='flex flex-row-reverse text-sm text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-200'>
                        <img src={teacher} className='ml-1 relative top-1 w-[18px] h-[18px]'/>{teacherName}
                    </div> </div>

                    <div  className=' my-2 px-2 '>
                    <h3 className='text-right text-[14px] line-clamp-3  text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-200  '>{describe}</h3>

                    </div>


                    <div className='grid  grid-cols-2 my-2 px-2 gap-3'>
                    <div className='flex flex-rows'> 
                         <img src={starbg} className='w-[18px] h-[18px]'/>
                         <img src={starbg} className='w-[18px] h-[18px]'/>
                         <img src={starbg} className='w-[18px] h-[18px]'/>
                         <img src={starbg} className='w-[18px] h-[18px]'/>
                         <img src={star} className='w-[18px] h-[18px]'/>
                    </div>
                   
                    <div className='flex flex-row-reverse text-sm text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-200'>
                        <img src={level} className='ml-1 relative top-1 w-[18px] h-[18px]'/>    {levelName}                    
                    </div>
                    </div>
               
                
                <div className='flex flex-row-reverse py-2 items-center  px-2 border-t-[1.5px]' >
                    
                    <img src={buy} className='w-6 h-6'/>
                    <div className='absolute left-8 flex flex-row text-green text-lg'>
                        <p className='text-[10px] mr-2 relative top-1'>تومان</p>
                       {cost}
                        
                    </div>
                </div>
            </div>
        </div> 
        </NavLink>
    </div>
    
  )
}

export default CoursListCard