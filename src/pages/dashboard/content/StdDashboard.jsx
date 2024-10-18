import { useState } from 'react'
import { IoPersonOutline } from 'react-icons/io5'
import { IoIosArrowBack } from 'react-icons/io'
import reserve from '../../../assets/dashboard/Group 87.svg'
import buy from '../../../assets/dashboard/Group 86.svg'
import alert from '../../../assets/dashboard/Frame.svg'
import cours from '../../../assets/dashboard/Rectangle 111.svg'



const StdDashboard = () => {

  

  return (
    <div className='px-8 py-2 max-lg:px-4
      max-lg:px-1
      max-sm:px-1
    '>

      <div className='relative my-12 flex flex-row-reverse gap-6 px-2 
         max-xl:flex-col-reverse   max-xl:items-center  max-xl:gap-12
      '>

        <div className='flex flex-row-reverse gap-6 max-sm:gap-1'>

          <div style={{boxShadow:"0px 1px 1px 1px rgba(0,0,0,0.1)"}}
              className='relative flex w-[180px] bg-gray-100 dark:bg-gray-400/40   text-right px-6 py-2 rounded-lg mt-12'>
                <img src={buy} className='absolute bottom-10'/>
                <div className='ml-8'>
                  <p className='text-xl text-primary font-semibold'>دوره4 </p>
                  <p className='text-lg text-gray-400 '>شرکت کردید</p>
                </div>
                
            </div>

            <div style={{boxShadow:"0px 1px 1px 1px rgba(0,0,0,0.1)"}}
              className='relative flex w-[180px] bg-gray-100 dark:bg-gray-400/40  text-right px-6 py-2 rounded-lg mt-12'
            >
              <img src={reserve} className='absolute bottom-10'/>
                <div className='ml-14'>
                  <p className='text-xl text-amber-400 font-semibold'>2دوره </p>
                  <p className='text-lg text-gray-400'>رزرو کردید</p>
                </div>           
            </div>  
        </div>              
        
        <div className='flex gap-2 pl-0 xl:absolute xl:left-2
        max-lg:mx-auto 
        '>
          <div className=' w-24 h-24 border-[6px] border-secondary rounded-full mt-4
           shadow-sm text-teal-900 dark:text-white font-semibold text-center leading-[80px]'>
              100% 
          </div>
          <p className='w-56 text-center text-gray-400 mt-8 '>
            برای شرکت در دوره ها باید حداحقل 80% پروفایل خود را کامل کنید
          </p>
        </div>
      </div>

      <div style={{boxShadow:"0px 1px 1px 1px rgba(0,0,0,0.1)"}}
        className='relative m-2 my-12 bg-cyan-50/40  dark:bg-gray-600/70 rounded-xl px-10 py-2
        max-lg:px-4
        max-sm:mx-0 max-sm:px-1
        '
      >
        <img src={alert} className='absolute bottom-40'/>
        <h3 className='text-right py-2 text-md text-gray-500 dark:text-gray-200 font-semibold'>جدید ترین اخبار و مقالات</h3>

        <div className=''>

          <div className='relative flex flex-row-reverse py-1 border-dashed border-b-[1.5px] border-gray-400 gap-4'>
            <div className='text-right flex py-2 gap-2 max-sm:gap-0 '> 
              <p className='text-sm font-medium text-red-600 dark:text-red-800'>جدید</p>
              <p className='text-sm text-gray-600  dark:text-gray-400'> .منتشر شد{ "Next.js"} دوره آموزش جامع از پایه تا پیشرفته </p>              
            </div>     
            <p className='absolute left-0 py-3 text-xs text-gray-400'>1402/11/30</p>      
          </div>

          <div className='relative flex flex-row-reverse py-1 border-dashed border-b-[1.5px] border-gray-400 gap-4'>
            <div className='text-right flex py-2 gap-2 '> 
              <p className='text-sm text-gray-600 dark:text-gray-400'> .تخفیف  ویژه دوره ریکت را از دست ندهید</p>              
            </div>     
            <p className='absolute left-0 py-3 mr-6 text-xs text-gray-400'>1402/11/25</p>      
          </div>

          <div className='relative flex flex-row-reverse py-1 gap-4'>
            <div className='text-right flex py-2 gap-2 '> 
              <p className='text-sm text-gray-600 dark:text-gray-400'> .به روز شد{ "tailwinds"} دوره آموزش  </p>              
            </div>     
            <p className='absolute left-0 py-3 text-xs text-gray-400'>1402/11/23</p>      
          </div>

        </div>

      </div>

      <div className='m-2 border-t grid grid-cols-2
      max-lg:grid-cols-1
      max-md:
      max-sm:
      '>
         {/* :دوره های پیشنهادی */}
        <div className='grid-col-1 mx-6 my-4'>
          <h3 className='text-right py-4 text-md text-gray-500 dark:text-gray-300 font-semibold'>:دوره های پیشنهادی</h3>

          <div>
            <div style={{boxShadow:"0px 1px 1px 1px rgba(0,0,0,0.1)"}}
              className='relative bg-gray-100 dark:bg-gray-400/40  rounded-md p-2 my-4 flex gap-6'
            >
              <img src={cours}/>
              <div className='absolute right-0 px-2'>
                <h1 className='right-2 text-teal-900 text-sm'>آموزش جامع ریکت جی اس</h1>
                <div className='flex flex-row-reverse mt-4'>
                  <p className='flex text-[11px] text-primary gap-1'><IoIosArrowBack className='mt-1'/>مشاهده دوره </p>
                </div>
              </div>
            </div>

            <div style={{boxShadow:"0px 1px 1px 1px rgba(0,0,0,0.1)"}}
              className='relative bg-gray-100 dark:bg-gray-400/40 rounded-md p-2  flex gap-6'
            >
              <img src={cours}/>
              <div className='absolute right-0 px-2'>
                <h1 className='right-2 text-teal-900 text-sm'>آموزش جامع ریکت جی اس</h1>
                <div className='flex flex-row-reverse mt-4'>
                  <p className='flex text-[11px] text-primary gap-1'><IoIosArrowBack className='mt-1'/>مشاهده دوره </p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex text-gray-400 text-[10px] pl-[35%] my-4 gap-2'><IoIosArrowBack className='mt-1'/>مشاهده همه </div>
        </div>

        {/* :دوره های در حال برگزاری */}
        <div className='grid-col-1 mx-6 my-4'>
          <h3 className='text-right py-4 text-md text-gray-500 dark:text-gray-300 font-semibold'>:دوره های در حال برگزاری</h3>

          <div>
            <div style={{boxShadow:"0px 1px 1px 1px rgba(0,0,0,0.1)"}}
              className='relative bg-gray-100 dark:bg-gray-400/40  rounded-md p-2 my-4 flex gap-6'
            >
              <img src={cours}/>
              <div className='absolute right-0 px-2'>
                <h1 className='absolute right-2 text-teal-900 text-sm'>آموزش جامع ریکت جی اس</h1>
                <div className='flex flex-row-reverse mt-10'>
                  <p className='flex text-[10px] text-primary gap-1'>مهدی اصغری <IoPersonOutline className='mt-1 text-[11px]' /></p>
                  <p className='mr-14 text-[10px] text-secondary dark:text-amber-400 '>چهارشنبه ها .17:30</p>
                </div>
              </div>
            </div>

            <div style={{boxShadow:"0px 1px 1px 1px rgba(0,0,0,0.1)"}}
              className='relative bg-gray-100 dark:bg-gray-400/40  rounded-md p-2 my-2 flex gap-6'
            >
              <img src={cours}/>
              <div className='absolute right-0 px-2'>
                <h1 className='absolute right-2 text-teal-900 text-sm'>آموزش جامع ریکت جی اس</h1>
                <div className='flex flex-row-reverse mt-10'>
                  <p className='flex text-[10px] text-primary gap-1'>مهدی اصغری <IoPersonOutline className='mt-1 text-[11px]' /></p>
                  <p className='mr-14 text-[10px] text-secondary  dark:text-amber-400'>چهارشنبه ها .17:30</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex text-gray-400 text-[10px] pl-[40%] my-4 gap-2'><IoIosArrowBack className='mt-1'/>مشاهده همه </div>
        </div>

      </div>    

    </div>
  )
}

export default StdDashboard