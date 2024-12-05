

import React, { useEffect, useState } from 'react'

import first from "../../assets/darkmode/first.svg"
import  light from "../../assets/darkmode/icons8-moon-80(1).png"
import second from "../../assets/darkmode/second.svg"
import third from "../../assets/darkmode/third.svg"


import { useDispatch, useSelector } from 'react-redux'
import { initializeTheme, setTheme } from '../../core/redux/slices/SpeechSlices/Theme'


import { motion } from "framer-motion";
import AuthB1Img from "../../assets/landing/authback1.png";
import Squer from "../../assets/landing/one.svg";
import Back from "../../assets/landing/authBack.png";
import Background from "../../assets/landing/backgroundV.png";
import more from "../../assets/landing/moreCourse.png";
import * as yup from "yup";
import { NavLink, useNavigate } from 'react-router-dom';
import http from "../../core/services/interceptor";

import { handleToken } from '../../core/redux/slices/QueryState/TokenSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { IoEyeOutline } from 'react-icons/io5';
import { FaRegEyeSlash } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { postQuery } from '../../core/services/mutation/Authmutation';
import { useTranslation } from 'react-i18next'


const QA1 = () => {
    const theme = useSelector((state) => state.ThemeSlice.theme);
    const dispatch = useDispatch();
    
    const { t,i18n  } = useTranslation();
    const [l, setL] = useState(localStorage.getItem('language1'));
    
  
    const handleThemeChange = (newTheme) => {
      dispatch(setTheme(newTheme));
    };
    useEffect(() => {
        dispatch(initializeTheme());
      }, [dispatch]);

  return (
    <div className="container relative">
    <img
      src={Back}
      alt=""
      className="fixed rotate-180 left-[300px] top-[30px] w-[1000px] opacity-30"
    />

    {/* hero image  */}
    <div className="flex justify-center items-center relative">
      <motion.div
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
        className="w-[800px]  h-[500px] mt-[10px] relative
     rounded-2xl 
      "
      >
       


        <div
          className="absolute w-[90px] h-[50px] z-[5000] text-center font-semibold text-green hover:text-orange dark:text-white 
      leading-[50px] -bottom-[10px] left-[20px]"
        >
         <NavLink to={"/"}> <img src={more} alt="" /></NavLink>
        </div>

        <div className="w-full h-full border border-[#fff0] relative"><img
            src={Background}
            alt=""
            className="w-full h-full  opacity-80 dark:opacity-50 absolute top-0 left-0  "
          />
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            //   src={HeroAImg}
            alt=""
            className="w-[350px] h-[360px]   mx-auto mt-[10%] max-md:mt-[15%] relative"
          >






            {/* formik section  */}

            <div className="absolute w-[300px] h-[200px] left-[25px] top-[120px] ">
              {/* text section  */}

              <h1 className="w-[200px] h-[50px] text-green text-xl mx-auto text-center absolute left-[50px] -top-[70px] font-semibold">
                {t("theme")}
              </h1>

              {/* form  */}

              
                <div className='relative flex flex-col gap-2'>
                 

                  <div onClick={() => handleThemeChange("maintheme")} className={`flex w-[200px]  ${l==2 ? "ml-56  items-center" :" items-end"}`}>  <img src={first} className=' h-[20px] pr-2  ' alt="" /> 
                   <h1 className=" text-right   
                    text-[12px] font-semibold text-[#a11a1a]  ">{t("green")}
                  </h1></div>
                  <hr/>
                  <div onClick={() => handleThemeChange("secondTheme")} className={`flex w-[200px] ${l==2 ? "ml-[225px] items-center" :" items-end"} `}>  <img src={second} className=' h-[20px] pr-3  ' alt="" /> 
                   <h1 className=" text-right   
                    text-[12px] font-semibold text-[#a11a1a]  "> {t("purple")}    
                  </h1></div>
                  <hr/>
                  <div onClick={() => handleThemeChange("thirdTheme")} className={`flex w-[200px] ${l==2 ? "ml-[225px] items-center" :"  items-end"}`}>  <img src={third} className= {`h-[20px]  ${l==2 ? "pr-6" :"pr-3"} `} alt="" /> 
                   <h1 className=" text-right   
                    text-[12px] font-semibold text-[#a11a1a]  ">{t("blue")}
                  </h1></div>
                  <hr/>
                  <div onClick={() => handleThemeChange("dark")} className={`flex w-[200px]   ${l==2 ? "ml-56  items-center" :" items-end"} `}>  <img src={light} className=' h-[20px] pr-1  ' alt="" /> 
                   <h1 className=" text-right   
                    text-[10px] font-semibold text-[#a11a1a]  ">{t("night")} 
                  </h1></div>
             



                    
                    
                   
                
                   
                   
                  
                    
              
                  <NavLink to={localStorage.getItem('selectedOption')=="" ? "/auth/Qfeacher" : "/"}>

                
             
                  <button 

                    type="submit"
                    className="w-[90px] h-[30px] rounded-2xl 7 absolute top-[170px] right-[-10px] text-green text-[10px] font-semibold"
                  >
                     {t("next")}
                  </button>
            </NavLink>

                  <NavLink to={"/auth/s1"}> 
                  <button
                    
                    className="w-[90px] h-[30px] rounded-2xl  absolute top-[170px] left-[-10px] text-green text-[10px] font-semibold"
                  >   {t("last")}
  
                  </button>
                  </NavLink>   
                </div>
              

              
            </div>






            <motion.img src={AuthB1Img} className="w-full h-full" />

            {/* number section  */}
            <motion.div className="absolute  top-[65px] -left-[40px]">
              <p className="absolute text-red-500 top-[12px] left-[23px]">
               2
              </p>
              <img src={Squer} alt="" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

 
    </div>
  </div>
  )
}

export default QA1


