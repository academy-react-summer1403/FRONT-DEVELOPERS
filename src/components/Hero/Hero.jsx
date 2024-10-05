import React from 'react'
import { motion } from 'framer-motion';
import HeroAImg from "../../assets/landing/hero section pic.svg";
import HeroBImg from "../../assets/landing/Ellipse 4.svg";
import { SliderRight } from '../../utility/animation';
import TImg from "../../assets/landing/teacher.png";
import SImg from "../../assets/landing/student.png";
import SearchImg from "../../assets/landing/Search.svg";
import BackImg from "../../assets/landing/Rectangle 8.svg";
import VidImg from "../../assets/landing/Circled Play.svg";
import HatImg from "../../assets/landing/Hat.png";





const Hero = () => {
    return (
      <>
        <div
          className="container grid grid-cols-1 md:grid-cols-2 
          min-h-[650px] relative"
        >
          <img src={BackImg} alt="" style={{backgroundPosition:"50%"}} className='w-full h-full absolute opacity-80'/>
            

          {/* hero image  */}
          <div className="flex justify-center items-center relative -mr-16">


                <div className='flex justify-start  w-full h-[100px] absolute top-20 max-xl:right-[100px] max-xl:top-[20px] max-md:right-[60px]
                max-sm:left-[20px]'>
                <div className='w-[55px] h-[55px] rounded-full bg-yellow-500 absolute left-[83px] top-[-25px] z-50'>
                  <img src={TImg} alt="" className='z-40 px-2 py-2'/>
                </div>
                    <div className='w-[180px] h-full ml-5 bg-white rounded-2xl shadow-2xl z-40 border border-gray-600/10
                    hover:shadow-xl hover:shadow-orange transition-shadow dark:bg-gray-700/70  dark:hover:bg-orange dark:hover:shadow-md dark:hover:transition-colors'>
                      <h1 className='text-lg text-center py-12 text-gray-800/90 font-semibold dark:text-white'> ۱۰۰۰+  دانشجو </h1>
                    </div>
                </div>


          <motion.div
                      initial={{opacity:0 , x:200}}
                      animate={{opacity:1 , x:0}}
                      transition={{type:"spring" , stiffness:100 , delay:0.2}}
          
                      className="w-[500px]  h-[450px]   max-xl:w-[500px] max-xl:h-[400px] 
                      rounded-2xl bg-gradient-to-r from-primary/20 to-light/10 z-20 max-xl:-mt-[60px] max-md:w-[400px] max-md:h-[400px]
                      max-md:mt-[50px] max-md:mr-[50px] dark:from-primary/50 dark:to-light/30"
                    >


                    <div>
                    <motion.img
                      initial={{opacity:0 , x:200}}
                      animate={{opacity:1 , x:0}}
                      transition={{type:"spring" , stiffness:100 , delay:0.2}}
          
                      src={HeroAImg}
                      alt=""
                      className="w-[330px] h-[280px] xl:h-[380px] absolute left-[20px] top-[50px]
                      xl:w-[480px] max-xl:left-[100px] max-md:left-[30px] max-md:w-[700px] max-md:h-[330px] max-lg:left-[60px]"
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
                      className="w-[400px] md:w-[600px] absolute left-24 top-[270px]
                      xl:w-[550px] max-xl:left-[0px] max-md:left-[50px] max-md:top-[180px] max-md:w-[500px]"
                    />
                  </div>

                  <div className='flex justify-end  w-full h-[100px] absolute bottom-5 left-3 max-xl:mb-[30px] max-md:top-[400px] max-md:left-1
                    max-sm:w-[300px] max-sm:left-[300px]'>
                    <div className='w-[55px] h-[55px] rounded-full bg-orange absolute right-[83px] top-[-25px] z-30 border border-gray-600/10'>
                      <img src={SImg} alt="" className='z-40 px-2 py-2'/>
                    </div>
                    <div className='w-[180px] h-full mr-5 bg-white rounded-2xl shadow-2xl z-20
                    hover:shadow-xl hover:shadow-orange transition-shadow dark:bg-gray-700/70 dark:hover:bg-orange dark:hover:shadow-md dark:hover:transition-colors'>

                                  <h1 className='text-lg text-center py-12 text-gray-800/90 font-semibold dark:text-white'> 5۰+  مدرس</h1>
                    </div>

                </div>


          </div>

          {/* brand section  */}
          <div
            className="flex flex-col justify-center py-14
            md:pr-16 xl:pr-40 md:py-0"
          >
            <div className="text-center md:text-left space-y-6 relative">

              <div className='w-[80px] h-[80px] absolute top-0 right-[525px] transform rotate-45 rounded-2xl z-50 bg-white 
              max-xl:left-[20px] max-md:-top-[400px] max-md:left-[460px] max-sm:left-[470px] dark:bg-gray-900 '>
                <img src={HatImg} alt=""  className='absolute -top-[40px] right-[10px] -rotate-45 max-xl:-top-[60px] max-sm:-top-[60px]'/>
                <div className='w-10 h-10 rounded-full bg-primary rotate-12 mx-auto mr-9 mt-9 max-xl:mr-5 max-xl:mt-5 max-xl:w-12 max-xl:h-12'>
                   <img src={VidImg} alt=""  className="rotate-180 "/>
                </div>
               
              </div>
          
              <motion.h1
              variants={SliderRight(0.4)}
              initial="hidden"
              animate="visible"
                className="text-5xl font-semibold lg:text-6xl 
                !leading-tight
                text-right max-xl:ml-[150px] max-md:text-center max-md:ml-[10px]"
              >
                عنوان  <span className="text-primary max-xl:mr-[150px] max-md:mr-[10px]">آموزشگاه</span>
              </motion.h1>
              <motion.p
                variants={SliderRight(0.6)}
                initial="hidden"
                animate="visible"
                className='text-right font-semibold text-gray-600 max-xl:ml-[150px] max-md:ml-[20px] max-md:text-center dark:text-white'
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
              className="flex gap-8 justify-center md:justify-start 
              !mt-8 items-center relative max-lg:ml-[50px] max-lg:w-[300px] max-md:ml-[100px] "
            >
              {/* <div className='w-10 h-10 rounded-full bg-orange absolute left-[140px] z-50 -top-[15px] max-xl:left-[100px] max-lg:left-[80px]'>
                <img src={SearchImg} alt="" className='px-1.5 py-1.5'/>
                </div>  
                <input placeholder='... دنبال چی میگردی ؟' type="search" className='w-3/4 h-[50px]  absolute right-0 -top-5 rounded-3xl shadow-sm shadow-gray-400  text-right font-semibold
                text-gray-600 text-sm outline-none indent-1 hover:shadow-xl hover:shadow-orange transition-shadow dark:bg-gray-700/70  dark:hover:bg-orange dark:hover:shadow-md dark:hover:transition-colors' />
               */}
              <SearchBar placeholder={'... دنبال چی میگردی ؟'}/>
             
            </motion.div>
          </div>
       
        </div>
      </>
    );
  };

export default Hero
