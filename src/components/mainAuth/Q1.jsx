

import React, { useEffect, useState } from 'react'
import  light from "../../assets/darkmode/icons8-moon-80(1).png"
import first from "../../assets/darkmode/first.svg"
import second from "../../assets/darkmode/second.svg"
import third from "../../assets/darkmode/third.svg"

import { initializeTheme, setTheme } from '../../core/redux/slices/SpeechSlices/Theme'


import { motion } from "framer-motion";
import AuthB1Img from "../../assets/landing/authback1.png";
import Squer from "../../assets/landing/one.svg";
import Back from "../../assets/landing/authBack.png";
import Background from "../../assets/landing/backgroundV.png";
import more from "../../assets/landing/moreCourse.png";
import { GrLanguage } from "react-icons/gr";
import { useDispatch } from 'react-redux'
import { TranslateSlice } from '../../core/redux/slices/SpeechSlices/TranslateSlice'
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'




const QA2 = () => {

    const dispatch = useDispatch();
    const { t,i18n  } = useTranslation();
    const [l, setL] = useState(localStorage.getItem('language1') || "2");
    const [l1, setL1] = useState(localStorage.getItem('language') || "fa");
  
  
    useEffect(() => {
      localStorage.setItem('language1',l );
      localStorage.setItem('language',l1 );
    }, [l1,l]);
  
    const handleLanguageChange = (languageId, action) => {
      dispatch(action());
      setL(languageId);
    };
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
            className="w-full h-full opacity-80 dark:opacity-50 absolute top-0 left-0  "
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

              <h1 className={`w-[200px] h-[50px] text-green text-xl mx-auto text-center absolute left-[50px] -top-[70px] font-semibold `}>
              {t('lang')}
              </h1>

              {/* form  */}

              
                <div className='relative flex flex-col gap-3'>
                
                  <button
          className={`cursor-pointer w-full  text-right    block px-2   hover:border-b-pink-300 ${l === "2" ? "text-green/50  " : ""}`}
          onClick={() => (handleLanguageChange("2", TranslateSlice.actions.toggleLanguage2),setL1("fa"))}
        >
          فارسی
        </button>   
        
                   
                <button
          className={`cursor-pointer w-full  text-right  block px-2    ${l === "1" ?  "text-green/50  " : " "}`}
          onClick={() =>( handleLanguageChange("1", TranslateSlice.actions.toggleLanguage1),setL1("en"))}
        >
          English
      
        </button>
       
        <button
          className={`cursor-pointer w-full  text-right  block px-2    ${l === "3" ? "text-green/50  " : " "}`}
          onClick={() => (handleLanguageChange("3", TranslateSlice.actions.toggleLanguage3,setL1("es")))}
        >
          español
        
        </button>
        <button
          className={`cursor-pointer w-full  text-right  block px-2    ${l === "4" ?  "text-green/50 " : " "}`}
          onClick={() => (handleLanguageChange("4", TranslateSlice.actions.toggleLanguage4),setL1("tr"))}
        >
          Türkçe
       
        </button>
      
                   
                   
                  
                    
              
                  <NavLink to={"/auth/s2"}>

                
             
                  <button 

                    type="submit"
                    className={`w-[90px] h-[30px] rounded-2xl 7 absolute top-[170px]  text-green text-[10px] font-semibold right-[-10px]`}
                  >
                       {t("next")}
                  </button>
            </NavLink>

                
                </div>
              

              
            </div>






            <motion.img src={AuthB1Img} className="w-full h-full" />

            {/* number section  */}
            <motion.div className="absolute  top-[65px] -left-[40px]">
              <p className="absolute text-red-500 top-[12px] left-[23px]">
               4
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

export default QA2


