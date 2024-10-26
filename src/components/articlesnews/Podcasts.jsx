import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

// image:
import react from '../../assets/articles and news/Ellipse 39(3).svg'
import view from '../../assets/articles and news/Frame(4).svg'
import likes from '../../assets/articles and news/Vector.svg'

import AOS from "aos";
import 'aos/dist/aos.css';


const Podcasts = () => {
    const podcast=[
      
        {image:react,subject:"شروع یاد گیری توسعه وب با ریکت"},
        {image:react,subject:"شروع یاد گیری توسعه وب با ریکت"},
        {image:react,subject:"شروع یاد گیری توسعه وب با ریکت"},           
    ]

    useEffect(() => {
        AOS.init();
      }, [])
    

    return (                   
        <motion.div
            initial={{opacity:0 , x:-200}}
            animate={{opacity:1 , x:0}}
            transition={{type:"spring" , stiffness:100 , delay:0.4}}
        className='bg-white dark:bg-gray-700/70 shadow rounded-xl my-8 p-4
           max-sm:mx-4 '
        >
                <div className='text-center '>
                    <h3 className='text-lg font-medium text-darkgreen dark:text-white mb-2'>پادکست ها"</h3>
                    <p className='text-sm text-gray-400 dark:text-gray-300'>با مااز بهترین ها بشنوید</p>
                </div>        
                        {podcast.map((item,key)=>(
                            <div key={key} className='relative flex flex-row my-4'>
                                <img data-aos="flip-right" data-aos-duration="700" src={item.image} className='z-[9999]'/>
                                <div 
                                   data-aos="fade-right" data-aos-duration="800" 
                                className='absolute bg-gray-100 dark:bg-gray-500/70 w-[82%] right-0 my-2 px-2 py-4 text-right shadow rounded-lg
                                    max-sm:w-[95%]
                                    max-md:w-[92%] 
                                    max-lg:w-[92%] 
                                '>
                                    <p className='text-[11px] font-medium text-darkgreen/80 dark:text-white mb-3'>{item.subject}</p>
                                    <div  className='text-[10px] text-gray-400 flex flex-row px-[25%] max-lg:px-[20%] max-sm:px-[10%]  gap-5 '>
                                        <p className='flex flex-row-reverse gap-1 '> 
                                            124<img src={view}/>
                                        </p> 
                                        <p className='flex flex-row-reverse gap-1'>
                                            58<img src={likes}/>
                                        </p> 
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                       
        </motion.div>        
            
      
      )
}

export default Podcasts