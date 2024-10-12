import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

// image:
import newsImage from '../../assets/articles and news/Rectangle 95.svg'
import seenIcon from '../../assets/articles and news/Frame(1).svg'
import calenderIcon from '../../assets/articles and news/Frame.svg'
import flash from '../../assets/articles and news/Frame(2).svg'


const ArticleNewsCard = ({title,miniDescribe  , updateDate,currentView , id}) => {
  return (
    <NavLink>
    <motion.div
        initial={{opacity:0 ,y:-200}}
        animate={{opacity:1 ,y:0}}
        transition={{type:"spring" , stiffness:100 , delay:0.3}}
    >
        <div className='group  dark:bg-gray-600/70 dark:hover:bg-secondary transition duration-500 relative grid-col-1 rounded-t-full shadow px-6
            max-sm:w-[70%] max-sm:mx-auto  max-sm:px-2 h-[400px]  mt-[30px]     
        '>
            <img src={newsImage} className='mx-auto  max-sm:w-[70%]'/>

            <div className='py-4  h-[200px] relative'>
                <h3 className='text-lg font-medium text-teal-900 dark:text-white text-right line-clamp-2 '>{title}</h3>

                <p className='text-xs text-gray-400 dark:text-gray-300 text-right my-4 line-clamp-2 h-[50px] '>{miniDescribe}
                </p>

                <div className='absolute w-[270px] bg-red-400 top-[130px] flex flex-row-reverse my-4'>
                    <div className='flex flex-row gap-1 text-xs text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-200 absolute right-0'>
                        {currentView}بازدید
                        <img src={seenIcon} />
                    </div>
                    <div className='absolute left-0 flex flex-row-reverse gap-1 text-[10px] text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-200'>
                        {updateDate}
                        <img src={calenderIcon}/>
                    </div>
                </div>

                <NavLink to={"/article-detail/" + id } className='flex justify-center pt-2 gap-1 text-xs font-medium 
                text-orange border-t-[1px] absolute w-[250px] top-[180px]'> 
                    <img src={flash} className='m-1'/>مطالعه بیشتر
                    
                </NavLink>
            </div>   

        </div>
    </motion.div>
    </NavLink>
  )
}

export default ArticleNewsCard