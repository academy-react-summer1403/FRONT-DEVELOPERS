import React, { useEffect } from 'react'

// images: 
import fima from '../../assets/courses/figma.svg'
import starbg from '../../assets/landing/stars.svg'
import star from '../../assets/courses/star2.svg'
import hat from '../../assets/landing/academic hat.svg'
import teacher from '../../assets/courses/Frame(1).svg'
import level from '../../assets/courses/Frame(2).svg'
import { MdOutlineAddShoppingCart } from "react-icons/md";

import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import AOS from "aos";
import 'aos/dist/aos.css';
import { ImageErrore } from '../ImageErrore'



const CoursGridCard = ({title , levelName , cost , teacherName , likeCount , courseId , tumbImageAddress}) => {

    useEffect(() => {
        AOS.init();
      }, [])
    

  return (
    // container 
  
    <NavLink to={"/courses-detail/" + courseId} className='grid grid-col-1 h-[320px] mt-20 max-sm:min-w-[310px] 
    mx-[10px] max-md:mx-0 
    '>
        {/* map part of card:  */}
        <motion.div 
            initial={{opacity:0 ,y:200}}
            animate={{opacity:1 , y:0}}
            transition={{type:"spring" , stiffness:50 , delay:0.2}}
        >
            <div 
                data-aos="fade-up" data-aos-duration="800"
            className='group relative rounded-xl max-md:m-4 px-4 bg-white 
            dark:bg-gray-600/70 dark:hover:bg-secondary transition duration-500 '
                style={{boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25)"}
                }
            >   
                {/* card image   */}
                <div 
                    style={{boxShadow:" 0px 1px 4px 0px rgba(0, 0, 0, 0.25)" }}
                    className='relative grid justify-items-center top-[-25px]
                    rounded-xl h-[170px]   w-[100%]'
                >

                    {
                        tumbImageAddress ? 
                        <img src={tumbImageAddress}    className='rounded-xl w-full h-full'/>
                        :

                        <img className=' rounded-xl w-full h-full' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAALVBMVEXz9Pa5vsq2u8j29/jN0dno6u7V2N++ws3w8fTf4efi5OnFydPY2+HJztbR1txPmUB/AAAC0klEQVR4nO3b55aqMBiFYUoioXn/l3ukKSVBJGH4ctb7/JxRVrYbCDVJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArPLQ7g60YnSjwmoqc3eouarOwmsrOT026TXKu4NNyosCioloissSFndn6+VlNgwn6EY4LrKUsCnm7TCaNuiudFqoiIT9Spo9Ak+Hj77GWsKUMSasAi+2lJMwIeE5JPxLtoRGa8+xiU5YqX5urBuf4UlO+Eyn+br2OHaWm9DU2eeoK2tOL1Vuwucs4Is+u1SxCctlwLQ4O0SpCfN6fXpw9thZakK9qjDN1MmlSk24Xkm/jdG9sxWaMG82CXc3ROXe2UpN+PgpYbffbRwtCk3421qqug+7WpSa0Pywp5lmTnuLUhNaZgvHt4yafgx7i1ITbq4sOoeoZm3bWhSbcDHyF8d0YNRiVba0KDdhMj/yTl2Twep3sLQoOOGrnmn4hePEf9mg/acQnDDJK1V013Trh3HMdesGbS1KTpj0FzG0cQ3O0qClReEJd9ka3LYYb0LzdARcRYw3oavB9YoabUJ3g6sWY0241+CyxUgSmtWFqP0GFy3GkVCnhZ7vPdqvAT8txpAw10WazYf4vcFZizEk1P3fPy0eabD7xnC+JT9h12D/j3o8djvWYH83ufu4/IT6PeKhxYMNdqdSUSScGny3eLTBaBLqxaAL/W0ejC3hvMEh4uF8kSTU+xmiT7hp8L9L6NVgBAk9G4wgoWeD4hN6Nyg+oXeD0hPmxw9dYk24vX9IQhLem21AQhKS8H6hE8q+TtPdVvM1hJKaMBwS/iUSnpILSji+FaTCvgk83oer707XmR70uuTdNSXh3bX384hXvH8Yeus+x2ye1gtGxjukSVJdllBGhUn3QKL/wdpWJmQd7em2CLoV9ltiq0XsZia6fITVCCoQAAAAAAAAAAAAAAAAAAAAAAAAAAAAuMU/B0kslFd7c1EAAAAASUVORK5CYII='/>


                    }
                   
                    
                </div>

                {/* carde body  */}
                <div className='relative top-[-10px]' >
                    <h3 className='text-right dark:text-white text-lg font-semibold'>{title}</h3>

                    <div className='grid grid-cols-2 my-2 gap-3'>
                        <div className='flex text-gray-400 dark:text-gray-400 dark:group-hover:text-gray-200 text-sm'>
                            <img src={hat} className='mr-1 relative top-[2px] w-[17px] h-[17px]'/>{likeCount}
                        </div>
                        <div className='flex flex-row-reverse text-xs leading-6 text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-200'>
                            <img src={teacher} className='ml-1 relative top-1 w-[18px] h-[18px]'/> {teacherName}
                        </div>
                        <div className='flex flex-rows'> 
                            <img src={starbg} className='w-[18px] h-[18px]'/>
                            <img src={starbg} className='w-[18px] h-[18px]'/>
                            <img src={starbg} className='w-[18px] h-[18px]'/>
                            <img src={starbg} className='w-[18px] h-[18px]'/>
                            <img src={star} className='w-[18px] h-[18px]'/>
                        </div>
                    
                        <div className='flex flex-row-reverse text-sm text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-200'>
                            <img src={level} className='ml-1 relative top-1 w-[18px] h-[18px]'/>   {levelName}                
                        </div>
                    </div>
                    
                    <div className='flex flex-row-reverse py-2 border-t-[1.5px]' >
                        
                        <MdOutlineAddShoppingCart className='w-8 h-8 text-green'/>
                        <div className='absolute left-0 flex flex-row text-green text-lg'>
                            <p className='text-[10px] mr-2 relative top-1'>تومان</p>
                            {cost}
                            
                        </div>
                    </div>
                </div>
            </div>

        </motion.div>
      
    </NavLink>

  )
}

export default CoursGridCard