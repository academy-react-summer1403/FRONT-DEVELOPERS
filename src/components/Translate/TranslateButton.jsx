import React, { useState } from 'react'
import i18n from './i18n';
import { GrLanguage } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import { TranslateSlice } from '../../core/redux/slices/SpeechSlices/TranslateSlice';

const Lg = () => {



  const dispatch =useDispatch()



    return (
      <div >
      <button className="cursor-pointer   "onClick={()=>dispatch(TranslateSlice.actions.toggleLanguage())}>
      <GrLanguage  className='mt-9 text-gray-400 dark:text-gray-300'/></button>
  
  
      </div>
    )
  }
  

export default Lg