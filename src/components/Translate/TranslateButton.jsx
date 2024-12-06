import React, { useState, useEffect } from 'react';
import i18n from './i18n';
import { GrLanguage } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import { TranslateSlice } from '../../core/redux/slices/SpeechSlices/TranslateSlice';

const Lg = () => {
  const dispatch = useDispatch();

 
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
    <div className='group relative'>
      <GrLanguage className='group mt-9 text-gray-400 dark:text-gray-300  cursor-pointer' />
      <div className='hidden group-hover:block absolute bg-white rounded-lg -left-8
       shadow-md text-sm grid p-4 justify-items-center font-normal'
      >
        <button
          className={`cursor-pointer w-full rounded-full block px-2 py-1 my-1 hover:bg-green/40 ${l === "1" ? "bg-green/40" : ""}`}
          onClick={() =>( handleLanguageChange("1", TranslateSlice.actions.toggleLanguage1),setL1("en"))}
        >
          English
        </button>
        <button
          className={`cursor-pointer w-full rounded-full block px-2 py-1 my-1 hover:bg-green/40 ${l === "2" ? "bg-green/40" : ""}`}
          onClick={() => (handleLanguageChange("2", TranslateSlice.actions.toggleLanguage2),setL1("fa"))}
        >
          فارسی
        </button>
        <button
          className={`cursor-pointer w-full rounded-full block px-2 py-1 my-1 hover:bg-green/40 ${l === "3" ? "bg-green/40" : ""}`}
          onClick={() => (handleLanguageChange("3", TranslateSlice.actions.toggleLanguage3,setL1("es")))}
        >
          español
        </button>
        <button
          className={`cursor-pointer w-full rounded-full block px-2 py-1 my-1 hover:bg-green/40 ${l === "4" ? "bg-green/40" : ""}`}
          onClick={() => (handleLanguageChange("4", TranslateSlice.actions.toggleLanguage4),setL1("tr"))}
        >
          Türkçe
        </button>
      </div>
    </div>
  );
};

export default Lg;
