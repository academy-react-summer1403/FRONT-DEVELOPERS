import {  useState } from 'react';
import secure from '../../../assets/dashboard/secure.svg'

import ChangPassword from '../../../components/dashboard/securitysetting/ChangPass'
import ResetEmail from '../../../components/dashboard/securitysetting/ResetEmail';
import TowStwpLogin from '../../../components/dashboard/securitysetting/TowStwpLogin';

import { IoIosArrowDown } from 'react-icons/io';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

const StdSettings = () => {

  return (
    <div className='py-10'>
      {/* title  */}
      <div className='relative gap-36 flex flex-row-reverse mb-12'>
        <div className='border border-gray-100 w-96'></div>
        
        <h3 className='absolute bottom-[-8px] left-[43.5%] text-lg text-gray-400 
        max-lg:left-[43%]
        max-md:left-[40%]
        '>تنظیمات امنیتی</h3>
        <img className='absolute right-14 bottom-[-16px] rounded-lg' src={secure}/>
        <div className='border border-gray-100 w-96'></div>
      </div>

      {/* accardeion  */}
      <Accordion >

         {/* password */}

         {/* Title  */}
         <AccordionItem className='my-4' header={
            <div className='group relative flex flex-row-reverse mx-8 w-[780px]
              max-xl:w-[650px]
              max-xl:w-[600px]
              max-md:w-[550px]
              max-sm:w-[450px]
            '>
               <p className='absolute text-md text-gray-400 right-2'>تغییر رمز عبور</p>
               <div className='border border-gray-100 w-[80%] mt-4 mr-[15%] max-md:w-[70%] max-md:mr-[20%]'></div>
               <IoIosArrowDown className='absolute text-md text-gray-400 left-4 top-2 transition duration-500 rotate-0 group-hover:rotate-180' />
           </div>}
          >           
           
             {/* Body  */}
             <div>
              <ChangPassword/>
            </div>            
          </AccordionItem>

         {/* tow step login */}
           {/* Title  */}
         <AccordionItem className='my-4' header={           
            <div className='group relative flex flex-row-reverse mx-8 w-[780px]
            max-xl:w-[650px]
              max-xl:w-[600px]
              max-md:w-[550px]
              max-sm:w-[450px]
            '>
              <p className='absolute text-md text-gray-400 right-2'>تایید دو مرحله ای</p>
              <div className='border border-gray-100 w-[78%] mt-4 mr-[17%] max-md:w-[63%] max-md:mr-[29%]'></div>
              <IoIosArrowDown className='absolute text-md text-gray-400 left-4 top-2 transition duration-500 rotate-0 group-hover:rotate-180'/>
            </div>
            }
          >
            
            {/* Body  */}
            <div>
              <TowStwpLogin/>
            </div>
            
         </AccordionItem>

         {/* reset email   */}
         {/* Title  */}
         <AccordionItem className='my-4' header={
            <div className='group relative flex flex-row-reverse mx-8 w-[780px]
            max-xl:w-[650px]
              max-xl:w-[600px]
              max-md:w-[550px]
              max-sm:w-[450px]
            '>
                <p className='absolute text-md text-gray-400 right-2'>ایمیل بازیابی</p>
                <div className='border border-gray-100 w-[80%] mt-4 mr-28
                mr-[15%] max-md:w-[66%] max-md:mr-[23%]
                '></div>
                <IoIosArrowDown className='absolute text-md text-gray-400 left-4 top-2 transition duration-500 rotate-0 group-hover:rotate-180'/>
            </div>
          }
          >
              
              
              {/* Body  */}
              <div>
              <ResetEmail/>
              </div>
         </AccordionItem>

      </Accordion>
      
    </div>
  )
}

export default StdSettings


 
