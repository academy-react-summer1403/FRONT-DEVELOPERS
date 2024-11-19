import React, { useState } from 'react'
import i18n from './i18n';
import { GrLanguage } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import { TranslateSlice } from '../../core/redux/slices/SpeechSlices/TranslateSlice';

const Lg = () => {



  const dispatch =useDispatch()

  const [l, setL] = useState("2")

    return (
      <div className='group '>
        <GrLanguage  className='group mt-9 text-gray-400 dark:text-gray-300'/>
      <div className='hidden group-hover:block absolute bg-white rounded-lg
       shadow-md text-sm grid p-4 justify-items-center font-normal'
      >
        <button className={`cursor-pointer w-full rounded-full block px-2 py-1 my-1 hover:bg-green/40 ${l == "1" ? "bg-green/40" : ""} `} onClick={()=>(dispatch(TranslateSlice.actions.toggleLanguage1()) , setL("1"))}>  English </button>
        <button className={`cursor-pointer w-full rounded-full block px-2 py-1 my-1 hover:bg-green/40 ${l == "2" ? "bg-green/40" : ""} `} onClick={()=>(dispatch(TranslateSlice.actions.toggleLanguage2()) ,  setL("2"))}>  فارسی </button>
        <button className={`cursor-pointer w-full rounded-full block px-2 py-1 my-1 hover:bg-green/40 ${l == "3" ? "bg-green/40" : ""} `} onClick={()=>(dispatch(TranslateSlice.actions.toggleLanguage3()) ,  setL("3"))}>  español </button>
        <button className={`cursor-pointer w-full rounded-full block px-2 py-1 my-1 hover:bg-green/40 ${l == "4" ? "bg-green/40" : ""} `} onClick={()=>(dispatch(TranslateSlice.actions.toggleLanguage4()) ,  setL("4"))}>  Türkçe  </button>

      </div>
  
  
      </div>
    )
  }
  

export default Lg