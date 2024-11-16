import React, { useState } from 'react'
import FavoriteHeader from '../../../components/dashboard/favorite/FavoriteHeader'
import FavoriteMap from '../../../components/dashboard/favorite/FavoriteMap'

import { IoIosArrowDown } from 'react-icons/io'
import { SliderLeft, SliderRight } from '../../../utility/animation'
import Search from "../../../assets/landing/Search.svg";
import { motion } from 'framer-motion'
import { BiMenuAltRight } from 'react-icons/bi'

const StdFavorite = () => {

  const categories = ["متوسط", "مبتدی" , "پیشرفته", "بدون ترتیب"];
  const [category, setCategory] = useState("بدون ترتیب")
  console.log("category:::" , category)
  
  const [search, setSearch] = useState('')


  return (
    <div className='px-1 py-2 min-w-[400px]'>
       {/* search & fillter:  */}
       <div className='border-b grid grid-cols-4 justify-items-end pb-8 my-4 gap-8' >
        {/* fillter  */}           
           <motion.div
            variants={SliderRight(0.5)}
            initial="hidden"
            animate="visible"
           className="relative text-center group max-sm:grid max-sm:justify-items-center  col-span-1 justify-self-end w-full">
              <div
                className="relative text-center group flex px-5 py-3 gap-3 dark:bg-gray-700/70
                        rounded-full shadow-sm shadow-gray-300 outline-none indent-0 dark:text-white
                        text-darkgreen  hover:bg-gray-50 cursor-pointer text-md"
              >
                <IoIosArrowDown
                  className="relative mt-1 h-5 w-5 flex-none text-darkgreen dark:text-green 
                                     rotate-180 group-hover:rotate-0 duration-300"
                />
                {category}
                <BiMenuAltRight className="absolute right-4 w-7 h-7  text-darkgreen  dark:text-green  " />
              </div>
              <div
                className="absolute z-[9999] hidden  group-hover:block  max-sm:top-10
                            w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white"
              >
                <ul className="space-y-2">
                  {categories.map((item, index) => (
                    <li key={index} className="group" onClick={()=>setCategory(item)}>
                      <div
                       
                        className="inline-block px-4 font-semibold text-gray-500
                                        hover:text-black dark:hover:text-white duration-200 p-2
                                         w-full hover:bg-teal-100 rounded-md text-right
                                        group-data-[selected]:font-semibold cursor-pointer
                                        "
                      >
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
        
          {/* search  */}
        <div className='col-span-3 grid justify-items-end w-full'>
         
            <motion.div
              variants={SliderLeft(0.5)}
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
        <FavoriteHeader/>
        <FavoriteMap search={search} category={category}/>
      </div>

      {/* paginatiion:  */}
      {/* <div className='border grid justify-items-center my-4'>paginatiion</div> */}
    </div>
  )
}

export default StdFavorite