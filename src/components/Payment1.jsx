import React, { useRef, useState } from 'react';
import { MdNavigateNext } from "react-icons/md";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useTranslation } from 'react-i18next';
import { NavLink, useParams } from 'react-router-dom';
import { toPng } from 'html-to-image';
import { useMyCourses } from '../core/services/query/DashboardQuery';
import { StudentCoursePayDetail } from '../core/services/level2api';

const Payment1 = () => {
  const { t } = useTranslation();
  const componentRef = useRef(null);
  const { courseId } = useParams();
  const getMyCourseDetail = StudentCoursePayDetail(courseId);
  console.log(courseId)

  console.log({ courseId });

  const handleDownloadImage = () => {
    if (componentRef.current) {
      toPng(componentRef.current, {
        cacheBust: true,
        style: {
          backgroundColor: '#fcfaf5cb', 
          width: '550px', 
          height: '350px',
          overflow: 'visible'
        }
      })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'payment-info.png';
          link.click();
        })
        .catch((error) => {
          console.error('Could not generate image', error);
        });
    }
  };

  return (
    <div>
      <div className="relative w-[550px] rounded-2xl mt-14 bg-[#fcfaf5cb] shadow-md h-[350px] m-auto pt-16">
        <div className="w-[350px] h-[150px] flex mx-auto justify-end flex-wrap">

      <div ref={componentRef}  className="w-[100%] h-[100%]   bg-[#fcfaf5cb] overflow-visible  flex mx-auto justify-end flex-wrap">
       <div className=' w-[350px] px-2 mb-4 text-right font-Yekan flex justify-between'>
            <p className='text-[16px] text-gray-600'></p>
            <p className='text-[16px] text-[#2729a7]'> : {t('course_id')}</p>
          </div>
          <div className=' w-[350px]  px-2 mb-4 text-right font-Yekan flex justify-between'>
            <p className='text-[16px] text-gray-600'></p>
            <p className='text-[16px] text-[#2729a7]'> : {t('paid')}</p>
          </div>
          <div className=' w-[350px]  px-2 mb-4 text-right font-Yekan flex justify-between'>
            <p className='text-[16px] text-gray-600'>2/2/7000</p>
            <p className='text-[16px] text-[#2729a7]'> : {t('date')}</p>
          </div>
          <div className=' w-[350px]  px-2 mb-4 text-right font-Yekan flex justify-between'>
            <p className='text-[16px] text-gray-600'>2/2/7000</p>
            <p className='text-[16px] text-[#2729a7]'> : {t('number')}</p>
         </div></div> 

        <button onClick={handleDownloadImage} className='shadow-sm mt-2 w-[80px] h-[30px] rounded-[10px] text-[14px] text-white font-Yekan bg-blue-800'>
            دانلودpng
          </button>
         
        </div>
        
        <NavLink to={"/payment/"+courseId} className="w-24 left-10 bottom-8 absolute text-center flex items-center text-gray-500 text-[14px]">
          <MdNavigateNext className="rotate-180" />مرحله قبل 
        </NavLink>

        <NavLink to={"/paymentall/"+courseId} className="w-24 right-4 bottom-8 absolute text-center flex items-center text-gray-500 text-[14px]">
          مرحله بعد <MdNavigateNext />
        </NavLink>
      </div>
    </div>
  );
};

export default Payment1;
