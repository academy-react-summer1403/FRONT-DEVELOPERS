import React, { useState } from 'react'
import { motion } from 'framer-motion';
import HeroAImg from "../../assets/landing/hero section pic.svg";
import HeroBImg from "../../assets/landing/Ellipse 4.svg";
import { SliderRight } from '../../utility/animation';
import SearchImg from "../../assets/landing/Search.svg";
import BackImg from "../../assets/landing/Rectangle 8.svg";
import {  useCourseLandingSearchBar, useLandingReport } from '../../core/services/query/queries';
import { NavLink } from 'react-router-dom';


<<<<<<< HEAD

=======
import { useDispatch, useSelector } from "react-redux";
import { useLandingReport } from '../../core/services/query/queries';
import { search } from '../../core/redux/slices/QueryState/SearchSlice';
import { useTranslation } from 'react-i18next';
>>>>>>> d622bce3adf31c06318d5bf635453ca34a4c5073


const Hero = () => {

  const { t } = useTranslation();


const reportLanding =  useLandingReport()
console.log(reportLanding)


  const [search , setSearch] = useState("")
  console.log(search)
    
  const params = {
    Query : search
  }

  const  CourseSearchBar =  useCourseLandingSearchBar(params)
  console.log(CourseSearchBar) 


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
              <div style={{boxShadow: "0px 0px 5px 0px #00000059"}} className='flex items-center justify-center z-0 max-lg:w-[48px] max-lg:h-[48px] bg-[#FFB803] rounded-full max-xl:ml-[40px] ml-[60px] mt-[-30px] w-[68px] h-[68px] '>
                <img className='  w-[45px] h-[45px] max-lg:w-[35px] max-lg:h-[35px]' src="https://s3-alpha-sig.figma.com/img/964f/1424/c9d17b05e8bbb686022aab84b0a67d3f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c-RFfMDMK2zDKM2Yh40XdwgD~UOLnvgPhLREFQi7HIhix~KXTj9LiTAD0rv7uPu8MuAVX-kXL65DPakpcX9zG3ModJJxROjvinHz1DnEPFFAZgI5kAlLejbKWZYveo-z21uEJ2fJ8x09M-7DLW65vAmZzO5LB9SPMPLNGYBhUV1b1xtJRpU-fcmWsaON848Rr0~WQ~xYkR1cCohShK3dKh21hrhlmIYrIg5A0qoo0Y-karZPwebW7mhylDzG62Q1g6X94iNhEgURKstqbVtJgBZXhja7ltoGJMHslpJrgEpFmGjYFJfrIypwVrWIxRt5dSKc9-hZcwpruYjf6p9PAg__" alt="" />
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


                <img src="https://s3-alpha-sig.figma.com/img/b232/c869/d848a989ad64492f82a29bd516c975f6?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NB~bLoUzJJYtOBqoajdnW8W9oOEGdtjxbjb-UpBU2zeEDHonut2cKB1Woqk7FnAt4pel0RSNp7F-agO3q~AiQy0HDTZ-VzMgB-XFEpO6barkVuXNQU2alcxv5xzSfiPY4sQUk0wpUVmitKgVYPEDa6W-g0Pix~utWrEPDpogCrYsp7HQXgnaWErvcHSxRe6Odbv6GTNnsgzl28EYWgCMJ32Wtb~EEGozQqFmZWSeHiBHAfxsPdm-217HJKBRTfW~AM~4tgKqs22hPXpjCFVSuAyzlNdpkse75YYpN~wT4NN1txbER-iSwNCCF~WRKMEN7PKuvRgr2mYQtDPrAlkuFw__" alt=""  className='absolute max-lg:hidden top-[-40px] right-[10px] w-[90px]  h-[90px] rotate-[330deg] '/>



                <div className='w-[50px] flex items-center justify-center h-[50px] max-lg:hidden rounded-full bg-[#01CEC9] rotate-12 mx-auto mr-9 mt-9 '>
                  <img className='w-[37px] h-[37px]  transform rotate-180' src="https://s3-alpha-sig.figma.com/img/78ed/3f44/092bdd8cd4edd77bf81feba41276ca6f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SxmLYLWZmvOEeVAG9KqGUDohMDY5xN~IX0LStGao2wlWJDU2bbGPdmCpSVSCfjDPbyADox8PCu~K949NcAiwYdjT7i6RkHj64b3mcdCcYmMmVVCPjMVGuKpL0Pn39VZmSvejgcj79BH4TgGXqj1ZRRSSHaWjZkb9kWFWIHWXbBlVewMbDebecO0Vjt~s3cmKoMhatsb7Jpf4ZPOKUENx5mCxR0ROt7sd3llrYPxPDazKCwSyV~c0S6xNEoCHZY6dLR2-6KqFvCbbOMLIRp9t3goMitdrwBO0YgBmUW0vqMM2b3COBF34qbLxZYGxeVXwj7JFC8sylp7mGA57ckQWAA__" alt="" />
                  
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
                <img className='  w-[45px] h-[45px]  max-lg:w-[35px] max-lg:h-[35px]' src="https://s3-alpha-sig.figma.com/img/4023/9fba/94fd981a002097b15ac8447a32011119?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gyZK44ovarSl-94O9emU~o3CQtpbKdG3aU0fHVDYTsePiC1t7Zqd4N7fpwvQH0cUcsnY63-Mx37UPf9AF2c9~MMd8JsZywVj3T33AVYkqc-~IxB8dcQszKt5ZJCt9436F4dk9BOF9Hhe-a5nZiEmbBvqQfDeOUA1UZwneibmAGp8RQcqqFXPF4HX7RiRerq1ygAMNy5Yp6qTnmULOkJ9-JmxO80Uit79IzsivgKKH4s9Fynb-nUF7Yv7rl8L3AJlkUSp-floqasrmNJk9yMg0UK~~4y2SaAcB5lmyq-c1QsQUSAfsrx1oahElBjEz~V9sdGu26pNGrgKRfonWiY~ng__" alt="" />
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
               <h1 className="text-[#01CEC9] max-lg:text-[45px] max-md:text-[50px]  text-right font-Yekan font-normal max-xl:text-[50px]  text-[60px]">{t('title')}</h1>عنوان 

               
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
              className="flex relative bg-white max-md:z-50 rounded-[35px] max-lg:mt-[-80px] max-xl:w-[315px] max-md:w-[220px] max-lg:w-[240px] h-[65px] w-[415px] z-[5000]"
            >
              <div className='w-[48px] h-[49px] rounded-full bg-[#D47300] absolute left-[10px] top-[8px] flex items-center justify-center'>
                <img src={SearchImg} alt="" className='px-1.5 py-1.5'/>
                </div>  
                <input
            onChange={(e) => setSearch(e.target.value)}
                
                style={{boxShadow:" 0px 1px 3px 0px #00000033"}} placeholder='... دنبال چی میگردی ؟' type="text" className='w-full h-full  rounded-[35px]  text-right font-normal
                font-Yekan text-[#AAAAAA] text-[16px] pr-5 outline-none' 
                 
                />
            
            </motion.div>
              <div className=' w-[400px] top-[430px] z-[5000] bg-white absolute flex flex-col shadow-lg rounded-lg mt-4  overflow-y-scroll px-3 scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-600'>
                {
                   CourseSearchBar.data?.courseFilterDtos.map((data)=>(
                    <div>
                      <NavLink to={"/courses-detail/" + data?.courseId}>
                         <p className='text-black text-right text-lg mt-1 cursor-pointer z-[5000] hover:bg-red-400'>{data?.title}</p>
                      </NavLink>
                    </div>
                  ))
                }
              </div>
          </div>
       
        </div>
      </div>
    );
  };

export default Hero
