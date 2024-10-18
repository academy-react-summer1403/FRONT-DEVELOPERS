import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegTrashCan } from "react-icons/fa6";

const BasketCard = () => {
  return (
    <>
    <div className=' flex items-center justify-between flex-row-reverse p-5 h-[180px]  
    w-[60%] max-lg:w-[100%] rounded-[30px] cursor-pointer transition-all duration-200 hover:bg-[#ebe9e95d] bg-[#ebe9e9c5] '>
       
    <img className=' h-[150px] w-[30%] rounded-[30px]  '
    src="https://classapi.sepehracademy.ir//Pictures/News/Screenshot%20(209)_f93a9310-5ed0-4bb8-a150-02945f72a73a.png" alt="" />
      
    <div className=' ml-10  px-3 py-5 rounded-[30px] h-[150px] w-[50%]'>

        <div className=' items-center px-1 flex max-sm:gap-3 justify-between '> 
            <h3 className='text-[15px] flex items-center gap-1 text-[#525151] max-md:text-[12px] font-medium'>مبتدی 
            <svg width="15" height="15" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.43753 6.98291L1.43115 8.60156L4.43753 10.2202M4.43753 6.98291L8.44531 9.14111L12.4531 6.98291M4.43753 6.98291L1.43115 5.36426L8.44531 1.5874L15.4595 5.36426L12.4531 6.98291M4.43753 10.2202L1.43115 11.8389L8.44531 15.6157L15.4595 11.8389L12.4531 10.2202M4.43753 10.2202L8.44531 12.3784L12.4531 10.2202M12.4531 6.98291L15.4595 8.60156L12.4531 10.2202" stroke="#888888" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></h3>

            <h3 className='text-[#333333] text-[18px] font-semibold  line-clamp-1 flex justify-end max-xl:w-36  max-2xl:w-60 max-md:w-24 text-nowrap max-md:text-[13px]'>نام دوره موردنظر ظیرظیذطیدطبئل</h3>
        </div>

        <div className=' mt-12  items-center px-1 max-xl:gap-2 flex justify-between '>
            <div className='max-xl:text-[12px] max-md:text-[10px] flex gap-1 items-center text-[15px] text-[#005B58] mt-1'>تومان
            <h3 >90000000</h3></div>
          
            <h3  className='max-xl:text-[12px]  line-clamp-1 text-nowrap  object-cover justify-end flex gap-1 items-center text-[15.5px] w-40 font-medium text-[#757575]'> لازتولتتاللمدرس دوره موردنظر 
            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.62567 4.23179C9.62567 4.97817 9.34125 5.69399 8.83499 6.22176C8.32874 6.74954 7.6421 7.04604 6.92615 7.04604C6.21019 7.04604 5.52356 6.74954 5.0173 6.22176C4.51104 5.69399 4.22663 4.97817 4.22663 4.23179C4.22663 3.4854 4.51104 2.76959 5.0173 2.24182C5.52356 1.71404 6.21019 1.41754 6.92615 1.41754C7.6421 1.41754 8.32874 1.71404 8.83499 2.24182C9.34125 2.76959 9.62567 3.4854 9.62567 4.23179ZM1.52783 14.8269C1.55096 13.3502 2.12989 11.9422 3.13975 10.9065C4.14962 9.87074 5.5095 9.29028 6.92615 9.29028C8.34279 9.29028 9.70268 9.87074 10.7125 10.9065C11.7224 11.9422 12.3013 13.3502 12.3245 14.8269C10.6309 15.6364 8.78928 16.0543 6.92615 16.0516C4.99977 16.0516 3.1713 15.6134 1.52783 14.8269Z" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></h3>

        </div>
        </div>


        <FaRegTrashCan className='text-red-700  -mt-[86px] -ml-20 w-5 h-5' />


    <NavLink className="flex items-center mt-28 gap-1" to={""}>
        <svg width="4" height="8" className='mt-1' viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M5.84375 10.1875L1.15625 5.5L5.84375 0.8125" stroke="orange" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <h3 className='  text-orange text-[12px]'>   جزئیات دوره
        </h3>      
    </NavLink>
   
    </div> 
    </>
  )
}
export default BasketCard