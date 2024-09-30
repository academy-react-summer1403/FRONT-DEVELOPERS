import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Comments = () => {

  const [showMore, setShowMore] = useState(true);

  return (
    <>

<div className="mt-[20px]   ">

<div className=' relative  border'>
      <h4 className=" mark mt-10">نظرات</h4>
      <div style={{boxShadow:" 0px 1px 2px 0 rgba(0, 0, 0, 0.25)"}} className="bg-white   mt-[35px] rounded-[15px] h-[832px] w-[809px]  p-[20.5px]  flex flex-wrap  justify-between">

        <div className='border w-full h-[37px] '><button className=' border w-[185px] h-[37px] rounded-[7px] bg-[#00E2DC]'
        
        >ارسال دیدگاه جدید


            </button></div>
        <div className=" border  w-full h-6 relative">

            <div></div>
         
        </div>


        <button
                onClick={() => setShowMore(!showMore)}
                className="border-[#E48900] border-[1px] text-[#D47300] 
leading-[32px] font-normal font-Yekan text-[12px] flex items-center w-[120px] h-[35px] rounded-[25px] mx-auto justify-center gap-2 mt-3  "
              >
                {showMore ? (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.75 1.125L5 4.875L1.25 1.125" stroke="#E48900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  
                  
                ) : (
                    <svg width="10" height="6" className='rotate-180' viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 1.125L5 4.875L1.25 1.125" stroke="#E48900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    

                )}
               مشاهده بیشتر
              </button>
      </div>
    </div></div>
      
    </>
  )
}

export default Comments
