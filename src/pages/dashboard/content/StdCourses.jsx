import React from 'react'
import ListMap from '../../../components/dashboard/stdcourse/ListMap'
import ListHeader from '../../../components/dashboard/stdcourse/ListHeader'
import { motion } from 'framer-motion'
import { SliderRight } from '../../../utility/animation'
import Search from "../../../assets/landing/Search.svg";
import { IoIosArrowDown } from 'react-icons/io'
import { BiMenuAltRight } from 'react-icons/bi'




const StdCourses = () => {

  const categories = ["جدید ترین", "محبوب ترین" , "ارزان ترین"];

 
  
  return (
    <div className='px-1 py-2 max-lg:px-4 min-w-[400px]
    
  '>
      {/* search & fillter:  */}
      <div className='border-b grid grid-cols-4 justify-items-end pb-8 my-4 gap-8' >
        {/* fillter  */}           
           <div className="relative group max-sm:grid max-sm:justify-items-center  col-span-1 justify-self-end w-full">
              <div
                className="group flex px-5 py-2 gap-4 dark:bg-gray-700/70
                        rounded-full shadow-sm shadow-gray-300 outline-none indent-0 dark:text-white
                        text-gray-900 hover:bg-gray-50 cursor-pointer text-md"
              >
                <IoIosArrowDown
                  className="relative mt-1 h-5 w-5 flex-none text-teal-900 dark:text-teal-600
                                     rotate-180 group-hover:rotate-0 duration-300"
                />
                جدید ترین
                <BiMenuAltRight className="w-7 h-7 mt-1 text-teal-900 dark:text-teal-600 " />
              </div>
              <div
                className="absolute z-[9999] hidden  group-hover:block  max-sm:top-10
                            w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white"
              >
                <ul className="space-y-2">
                  {categories.map((item, index) => (
                    <li key={index} className="group">
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
            </div>
        
          {/* search  */}
        <div className='col-span-3 grid justify-items-end w-full'>
         
            <motion.div
              variants={SliderRight(1.0)}
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
                onChange={""}
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
        <ListHeader/>
        <ListMap/>
      </div>

      {/* paginatiion:  */}
      {/* <div className='border grid justify-items-center my-4'>paginatiion</div> */}
    </div>
  )
}

export default StdCourses