import React, { useState } from 'react';
import { MdNavigateNext } from "react-icons/md";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useTranslation } from 'react-i18next';
import { Navigate, NavLink, useNavigate, useParams } from 'react-router-dom';
import { useMyCourses, useReserv } from '../core/services/query/DashboardQuery';
import { StudentAddPeyment } from '../core/services/level2api';

const Payment = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()

  const [selectedDate, setSelectedDate] = useState(null);
const { courseId } = useParams();
const Reserv = useReserv(courseId)
console.log(Reserv?.data)

  console.log({ courseId });


  const onSubmit =async (e)=>{
    e.preventDefault();


   

    const formData = new FormData(e.target);
    formData.append("CourseId", courseId);
    formData.append("Paid", Paid);
    formData.append("PeymentDate",PeymentDate);
    formData.append("PaymentInvoiceNumber", PaymentInvoiceNumber);



    const AddPayment = StudentAddPeyment(  formData)
    console.log(AddPayment)


    navigate("/payment1/"+ courseId )
       
  }

 

  return (
    <div>


          {/* <li key={index}>{course?.fullName}</li> */}
      
      <div className="relative w-[550px] rounded-2xl mt-14 bg-[#fcfaf5cb] shadow-md h-[350px] m-auto pt-20">
    {Reserv.data?.map((item)=>(<div className="w-[350px] flex mx-auto flex-wrap">
        

        <form

onSubmit={(values) => onSubmit(values)}

>

<input
            type="text"
            id="CourseId" 
            name="CourseId"
            className="border border-gray-300 w-full hidden rounded-[10px] text-right mb-2 h-[40px] text-md px-2"
            placeholder={t('course_id')}
            defaultValue={item?.courseId}
          />
          <input
            type="text"
            
            className="border border-gray-300 w-full rounded-[10px] text-right mb-2 h-[40px] text-md px-2"
            placeholder={t('course_id')}
            defaultValue={item?.courseName}
          />
          <input
            type="text"
            id='Paid'
            name='Paid'
            className="border-gray-300 border w-full rounded-[10px] text-right mb-2 h-[40px] text-md px-2"
            placeholder={t('paid')}
            

          />
          <DatePicker
            value={selectedDate}
            onChange={setSelectedDate}
            calendar={persian}
            locale={persian_fa}
             id='PeymentDate'
            name='PeymentDate'
            placeholder={t('date')}
            className="border-gray-300 border w-full rounded-[10px] mb-2  text-md px-2"
            inputClass="w-full h-full px-2 rounded-[10px] h-[200px]  text-right mb-2 border-gray-300 border"
            style={{
            padding:"0 8px 0 8px",
              borderRadius: "10px",
              height:"40px",
              width:"350px",
             
          }}
          />
          <input
            type="text"
            id='PaymentInvoiceNumber'
            name='PaymentInvoiceNumber'
            className="border-gray-300 border w-full rounded-[10px] text-right mb-2 h-[40px] text-md px-2"
            placeholder={t('number')}
            defaultValue={"123456789"}

          />  


  <button type='submit'> {t('complete_purchase')} <MdNavigateNext /></button>
          </form>
</div>    ))} 

        
       
       
      </div>
    </div>
  );
};

export default Payment;
