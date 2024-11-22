import React, { useRef, useState } from 'react';
import { MdNavigateNext } from "react-icons/md";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useTranslation } from 'react-i18next';
import { NavLink, useParams } from 'react-router-dom';
import { toPng } from 'html-to-image';
import { useMyCourses } from '../core/services/query/DashboardQuery';

import Avatar from 'react-avatar-edit';
import { HiX } from "react-icons/hi";
import { FaCheck } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip';

const Paymentall = () => {
  const { t } = useTranslation();
  const componentRef = useRef(null);
  const { courseId,selectedDate } = useParams();
  const getMyCourses = useMyCourses(courseId);
  console.log(getMyCourses.data?.listOfMyCourses)
  const [Open, setOpen] = useState(false)
  const [image, setimage] = useState(null)
  const [src, setSrc] = useState(null)
  
  const onClose =()=>{
      setimage(null)
  }
  const onCrop =(view)=>{
      setimage(view)
  }

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

        <div data-tooltip-id="addtooltip" data-tooltip-content="" >
                <Avatar   
                    width={300}
                    height={200}
                    
                    onClose={onClose}
                    src={src}
                    label="+"
                    
                />
            </div><Tooltip id="addtooltip" />

      

        <button onClick={handleDownloadImage} className='shadow-sm mt-5 ml-5 w-[80px] h-[30px] rounded-[10px] text-[14px] text-white font-Yekan bg-blue-800'>
            آپلود عکس
          </button>
         
        </div>
        
        <NavLink to={"/payment1/"+courseId} className="w-24 left-10 bottom-8 absolute text-center flex items-center text-gray-500 text-[14px]">
          <MdNavigateNext className="rotate-180" />مرحله قبل 
        </NavLink>

      </div>
    </div>
  );
};

export default Paymentall;
