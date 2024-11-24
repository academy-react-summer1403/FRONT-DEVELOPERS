import React, { useState } from 'react';
import { MdNavigateNext } from "react-icons/md";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { StudentAddPeyment } from '../core/services/level2api';
import { toast, ToastContainer } from 'react-toastify'; // وارد کردن ToastContainer و toast برای نمایش پیغام‌ها
import 'react-toastify/dist/ReactToastify.css'; // استایل مورد نیاز برای نمایش توست‌ها

const Payment = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const { courseId } = useParams();
  
  const onSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    formData.append("CourseId", courseId);
    formData.append("PeymentDate", selectedDate?.toString());
    formData.append("Paid", e.target.Paid.value);
    formData.append("PaymentInvoiceNumber", e.target.PaymentInvoiceNumber.value);
  
    try {
      const response = await StudentAddPeyment(formData);
      console.log("Response:", response);
      
      toast.success(t('با موفقیت انجام شد.'), {
        theme: "colored",
      });

      navigate(`/payment1/${courseId}`);
    } catch (error) {
      console.error("Error submitting payment:", error);
      
  
      toast.error(t('خطا در ورود اطلاعات'));
    }
  };
  
  return (
    <div>
    
      <ToastContainer /> 

      <div className="relative w-[550px] rounded-2xl mt-14 bg-[#fcfaf5cb] shadow-md h-[350px] m-auto pt-20">
        <div className="w-[350px] flex mx-auto flex-wrap">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              id="CourseId" 
              name="CourseId"
              className=""
              defaultValue={courseId} 
            />
            <input
              type="text"
              id="Paid"
              name="Paid"
              className="border border-gray-300 w-full rounded-[10px] text-right mb-2 h-[40px] text-md px-2"
              placeholder={t('paid')}
            />
            <DatePicker
              value={selectedDate}
              onChange={setSelectedDate}
              placeholder={t('date')}
              className="border-gray-300 border w-full rounded-[10px] mb-2 text-md px-2"
            />
            <input
              type="text"
              id="PaymentInvoiceNumber"
              name="PaymentInvoiceNumber"
              className="border-gray-300 border w-full rounded-[10px] text-right mb-2 h-[40px] text-md px-2"
              placeholder={t('number')}
            />
            <button type="submit">
              {t('complete_purchase')} <MdNavigateNext />
            </button>
          </form>
        </div>    
      </div>
    </div>
  );
};

export default Payment;
