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
<<<<<<< HEAD
          className="container  flex items-center  flex-nowrap justify-between
      min-h-[650px] relative"
        >
          <img src={BackImg} alt=""  className='w-full z-10 h-full absolute opacity-80'/>
            

   {/* hero image  */}
   <div className="flex w-[600px] h-[450px] justify-center max-xl:w-[400px] z-50 items-center  relative -mr-16">


        
        
            <div style={{boxShadow:"-2px 0px 5px 0px #00000026"}} className='w-[180px] max-xl:w-[150px] max-lg:w-[130px] max-md:hidden  max-lg:h-[95px] max-xl:top-[-30px] absolute top-[-20px] left-[-20px] h-[105px] ml-5 bg-white rounded-[10px]  z-40 
               dark:bg-gray-700/70  dark:hover:bg-gray-700/100  dark:hover:transition-colors'>
              <div style={{boxShadow: "0px 0px 5px 0px #00000059"}} className='flex items-center justify-center  max-lg:w-[48px] max-lg:h-[48px] bg-[#FFB803] rounded-full max-xl:ml-[40px] ml-[60px] mt-[-30px] w-[68px] h-[68px] '>
                <img className='  w-[45px] h-[45px] max-lg:w-[35px] max-lg:h-[35px]' src="https://s3-alpha-sig.figma.com/img/964f/1424/c9d17b05e8bbb686022aab84b0a67d3f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f0uhG151j7P91t9POto~TDdcx0K~1s-Ox6HA3kT2TJK7YarMAykNDpjDnnXd3gomWn9LyitL8mxgp0NVlZk9cbACowFE8qLwHFPf4wCCXWlXLsvdfqjyApVohI9zt6jHUuUXUyVYWSc2NavwyJqio8pqFhXcrl44flKUPzqU0pPquzgn5b-1aBp3k7AKudhuWpLCw9t6Aonnrz6oZcMJpkIwAo2uSOJGXR0W72t9NRUOYU3yVvB35cTqMweSvAfdW4XwUYrwSVYkAMB8HmAxAY84J1EdhoDxQigqGEResrvDl48KblV3Dv8M0Zm4vE4Dk0kDlA~Hd7YtHiziiCw7gA__" alt="" />
              </div>
              <h1 className=' mx-auto max-xl:text-[20px] max-xl:w-[140px] h-[40px] w-[170px] mt-3 text-center text-[25px] font-normal font-Yekan text-[#434343] text-gray-800/90  dark:text-white'>+1000دانشجو</h1>
            </div>
       


   <motion.div
              initial={{opacity:0 , x:200}}
              animate={{opacity:1 , x:0}}
              transition={{type:"spring" , stiffness:100 , delay:0.2}}
  
              className="w-[447px]  h-[447px] relative max-md:w-[800px]  max-lg:w-[380px] max-xl:left-10
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


     <div style={{boxShadow:"-2px 0px 5px 0px #00000026"}} className='w-[180px]  dark:hover:bg-gray-700/100 dark:hover:transition-colors dark:bg-gray-700/70 max-lg:w-[130px] max-md:hidden  max-lg:h-[95px]  max-xl:w-[150px] max-xl:bottom-[-80px] max-xl:right-[-100px]  absolute bottom-[-90px] right-[-50px] h-[105px] ml-5 bg-white rounded-[10px]  z-40  
              '>
              <div style={{boxShadow: "0px 0px 5px 0px #00000059"}} className='flex  max-lg:w-[48px] max-lg:h-[48px] items-center justify-center max-xl:ml-[40px]   bg-[#E48900] rounded-full ml-[60px] mt-[-30px] w-[68px] h-[68px] '>
                <img className='  w-[45px] h-[45px]  max-lg:w-[35px] max-lg:h-[35px]' src="https://s3-alpha-sig.figma.com/img/4023/9fba/94fd981a002097b15ac8447a32011119?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WGIAvGcGoUeBrR1j90KPqb-L6OyIj0N7LuazF6YCrogopaKn~g339clcY~JkS8AJHsjsfaZV0Vm1HtmNV4T~uyD~6N6MBiOASQpT40PGipNpqYaF-y79T79FQe~yehiD7j6k0Xr8eu0-vDxlWtDuqaf110lOB-jR8XPcN2v5Tzxcg2wZooZGG0R-2d~lAEBmuu~3heABblQKMAn4Xa7KTgCHIoiunDMOPzM7sphevLqPse04fQr-Epew2jaJc09ACXfHMFIQB1orCFTnPYLmoTT9lItwcrplZxpxAMLU4RpHQN8vfj5xMxhWeLJLX3pxtX2hRWPK0PIpNuzFiAZTtw__" alt="" />
              </div>
              <h1 className=' mx-auto h-[40px] w-[170px] mt-3 text-center text-[25px] max-xl:text-[20px] max-xl:w-[140px]  font-normal font-Yekan text-[#434343] text-gray-800/90  dark:text-white'>+50 مدرس</h1>
            </div>


    </div>

          {/* brand section  */}
          <div
            className=" max-xl:w-[395px]  w-[495px] h-[280px] max-lg:mr-[0px] max-md:mr-[10px]  max-md:ml-[-300px] flex flex-wrap justify-end"
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
              className="flex  bg-white max-md:z-50 rounded-[35px] max-lg:mt-[-80px] max-xl:w-[315px] max-md:w-[220px] max-lg:w-[260px] h-[65px] w-[415px] "
            >
              <div className='w-[48px] h-[49px] rounded-full bg-[#D47300] absolute left-[10px] top-[8px] flex items-center justify-center'>
                <img src={SearchImg} alt="" className='px-1.5 py-1.5'/>
                </div>  
                <input style={{boxShadow:" 0px 1px 3px 0px #00000033"}} placeholder='... دنبال چی میگردی ؟' type="search" className='w-full h-full  rounded-[35px]  text-right font-normal
                font-Yekan text-[#AAAAAA] text-[16px] pr-5 outline-none ' />
              
              
             
            </motion.div>
=======
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
>>>>>>> e2bc6f3078ddf1de989bd059195101b674e9dba1
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
