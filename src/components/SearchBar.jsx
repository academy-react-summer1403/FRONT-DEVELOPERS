import React from 'react'
import Search from '../assets/landing/Search.svg'
import { motion } from 'framer-motion'

const SearchBar = ({placeholder}) => {
    return (
        <motion.div
          initial={{opacity:0 , width:0}}
          animate={{opacity:1 , width:"75%"}}
          transition={{type:"spring" , stiffness:100 , delay:0.5}}
        className='flex flex-row  w-3/4
            max-sm:w-full max-sm:mr-2
            max-md:w-full
            max-lg:w-full
            max-xl:w-3/4'
        >

            <div className="relative top-[32px] left-[65px] bg-orange rounded-full  w-14 h-[50px] z-40 ">               
              <img src={Search} className="w-[25px] h-[29px] mt-[11px] ml-3 "/>
            </div>

            <input
              id="search"
              name="search"
              type="text"
              placeholder={placeholder}
              className='mx-2 backdrop-blur-sm my-6  w-full
               h-[65px] rounded-full text-right pr-8 pb-2 dark:bg-gray-700/70  
              '
              style={{boxShadow:" 0px 0.1px 1px 1px rgba(0, 0, 0, 0.1)"}}
              
              onChange={" "}
            />
        </motion.div>
      )
  
}

export default SearchBar