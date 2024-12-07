import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import DatePicker from "react-multi-date-picker";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { StudentAddPeyment } from "../core/services/level2api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@nextui-org/react";

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
    formData.append(
      "PaymentInvoiceNumber",
      e.target.PaymentInvoiceNumber.value
    );

    try {
      const response = await StudentAddPeyment(formData);

      toast.success(t("با موفقیت انجام شد."), {
        theme: "colored",
        className: "custom-toast",
      });

      navigate(`/payment1/${courseId}`);
    } catch (error) {
      toast.error(t("خطا در ورود اطلاعات"));
    }
  };

  return (
    <div>
      <ToastContainer />

      <div className="relative w-[550px] rounded-2xl mt-14 bg-[#fcfaf5cb] shadow-md h-[350px] m-auto pt-20">
        <div className="w-[350px] flex mx-auto flex-wrap">
          <form onSubmit={onSubmit}>
            {/* <input
              type="text"
              id="CourseId"
              name="CourseId"
              className=""
              defaultValue={courseId}
            /> */}
            <input
              type="text"
              id="Paid"
              name="Paid"
              className="border border-gray-300 w-full rounded-[10px] text-right mb-2 h-[40px] text-md px-2"
              placeholder={t("paid")}
            />
            <DatePicker
              value={selectedDate}
              onChange={setSelectedDate}
              placeholder={t("date")}
           
              style={{
             
                width: "350px",
                height: "40px",
                border: "1px solid #ccc",
                borderRadius:"10px",
                textAlign:"right",
                marginBottom:"8px",
                
              
                
              }}
            />
            <input
              type="text"
              id="PaymentInvoiceNumber"
              name="PaymentInvoiceNumber"
              className="border-gray-300 border w-full rounded-[10px] text-right mb-2 h-[40px] text-md px-2"
              placeholder={t("number")}
            />
            <Button type="submit" className="  rounded-lg  flex justify-center">
              {t("complete_purchase")} <MdNavigateNext />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
