import React, { useState } from 'react'
import i18n from './i18n';
import { style } from 'framer-motion/client';
import { GrLanguage } from "react-icons/gr";

const Lg = () => {



  const toggleLanguage = () => {
     const newLanguage = i18n.language === 'en' ? 'fa' : 'en';
    i18n.changeLanguage(newLanguage);
    console.log("bro")
  };
    return (
      <div >
      <button className="cursor-pointer   "onClick={toggleLanguage}>
      <GrLanguage  className='mt-9 text-gray-400 dark:text-gray-300'/></button>
  
  
      </div>
    )
  }
  

export default Lg