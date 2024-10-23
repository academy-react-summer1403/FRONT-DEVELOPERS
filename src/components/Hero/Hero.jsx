import React, { useState } from 'react'
import { motion } from 'framer-motion';
import HeroAImg from "../../assets/landing/hero section pic.svg";
import HeroBImg from "../../assets/landing/Ellipse 4.svg";
import { SliderRight } from '../../utility/animation';
import SearchImg from "../../assets/landing/Search.svg";
import teacher from "../../assets/landing/teacher.png";
import hat from "../../assets/landing/Flying Mortarboard.svg";
import Student from "../../assets/landing/student.png";
import Circled from "../../assets/landing/Circled Play.svg";
import BackImg from "../../assets/landing/Rectangle 8.svg";

import { useDispatch, useSelector } from "react-redux";
import { useLandingReport } from '../../core/services/query/queries';
import { search } from '../../core/redux/slices/QueryState/SearchSlice';



const Hero = () => {



const reportLanding =  useLandingReport()
console.log(reportLanding)

  const query = useSelector((state) => state.SearchSlice.data);
  console.log(query);

  const dispatch = useDispatch();




    return (
      <div className='  z-[-9999]'>
        <div
          className="container   flex items-center  flex-nowrap justify-between
      min-h-[650px] relative"
        >
          <img src={BackImg} alt=""  className='w-full z-10 h-full absolute opacity-80'/>
            

   {/* hero image  */}
   <div className="flex w-[600px] h-[450px] justify-center max-xl:w-[400px] z-50 items-center  relative -mr-16">


        
        
            <div style={{boxShadow:"-2px 0px 5px 0px #00000026"}} className='w-[180px] max-xl:w-[150px] max-lg:w-[130px] max-lg:ml-[-40px]
             max-md:hidden  max-lg:h-[95px] max-xl:top-[-30px] absolute top-[-20px] left-[-20px] h-[105px] ml-5 bg-white rounded-[10px]  z-40 
               dark:bg-gray-700/70  dark:hover:bg-gray-700/100  dark:hover:transition-colors'>
              <div style={{boxShadow: "0px 0px 5px 0px #00000059"}} className='flex items-center justify-center z-0 max-lg:w-[48px] max-lg:h-[48px] bg-yellow rounded-full max-xl:ml-[40px] ml-[60px] mt-[-30px] w-[68px] h-[68px] '>
                <img className='  w-[45px] h-[45px] max-lg:w-[35px] max-lg:h-[35px]' src={teacher} alt="" />
              </div>
              <h1 className=' mx-auto max-xl:text-[20px] max-xl:w-[140px] h-[40px] w-[170px] mt-3 text-center text-[25px] font-normal font-Yekan text-[#434343] text-gray-800/90  dark:text-white'>+{reportLanding.data?.studentCount}دانشجو</h1>
            </div>
       


   <motion.div
              initial={{opacity:0 , x:200}}
              animate={{opacity:1 , x:0}}
              transition={{type:"spring" , stiffness:100 , delay:0.2}}
  
              className="w-[447px]  h-[447px] relative max-md:w-[800px] max-sm:ml-10  max-lg:w-[380px] max-lg:left-0 max-xl:left-10
               rounded-[30px] bg-gradient-to-br from-primary/20 to-secondary/10  z-20 max-xl:w-[350px] "
            >


            <div>
            <motion.img
              initial={{opacity:0 , x:200}}
              animate={{opacity:1 , x:0}}
              transition={{type:"spring" , stiffness:100 , delay:0.2}}
  
              src={HeroAImg}
              alt=""
              className="w-[367px] h-[407px] max-xl:h-[350px] absolute left-[40px] top-[35px] z-40
               " 
            />
          </div>

          <div className='w-[100px] h-[100px] absolute top-[25%] right-[-60px]  max-lg:hidden transform rotate-45 rounded-[20px] z-50  dark:bg-[rgba(255,255,255,0)] bg-white 
              '>


                <img src={hat} alt=""  className='absolute max-lg:hidden top-[-40px] right-[10px] w-[90px]  h-[90px] rotate-[330deg] '/>



                <div className='w-[50px] flex items-center justify-center h-[50px] max-lg:hidden rounded-full bg-primary rotate-12 mx-auto mr-9 mt-9 '>
                  <img className='w-[40px] h-[40px]  mb-2 transform rotate-180' src={Circled} alt="" />
                  
                </div>
               
              </div>


            <svg className='absolute top-[185px] -left-8' width="529" height="198" viewBox="0 0 529 198" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="264.267" cy="98.6967" rx="266.466" ry="80.799" transform="rotate(11.5924 264.267 98.6967)"  stroke="url(#paint0_linear_102_5135)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 10"/>
                <defs>
                <linearGradient id="paint0_linear_102_5135" x1="-2.19913" y1="98.6967" x2="530.734" y2="98.6967" gradientUnits="userSpaceOnUse">
                <stop stop-color="#00B6B2"/>
                <stop offset="0.3" stop-color="#00B6B2" stop-opacity="0"/>
                <stop offset="0.695" stop-color="#00B6B1" stop-opacity="0"/>
                <stop offset="1" stop-color="#00B5B1"/>
                </linearGradient>
                </defs>
            </svg>

    

            {/* <motion.img
              initial={{opacity:0 , x:200}}
              animate={{opacity:1 , x:0}}
              transition={{type:"spring" , stiffness:100 , delay:0.2}}
  
              src={HeroBImg}

         
              alt=""
              className="w-[600px]  h-[160px] max-xl:left-[-10px] max-xl:top-[200px] absolute top-[180px] left-[-30px]  rotate-[11deg]"
            /> */}








     </motion.div>


     <div style={{boxShadow:"-2px 0px 5px 0px #00000026"}} className='w-[180px]  dark:hover:bg-gray-700/100 dark:hover:transition-colors max-lg:-right-12 max-lg:-bottom-16 dark:bg-gray-700/70 max-lg:w-[130px] max-md:hidden  max-lg:h-[95px]  max-xl:w-[150px] max-xl:bottom-[-80px] max-xl:right-[-100px]  absolute bottom-[-90px] right-[-50px] h-[105px] ml-5 bg-white rounded-[10px]  z-40  
              '>
              <div style={{boxShadow: "0px 0px 5px 0px #00000059"}} className='flex  max-lg:w-[48px] max-lg:h-[48px] items-center justify-center max-xl:ml-[40px]   bg-orange rounded-full ml-[60px] mt-[-30px] w-[68px] h-[68px] '>
                <img className='  w-[45px] h-[45px]  max-lg:w-[35px] max-lg:h-[35px]' src={Student} alt="" />
              </div>
              <h1 className=' mx-auto h-[40px] w-[170px] mt-3 text-center text-[25px] max-xl:text-[20px] max-xl:w-[140px]  font-normal font-Yekan text-[#434343] text-gray-800/90  dark:text-white'>+{reportLanding.data?.teacherCount} مدرس</h1>
            </div>


    </div>

          {/* brand section  */}
          <div
            className=" max-xl:w-[395px] max-sm:mr-5 w-[495px] h-[280px] max-lg:mr-[-50px] max-md:mr-[-50px]  max-md:ml-[-300px] flex flex-wrap justify-end"
          >
            <div className="text-center relative">

          
            <motion.h1
             variants={SliderRight(0.4)}
             initial="hidden"
             animate="visible"
      

              className="  flex max-xl:text-[50px] dark:text-white   max-lg:text-[45px]  max-md:text-[50px]  font-Yekan font-normal justify-end text-right text-[60px] text-[#000000]"
            >
               <h1 className="text-primary max-lg:text-[45px] max-md:text-[50px]  text-right font-Yekan font-normal max-xl:text-[50px]  text-[60px]">آموزشگاه</h1>عنوان 

               
            </motion.h1>
            <motion.p
               variants={SliderRight(0.6)}
               initial="hidden"
               animate="visible"
               className='text-right font-Yekan font-normal max-lg:hidden text-[#555555] dark:text-[#c9c6c655] text-[20px] max-xl:text-[18px]  leading-[35px] dark:text-white'
            >
             مرجع اموزش زنده و تعاملی برنامه نویسی حوزه وب 
             با دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی
            </motion.p>
            </div>
            {/* button section  */}
            <motion.div
             variants={SliderRight(1.0)}
             initial="hidden"
             animate="visible"
              className="flex bg-white dark:bg-gray-600  max-md:z-50 rounded-[35px] max-lg:mt-[-80px] max-xl:w-[315px] max-md:w-[220px] max-lg:w-[240px] h-[65px] w-[415px] z-[5000]"
            >
              <div className='w-[48px] h-[49px] rounded-full bg-orange absolute left-[10px] top-[8px] flex items-center justify-center'>
                <img src={SearchImg} alt="" className='px-1.5 py-1.5'/>
                </div>  
                <input
            onChange={(e) => dispatch(search(e.target.value))}
                
                style={{boxShadow:" 0px 1px 3px 0px #00000033"}} placeholder='... دنبال چی میگردی ؟' type="text" className='w-full h-full  rounded-[35px]  text-right font-normal
                font-Yekan text-[#AAAAAA] text-[16px] pr-5 outline-none dark:bg-gray-600 ' 
                 
                />
              
              
             
            </motion.div>
          </div>
       
        </div>
      </div>
    );
  };

export default Hero
