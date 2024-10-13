import React, { useState } from 'react'
import { motion } from 'framer-motion';
import HeroAImg from "../../assets/landing/hero section pic.svg";
import HeroBImg from "../../assets/landing/Ellipse 4.svg";
import { SliderRight } from '../../utility/animation';
import SearchImg from "../../assets/landing/Search.svg";
import BackImg from "../../assets/landing/Rectangle 8.svg";

import { useDispatch, useSelector } from "react-redux";
import { searchSlice } from '../../core/redux/slices/QueryState/QueryRedux';
import { useLandingReport } from '../../core/services/query/queries';



const Hero = () => {



const reportLanding =  useLandingReport()
console.log(reportLanding)

  const query = useSelector((state) => state.searchLanding.data);
  console.log(query);

  const dispatch = useDispatch();




    return (
      <>
        <div
          className="container  flex items-center  flex-nowrap justify-between
      min-h-[650px] relative"
        >
          <img src={BackImg} alt=""  className='w-full z-10 h-full absolute opacity-80'/>
            

   {/* hero image  */}
   <div className="flex w-[600px] h-[450px] justify-center max-xl:w-[400px] z-50 items-center  relative -mr-16">


        
        
            <div style={{boxShadow:"-2px 0px 5px 0px #00000026"}} className='w-[180px] max-xl:w-[150px] max-lg:w-[130px] max-lg:ml-[-40px] max-md:hidden  max-lg:h-[95px] max-xl:top-[-30px] absolute top-[-20px] left-[-20px] h-[105px] ml-5 bg-white rounded-[10px]  z-40 
               dark:bg-gray-700/70  dark:hover:bg-gray-700/100  dark:hover:transition-colors'>
              <div style={{boxShadow: "0px 0px 5px 0px #00000059"}} className='flex items-center justify-center  max-lg:w-[48px] max-lg:h-[48px] bg-[#FFB803] rounded-full max-xl:ml-[40px] ml-[60px] mt-[-30px] w-[68px] h-[68px] '>
                <img className='  w-[45px] h-[45px] max-lg:w-[35px] max-lg:h-[35px]' src="https://s3-alpha-sig.figma.com/img/964f/1424/c9d17b05e8bbb686022aab84b0a67d3f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f0uhG151j7P91t9POto~TDdcx0K~1s-Ox6HA3kT2TJK7YarMAykNDpjDnnXd3gomWn9LyitL8mxgp0NVlZk9cbACowFE8qLwHFPf4wCCXWlXLsvdfqjyApVohI9zt6jHUuUXUyVYWSc2NavwyJqio8pqFhXcrl44flKUPzqU0pPquzgn5b-1aBp3k7AKudhuWpLCw9t6Aonnrz6oZcMJpkIwAo2uSOJGXR0W72t9NRUOYU3yVvB35cTqMweSvAfdW4XwUYrwSVYkAMB8HmAxAY84J1EdhoDxQigqGEResrvDl48KblV3Dv8M0Zm4vE4Dk0kDlA~Hd7YtHiziiCw7gA__" alt="" />
              </div>
              <h1 className=' mx-auto max-xl:text-[20px] max-xl:w-[140px] h-[40px] w-[170px] mt-3 text-center text-[25px] font-normal font-Yekan text-[#434343] text-gray-800/90  dark:text-white'>+{reportLanding.data?.studentCount}دانشجو</h1>
            </div>
       


   <motion.div
              initial={{opacity:0 , x:200}}
              animate={{opacity:1 , x:0}}
              transition={{type:"spring" , stiffness:100 , delay:0.2}}
  
              className="w-[447px]  h-[447px] relative max-md:w-[800px] max-sm:ml-10  max-lg:w-[380px] max-lg:left-0 max-xl:left-10
               rounded-[30px] bg-gradient-to-br from-[#01CEC933] to-[#CB6D001A]  z-20 max-xl:w-[350px] "
            >


            <div>
            <motion.img
              initial={{opacity:0 , x:200}}
              animate={{opacity:1 , x:0}}
              transition={{type:"spring" , stiffness:100 , delay:0.2}}
  
              src={HeroAImg}
              alt=""
              className="w-[367px] h-[407px] max-xl:h-[350px] absolute left-[20px] top-[50px]
               " 
            />
          </div>

          <div className='w-[100px] h-[100px] absolute top-[25%] right-[-60px]  max-lg:hidden transform rotate-45 rounded-[20px] z-50  dark:bg-[rgba(255,255,255,0)] bg-white 
              '>


                <img src="https://s3-alpha-sig.figma.com/img/b232/c869/d848a989ad64492f82a29bd516c975f6?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nlLOC20yZVZF-p4uXGNMEu9sTOW8k4kIqFIyd3qq0mR8S25PtFFj-GBsZyDdWI~~vXG7sSnfQ5Kl1xjyg~rLXPJ20UeJhLKXaoqTsJ7YMlYkq3lqeoSvBDzVSrxzGjb0PMavRAzT29-c0NCJa1bwJgsY92FUUTF6ysPOEhs2LRXstXGn6XNTQFM7a9gEWCpiZqFdjDj25VpKoPz9RycfJXy0r4CqBGGetNYoXYPKErjN7ZvfNvorOUkzEgSQ2FSNeaWUj9td4IhJeS0VwG0jgcqohqbdkcBzMTMQfsh0msiAfKzhpRUATanJ8Gy5Ns~7xeWLiZ3oOJn8eoMZM-AvHQ__" alt=""  className='absolute max-lg:hidden top-[-40px] right-[10px] w-[90px]  h-[90px] rotate-[330deg] '/>



                <div className='w-[50px] flex items-center justify-center h-[50px] max-lg:hidden rounded-full bg-[#01CEC9] rotate-12 mx-auto mr-9 mt-9 '>
                  <img className='w-[37px] h-[37px]  transform rotate-180' src="https://s3-alpha-sig.figma.com/img/78ed/3f44/092bdd8cd4edd77bf81feba41276ca6f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YH2rn3p8TYF1uuwfDnfXZT9Gbm4vn26bq2eHQHW8DJe5uDe393m-8kd3uOqC0jtejzf8hCH9Q4MwC0w7gelBVMJaMSF-4DkJGfs-x3YZ2vIj8VD6wsC7D4rpwbRptVfxY2VRz0EBx4VdfUvpUlmSgD3efDF~NV2lp9mivtWEpW5HoE8XeXGS7fYi9S7gWC3jVFGjpR7QBrF0VRsNjPys2cSdh4qzYt09pPHwh1j1wckAUqtkaREfO3YcJwCYuWDO-i0pbwN86O~Vg-yOAr8OL4eL2VQkxBm1s6unzb128pgz9RnlgRO6MphQwHf6J2eQrP9eefwGhLF3nrMa3STD-w__" alt="" />
                  
                </div>
               
              </div>



    

            <motion.img
              initial={{opacity:0 , x:200}}
              animate={{opacity:1 , x:0}}
              transition={{type:"spring" , stiffness:100 , delay:0.2}}
  
              src={HeroBImg}

         
              alt=""
              className="w-[600px]  h-[160px] max-xl:left-[-10px] max-xl:top-[200px] absolute top-[180px] left-[-30px]  rotate-[11deg]"
            />








     </motion.div>


     <div style={{boxShadow:"-2px 0px 5px 0px #00000026"}} className='w-[180px]  dark:hover:bg-gray-700/100 dark:hover:transition-colors max-lg:-right-12 max-lg:-bottom-16 dark:bg-gray-700/70 max-lg:w-[130px] max-md:hidden  max-lg:h-[95px]  max-xl:w-[150px] max-xl:bottom-[-80px] max-xl:right-[-100px]  absolute bottom-[-90px] right-[-50px] h-[105px] ml-5 bg-white rounded-[10px]  z-40  
              '>
              <div style={{boxShadow: "0px 0px 5px 0px #00000059"}} className='flex  max-lg:w-[48px] max-lg:h-[48px] items-center justify-center max-xl:ml-[40px]   bg-[#E48900] rounded-full ml-[60px] mt-[-30px] w-[68px] h-[68px] '>
                <img className='  w-[45px] h-[45px]  max-lg:w-[35px] max-lg:h-[35px]' src="https://s3-alpha-sig.figma.com/img/4023/9fba/94fd981a002097b15ac8447a32011119?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WGIAvGcGoUeBrR1j90KPqb-L6OyIj0N7LuazF6YCrogopaKn~g339clcY~JkS8AJHsjsfaZV0Vm1HtmNV4T~uyD~6N6MBiOASQpT40PGipNpqYaF-y79T79FQe~yehiD7j6k0Xr8eu0-vDxlWtDuqaf110lOB-jR8XPcN2v5Tzxcg2wZooZGG0R-2d~lAEBmuu~3heABblQKMAn4Xa7KTgCHIoiunDMOPzM7sphevLqPse04fQr-Epew2jaJc09ACXfHMFIQB1orCFTnPYLmoTT9lItwcrplZxpxAMLU4RpHQN8vfj5xMxhWeLJLX3pxtX2hRWPK0PIpNuzFiAZTtw__" alt="" />
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
               <h1 className="text-[#01CEC9] max-lg:text-[45px] max-md:text-[50px]  text-right font-Yekan font-normal max-xl:text-[50px]  text-[60px]">آموزشگاه</h1>عنوان 

               
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
              className="flex  bg-white max-md:z-50 rounded-[35px] max-lg:mt-[-80px] max-xl:w-[315px] max-md:w-[220px] max-lg:w-[240px] h-[65px] w-[415px] z-[5000]"
            >
              <div className='w-[48px] h-[49px] rounded-full bg-[#D47300] absolute left-[10px] top-[8px] flex items-center justify-center'>
                <img src={SearchImg} alt="" className='px-1.5 py-1.5'/>
                </div>  
                <input
            onChange={(e) => dispatch(searchSlice.actions.search(e.target.value))}
                
                style={{boxShadow:" 0px 1px 3px 0px #00000033"}} placeholder='... دنبال چی میگردی ؟' type="text" className='w-full h-full  rounded-[35px]  text-right font-normal
                font-Yekan text-[#AAAAAA] text-[16px] pr-5 outline-none' 
                 
                />
              
              
             
            </motion.div>
          </div>
       
        </div>
      </>
    );
  };

export default Hero
