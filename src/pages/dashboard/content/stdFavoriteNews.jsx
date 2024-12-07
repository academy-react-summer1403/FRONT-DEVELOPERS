import React, { useState } from 'react'
import { SliderLeft } from '../../../utility/animation'
import Search from "../../../assets/landing/Search.svg";
import { motion } from 'framer-motion'
import FavoriteHeaderNews from '../../../components/dashboard/favorite/FavoriteNewsHeader'
import FavoriteMapNew from '../../../components/dashboard/favorite/FavoriteNewsMap'

const StdFavoriteNews = () => {


  const [search, setSearch] = useState('')


  return (
    <div className='px-1 py-2 min-w-[400px]'>
       {/* search & fillter:  */}
       <div className='border-b grid grid-cols-4 justify-items-end pb-8 my-4 gap-8' >        
          {/* search  */}
        <div className='col-span-3 grid justify-items-end w-full'>
         
            <motion.div
              variants={SliderLeft(1.0)}
              initial="hidden"
              animate="visible"
              className="flex flex-row  w-4/5 
              max-sm:w-full max-sm:mr-2
              max-md:w-full
              max-lg:w-full
              max-xl:w-3/4"
            >
              <div className="relative top-[4px] left-[52px] bg-orange rounded-full  w-[52px] h-[47px] z-40 ">
                <img src={Search} className="w-[25px] h-[29px] mt-[8px] ml-2.5 " />
              </div>

              <input
                onChange={(e)=>{setSearch(e.target.value)}}
                id="search"
                name="search"
                type="text"
                placeholder='...دنبال چی میگردی؟ '
                className=" backdrop-blur-sm my-0  w-full
                      h-[55px] rounded-full text-right pr-8 pb-2 dark:bg-gray-700/70  
                      "
                style={{ boxShadow: " 0px 0.1px 1px 1px rgba(0, 0, 0, 0.1) inset" }}

              
              />
            </motion.div>
          
        </div>

      </div>


      {/* list of courses:  */}
      <div className='my-4 '>
        <FavoriteHeaderNews/>
        <FavoriteMapNew search={search}/>
      </div>

    </div>
  )
}

export default StdFavoriteNews