import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

// images:
import speed from '../../assets/articles and news/Ellipse 39(4).svg'
import manager from '../../assets/articles and news/Ellipse 39(5).svg'
import figma from '../../assets/articles and news/Ellipse 39(6).svg'
import geernarrow from '../../assets/articles and news/Frame(5).svg'


const Offers = () => {
    const Offer =[
        {image:figma,subject:"چرا فیگما؟"},
        {image:manager,subject:"چگونه مدیر یک پروژه باشیم؟"},
        {image:speed,subject:"سرعت تکنولوژی در قرن 21"},
]
    return (
       
            
               
            <motion.div className='bg-white dark:bg-gray-700/70 shadow rounded-xl my-8 p-4 
            max-sm:mx-4 '
              initial={{opacity:0 , x:-200}}
              animate={{opacity:1 , x:0}}
              transition={{type:"spring" , stiffness:100 , delay:0.2}}
            >
                <div className='text-center'>
                    <h3 className='text-lg font-medium text-teal-900 dark:text-white mb-2'>مطالب پیشنهادی</h3>
                    <p className='text-sm text-gray-400 dark:text-gray-300'>این مطالب هم میتونه براتون جالب باشه</p>
                </div>        
                        {Offer.map((item,key)=>(
                            <div key={key} className='relative flex flex-row my-4 '>
                                <img src={item.image} className='z-[9999] '/>
                                <motion.div 
                                    initial={{opacity:0 ,x:-200}}
                                    animate={{opacity:1 ,x:0}}
                                    transition={{type:"spring" , stiffness:100 , delay:0.7}}
                                className='absolute bg-gray-100 dark:bg-gray-500/70 w-[82%] right-0 mt-4 p-3 text-right shadow rounded-lg
                                    max-sm:w-[95%]
                                    max-md:w-[92%] 
                                    max-lg:w-[92%] 
                                '>
                                    <p className='text-[11px] font-medium text-teal-800 dark:text-white mb-3'>{item.subject}</p>
                                    <NavLink to={"#"} className='text-[10px] text-teal-500 flex flex-row-reverse '>
                                        مشاهده مطالب <img src={geernarrow} />
                                    </NavLink>
                                </motion.div>
                            </div>
                        ))}
                        
                       
            </motion.div>        
            
      
      )
}

export default Offers