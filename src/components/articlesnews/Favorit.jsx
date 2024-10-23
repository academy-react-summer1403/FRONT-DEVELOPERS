import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

// image:
import react2 from '../../assets/articles and news/Ellipse 39.svg'
import angular from '../../assets/articles and news/Ellipse 39(2).svg'
import figma2 from '../../assets/articles and news/Ellipse 39(1).svg'
import geernarrow from '../../assets/articles and news/Frame(5).svg'

import AOS from "aos";
import 'aos/dist/aos.css';

const Favorite = () => {
    const favorite=[
       
        {image:angular,subject:"دوره جامع انگورلار"},
        {image:figma2,subject:"دوره جامع فیگما"},
        {image:react2,subject:"دوره جامع ریکت"}
    ]

    useEffect(() => {
        AOS.init();
      }, [])
    
    return (
      
               
            <motion.div
            initial={{opacity:0 , x:-200}}
            animate={{opacity:1 , x:0}}
            transition={{type:"spring" , stiffness:100 , delay:0.7}}
            className='bg-white dark:bg-gray-700/70 shadow rounded-xl my-8 p-4
            max-sm:mx-4 
            '>
                <div className='text-center'>
                    <h3 className='text-lg font-medium text-teal-900 dark:text-white mb-2'>محبوب ترین دره ها</h3>
                    <p className='text-sm text-gray-400 dark:text-gray-300'>بهترین چیز هایی که میتونید یاد بگیرید</p>
                </div>        
                        {favorite.map((item,key)=>(
                            <div key={key} className='relative flex flex-row my-4'>
                                <img data-aos="flip-right" data-aos-duration="700" src={item.image} className='z-[9999]'/>
                                <div 
                                    data-aos="fade-right" data-aos-duration="800" 
                                className='absolute bg-gray-100 dark:bg-gray-500/70 w-[82%] right-0 my-2 
                                p-4 text-right shadow rounded-lg
                                max-sm:w-[95%]
                                max-md:w-[92%] 
                                max-lg:w-[92%] 
                                '>
                                    <p className='text-[11px] font-medium text-teal-800 dark:text-white mb-2'>{item.subject}</p>
                                    <NavLink to={"#"} className='text-[10px] text-teal-500 flex flex-row-reverse '>
                                        مشاهده مطالب <img src={geernarrow} />
                                    </NavLink>
                                </div>
                            </div>
                        ))}
                        
                       
            </motion.div>        
            
      
      )
}

export default Favorite