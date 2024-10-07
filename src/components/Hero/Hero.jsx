import React from 'react'
import { motion } from 'framer-motion';
import HeroAImg from "../../assets/landing/hero section pic.svg";
import HeroBImg from "../../assets/landing/Ellipse 4.svg";
import { SliderRight } from '../../utility/animation';
import TImg from "../../assets/landing/teacher.png";
import SImg from "../../assets/landing/student.png";
import BackImg from "../../assets/landing/Rectangle 8.svg";
import VidImg from "../../assets/landing/Circled Play.svg";
import HatImg from "../../assets/landing/Hat.png";

import SearchBar from '../SearchBar';





const Hero = () => {
    return (
      <>
        <div
          className="relative flex flex-row-reverse min-h-[650px]
            max-md:flex-col-reverse
            max-lg:flex-col-reverse
          "
        >
          <img src={BackImg} alt="" 
           className='absolute opacity-80 left-12 top-8'/>

          {/* brand section  */}
          <div
            className="relative justify-items-end mt-40 mx-4 w-1/2  
            max-md:flex-col-reverse max-md:mx-auto max-md:w-full  max-md:m-0 max-md:mb-40
            max-lg:flex-col-reverse max-lg:mx-0 max-lg:w-full  max-lg:my-0 max-lg:mb-40     
            "
          > 
              <motion.h1
              variants={SliderRight(0.4)}
              initial="hidden"
              animate="visible"
                className="text-5xl lg:text-6xl mb-6 !leading-tight text-right    
                max-lg:w-[70%] max-lg:mx-[15%] max-lg:text-center
                max-xl:ml-[150px]
                max-md:text-center max-md:mx-[15%]"
              >
                 
                <span className="text-zinc-600 drop-shadow-lg max-md:mr-[10px] ">عنوان </span>
                <span className="text-primary drop-shadow-lg max-md:mr-[10px] ">آموزشگاه</span>
              </motion.h1>
              <motion.p
                variants={SliderRight(0.6)}
                initial="hidden"
                animate="visible"
                className='absolute right-0 text-right text-lg text-gray-600 dark:text-white w-[70%] 
                max-md:w-[70%] max-md:text-center max-md:mx-[15%]
                max-lg:w-[70%] max-lg:mx-[15%] max-lg:text-center
                '
              >
              مرجع اموزش زنده و تعاملی برنامه نویسی حوزه وب 
              
              با دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی
              </motion.p>
           
            {/*search section */}
            <div className='w-full absolute grid justify-items-end right-0 top-[178px] 
            max-sm:top-[180px] max-sm:w-full max-sm:mx-0 max-sm:right-0 
            max-xl:top-[240px] max-xl:w-2/3 max-xl:right-[17%]
            max-lg:top-[150px] max-lg:w-3/4 max-lg:pr-0 max-lg:mx-0 max-lg:text-center
            '>
             <SearchBar placeholder={"...دنبال چی میگردی؟"}/> 
            </div>
          </div>

            {/* hero image  */}
            <div className=" flex justify-center items-center relative ml-16 w-1/2 border
             max-md:w-full 
             max-lg:w-full 
            ">


            <div className=' flex justify-start  w-full h-[100px] absolute top-20 max-xl:right-[100px]
             max-xl:top-[20px] max-md:right-[60px]
            max-sm:left-[20px]'
            >
              <div style={{boxShadow:" -2px -1px 2px 1px rgba(0, 0, 0, 0.2)"}}
                className='w-[65px] h-[65px] rounded-full bg-amber-400 absolute left-[48px] top-[-29px] z-50'>
                <img src={TImg} alt=""  className='z-40 px-2 py-2'/>
              </div>

              <div  style={{boxShadow:" -2px -1px 2px 1px rgba(0, 0, 0, 0.1)"}} 
              className='w-[190px] h-full ml-[-19px] bg-white rounded-xl z-40 border border-gray-600/10 
                hover:shadow-lg hover:shadow-orange transition-shadow dark:bg-gray-700/70 
                dark:hover:bg-orange dark:hover:shadow-md dark:hover:transition-colors
              '>
                <h1 className='text-xl text-center py-12 text-gray-800/90 font-normal dark:text-white'>1000 + دانشجو</h1>
              </div>

            </div>

              <div className='w-[100px] h-[100px] absolute top-0 right-8 top-56 bg-white transform rotate-45 rounded-3xl z-50 bg-white 
              max-xl:left-[20px] max-md:-top-[400px] max-md:left-[460px] max-sm:left-[470px] dark:bg-gray-900 '>

                <img src={HatImg} alt=""  className='absolute -top-[40px] right-[20px] -rotate-45 max-xl:-top-[60px] max-sm:-top-[60px]'/>

                <div className='w-12 h-12 rounded-full bg-primary rotate-12 mx-auto mr-[45px] mt-[45px] pb-[4px] pl-[4px]
                 max-xl:mr-5 max-xl:mt-5 max-xl:w-12 max-xl:h-12'>
                  <img src={VidImg} alt=""  className="rotate-180  "/>
                </div>
              
              </div>
            <motion.div
              initial={{opacity:0 , x:200}}
              animate={{opacity:1 , x:0}}
              transition={{type:"spring" , stiffness:100 , delay:0.2}}

              className="w-[450px] h-[450px] rounded-3xl bg-gradient-to-br from-cyan-100 from-10% to-orange/20 z-20 mr-6 
              dark:from-primary/50 dark:to-light/30
              max-xl:w-[500px] max-xl:h-[400px] max-xl:mt-[60px]
              max-lg:mx-auto
              max-md:w-[400px] max-md:h-[400px] max-md:mt-[10%] max-md:ml-8 
              "
            >
              <div>
                    <motion.img
                      initial={{opacity:0 , x:200}}
                      animate={{opacity:1 , x:0}}
                      transition={{type:"spring" , stiffness:100 , delay:0.2}}

                      src={HeroAImg}
                      alt=""
                      className="absolute w-[430px] h-[430px] left-[10px] top-[20px]
                      max-xl:h-[390px] max-xl:left-[90px] max-xl:w-[480px]                     
                      max-md:left-[30px] max-md:w-[700px] max-md:h-[330px]
                      max-lg:left-[40px] max-lg:top-[10px]"
                    />
              </div>
            </motion.div>

            <div className="flex justify-center items-center">
                    <motion.img
                      initial={{opacity:0 , x:200}}
                      animate={{opacity:1 , x:0}}
                      transition={{type:"spring" , stiffness:100 , delay:0.2}}

                      src={HeroBImg}
                      alt=""
                      className="absolute left-0 top-[270px] z-30
                      max-md:w-[500px] max-md:left-[50px] max-md:top-[180px]
                      max-xl:w-[450px] max-xl:left-0 "
                    />
            </div>

                <div className='flex justify-end  w-full h-[100px] absolute bottom-4 left-10
                max-xl:mb-[30px] max-md:top-[400px] max-md:left-1
                    max-sm:w-[300px] max-sm:left-[300px]'>
                    <div className='w-[65px] h-[65px] rounded-full bg-secondary absolute right-[70px] top-[-30px] 
                    z-30 border border-gray-600/10'
                    style={{boxShadow:" 0px -2px 2px 1px rgba(0, 0, 0, 0.2)"}}
                    >
                      <img src={SImg} alt="" className='z-40 px-2 py-2'/>
                    </div>
                    <div className='w-[200px] h-full bg-white rounded-xl z-20 ml-40 mt-2
                    hover:shadow-xl hover:shadow-orange transition-shadow dark:bg-gray-700/70 
                    dark:hover:bg-orange dark:hover:shadow-md dark:hover:transition-colors'
                    style={{boxShadow:" 0px 1px 2px 1px rgba(0, 0, 0, 0.2)"}}
                    >

                      <h1 className='text-xl text-center py-12 text-gray-800/90 dark:text-white'>50+  مدرس</h1>
                    </div>

                </div>


            </div>
                  
        </div>
      </>
    );
  };

export default Hero
