import React, { useRef } from "react";
import { MdNavigateNext } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { NavLink, useParams } from "react-router-dom";
import { toPng } from "html-to-image";
import { useStudentCoursePayDetail } from "../core/services/query/queries";
import DateApi from "./DateApi";

const Payment1 = () => {
  const { t } = useTranslation();
  const componentRef = useRef(null);
  const { courseId } = useParams();
  const getMyCourseDetail = useStudentCoursePayDetail(courseId);

  const handleDownloadImage = () => {
    if (componentRef.current) {
      toPng(componentRef.current, {
        cacheBust: true,
        style: {
          backgroundColor: "#fcfaf5cb",
          width: "900px",
          height: "270px",
          overflow: "hidden",
        },
      })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "payment-info.png";
          link.click();
        })
        .catch((error) => {});
    }
  };

  return (
    <div className="overflow-hidden h-[410px]" ref={componentRef}>
      {getMyCourseDetail.data?.map((item) => (
        <div className="relative w-[550px]  rounded-2xl mt-14 bg-[#fcfaf5cb] shadow-md h-[350px] m-auto pt-16">
          <div className="w-[350px] h-[150px] flex mx-auto justify-end flex-wrap">
            <div className="w-[100%] h-[100%]   bg-[#fcfaf5cb] overflow-visible  flex mx-auto justify-end flex-wrap">
              <div className=" w-[350px]  px-2 mb-4 text-right font-Yekan flex justify-between">
                {/* <p className='text-[16px] text-gray-600'>{item?.courseId}</p>
            <p className='text-[16px] text-[#2729a7]'> : {t('course_id')}</p> */}
              </div>
              <div className=" w-[350px]  px-2 mb-4 text-right font-Yekan flex justify-between">
                <p className="text-[16px] text-gray-600">{item?.paid} </p>
                <p className="text-[16px] text-[#2729a7]">: {t("paid")}</p>
              </div>
              <div className=" w-[350px]  px-2 mb-4 text-right font-Yekan flex justify-between">
                <p className="text-[16px] text-gray-600">
                  <DateApi dateapi={item?.peymentDate} />
                </p>
                <p className="text-[16px] text-[#2729a7]"> : {t("date")}</p>
              </div>
              <div className="    w-[350px] flex-nowrap px-2 mb-4 text-right font-Yekan flex justify-between">
                <p className="text-[16px] text-gray-600 truncate w-[200px] ">
                  {item?.paymentId}
                </p>
                <p className="text-[16px] text-[#2729a7] "> : {t("number")}</p>
              </div>
            </div>

            <button
              onClick={handleDownloadImage}
              className="shadow-sm mt-2 w-[80px] h-[30px] rounded-[10px] text-[14px] text-white font-Yekan bg-blue-800"
            >
              دانلودpng
            </button>
          </div>

          <NavLink
            to={`/paymentall/${item?.paymentId}`}
            className="w-24 right-4 bottom-8 absolute text-center flex items-center text-gray-500 text-[14px]"
          >
            مرحله بعد <MdNavigateNext />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Payment1;
