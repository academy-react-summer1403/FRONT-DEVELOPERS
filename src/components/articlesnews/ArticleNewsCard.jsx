import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

// image:
import newsImage from '../../assets/articles and news/Rectangle 95.svg'
import seenIcon from '../../assets/articles and news/Frame(1).svg'
import calenderIcon from '../../assets/articles and news/Frame.svg'
import flash from '../../assets/articles and news/Frame(2).svg'


const ArticleNewsCard = ({title,miniDescribe  , addUserFullName , currentRate , currentView}) => {
  return (
    <NavLink to={"/article-detail"}>
    <motion.div
        initial={{opacity:0 ,y:-200}}
        animate={{opacity:1 ,y:0}}
        transition={{type:"spring" , stiffness:100 , delay:0.3}}
    >
        <div className='group bg-white dark:bg-gray-600/70 dark:hover:bg-secondary transition duration-500 relative grid-col-1 rounded-t-full shadow px-6
            max-sm:w-[70%] max-sm:mx-auto  max-sm:px-2  overflow-hidden        
        '>
            <img src={newsImage} className='mx-auto  max-sm:w-[70%]'/>

            <div className='py-4 '>
                <h3 className='text-lg font-medium text-teal-900 dark:text-white text-right'>{title}</h3>

                <p className='text-xs text-gray-400 dark:text-gray-300 text-right my-4'>{miniDescribe}
                </p>

                <div className='relative flex flex-row-reverse my-4'>
                    <div className='flex flex-row gap-1 text-xs text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-200'>
                        {currentView}
                        <img src={seenIcon} />
                    </div>
                    <div className='absolute left-0 flex flex-row-reverse gap-1 text-xs text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-200'>
                        {currentRate}
                        <img src={calenderIcon}/>
                    </div>
                </div>

                <NavLink to={"#"} className='flex justify-center pt-2 gap-1 text-xs font-medium 
                text-orange border-t-[1px]'> 
                    <img src={flash} className='m-1'/>مطالعه بیشتر
                    
                </NavLink>
            </div>   

        </div>
    </motion.div>
    </NavLink>
  )
}

export default ArticleNewsCard