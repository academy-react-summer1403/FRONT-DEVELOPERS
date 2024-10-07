import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Description = () => {

  const [showMore, setShowMore] = useState(true);

  return (
    <>
     {/* Description section */}
     

     <div className="  max-sm:w-full  mb-[15px]">

      <div className=' relative '>
            <h4 className=" mark max-xl:text-[20px] max-md:mt-5 dark:text-slate-300 ">توضیحات</h4>
            <motion.div style={{boxShadow:" 0px 1px 2px 0 rgba(0, 0, 0, 0.25)"}} className="bg-white  dark:bg-slate-700 max-sm:w-full    mt-[15px] rounded-[15px] w-full  p-[36px]    ">
              <div className="overflow-hidden relative ">
                <motion.p 
                 initial={{ x:0,opacity:0,y:-300}}
                 animate={{ x:0,y:0,opacity:1}}
                 transition={{type:"spring" ,duration:3 , delay:0}}

                  className={` text-[#7B7B7B] dark:text-slate-300 dark:bg-slate-700 max-sm:w-full text-[19px] text-right font-Yekan font-normal max-xl:text-[17px] max-lg:text-[15px]  leading-[32px] ${
                    showMore ? " h-[570px] " : "h-[]  "
                  }`}
                >
                  قبل از آموزش ری اکت ReactJS ابتدای کار به شما بگیم که تکنولوژی
                  ری اکت برگ برنده برنامه نویسان در دنیای امروز هست اصلا اغراق
                  نکردیم. یه غول به تمام معنا و دنیایی بی انتها از پروژه هایی که
                  میشه با اون نوشت، اون هم خیلی سریع و راحت! تکنولوژی که دنیای
                  وب رو دگرگون کرد و دستپخت شرکت فیسبوک هست که اینستاگرام رو هم
                  با اون طراحی کرده! کامپوننت محور بودن ری اکت باعث میشه شما با
                  کدنویسی یک بخش بتونید بی نهایت بار در بخش های مختلف پروژه از
                  اون استفاده کنید و از طرفی میتونید پروژه هایی بسازید که بدون
                  نیاز به رفرش، هر دیتا و بخشی از صفحه رو تغییر بدید اون هم با
                  سرعت نور! برای همین ری اکت، زمان کدنویسی و به اتمام پروژه رو
                  خیلی کوتاهتر از قبل کرده! خلاصه به شما تبریک میگیم که خیلی
                  دقیق مطالعه کردید و به این نتیجه رسیدید که الان بهترین زمان
                  برای یادگیری ری اکت هست. پس از الان با تمام اطمینان خیالتون رو
                  راحت می کنیم : شما با دوره آموزش ری اکت سبزلرن، نه تنها به این
                  تکنولوژی به تسلط 100 درصد می رسید، بلکه طوری آموزش عملی می
                  بینید و راهنمایی می گیرید که یک راست وارد بازار کار بشید. بی
                  حرف و حدیث. بی تر
                  میشه با اون نوشت، اون هم خیلی سریع و راحت! تکنولوژی که دنیای
                  وب رو دگرگون کرد و دستپخت شرکت فیسبوک هست که اینستاگرام رو هم
                  با اون طراحی کرده! کامپوننت محور بودن ری اکت باعث میشه شما با
                  کدنویسی یک بخش بتونید بی نهایت بار در بخش های مختلف پروژه از
                  اون استفاده کنید و از طرفی میتونید پروژه هایی بسازید که بدون
                  نیاز به رفرش، هر دیتا و بخشی از صفحه رو تغییر بدید اون هم با
                  سرعت نور! برای همین ری اکت، زمان کدنویسی و به اتمام پروژه رو
                  خیلی کوتاهتر از قبل کرده! خلاصه به شما تبریک میگیم که خیلی
                  دقیق مطالعه کردید و به این نتیجه رسیدید که الان بهترین زمان
                  برای یادگیری ری اکت هست. پس از الان با تمام اطمینان خیالتون رو
                  راحت می کنیم : شما با دوره آموزش ری اکت سبزلرن، نه تنها به این
                  تکنولوژی به تسلط 100 درصد می رسید، بلکه طوری آموزش عملی می
                  بینید و راهنمایی می گیرید که یک راست وارد بازار کار بشید. بی
                  حرف و حدیث. بی تر
                  میشه با اون نوشت، اون هم خیلی سریع و راحت! تکنولوژی که دنیای
                ژی به تسلط 100 درصد می رسید، بلکه
                  طوری آموزش عملی می بینید و راهنمایی می گیرید که یک راست وارد
                  بازار کار بشید. بی حرف و حدیث. بی ترس و تردید! اگه به حوزه
                  برنامه نویسی سمت کاربر، طراحی رابط کاربری (UI) و به طور کلی
                  پروژه های تعامل محور و سریع علاقه دارید، ری اکت یکی از بهترین
                  دستیاران شما برای شما
                </motion.p>
              </div>
              <button
                onClick={() => setShowMore(!showMore)}
                className="border-[#01CEC9] max-xl:text-[18px] dark:border-[#E48900]   dark:text-[#fdb359]  border-[1px] text-[#006865] hover:scale-105 ease-in-out duration-150 
leading-[32px] font-normal font-Yekan text-[20px] flex items-center w-[174px] h-[45px] rounded-[45px] mx-auto justify-center gap-2 mt-3 max-lg:text-[16px] max-lg:w-[150px] "
              >
                {showMore ? (
                  <svg width="14" height="8" className='dark:stroke-orange stroke-[#005B58] ' viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.25 0.875L7 7.125L0.75 0.875" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  
                ) : (
                  <svg width="14" height="8" className='dark:stroke-orange stroke-[#005B58]  rotate-180' viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.25 0.875L7 7.125L0.75 0.875" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                )}
                مطالعه بیشتر
              </button>
            </motion.div>
          </div></div>
</>
  )
}

export default Description