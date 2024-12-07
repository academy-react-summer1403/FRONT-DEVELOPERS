import React from 'react'
import DateApi from "../../../components/DateApi";
import { NavLink } from "react-router-dom";
import { ImageErrore } from "../../../components/ImageErrore";

import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

const ThirdPart = ({getCourseDash , getCourseDash2}) => {
  return (
    <>
       <div
        className="m-2 border-t grid grid-cols-2
      max-lg:grid-cols-1
      max-md:
      max-sm:
      "
      >
        {/* :دوره های پیشنهادی */}
        <div className="grid-col-1 mx-6 my-4">
          <h3 className="text-right py-4 text-md text-gray-500 dark:text-gray-300 font-semibold">
            :دوره های پیشنهادی
          </h3>

          <div>
            {getCourseDash.data?.courseFilterDtos.map((data) => (
              <NavLink
                to={"/courses-detail/" + data.courseId}
                style={{ boxShadow: "0px 1px 1px 1px rgba(0,0,0,0.1)" }}
                className="relative bg-gray-50 dark:bg-gray-400/40  rounded-md p-2 my-4 flex gap-6"
              >
                <img
                  className="w-[88px] h-[60px] rounded-[6px]"
                  src={
                    data?.tumbImageAddress
                      ? data?.tumbImageAddress
                      : ImageErrore
                  }
                  onError={ImageErrore}
                />
                <div className="absolute right-0 px-2">
                  <h1 className="right-2 text-teal-900 text-sm">
                    {data?.title}
                  </h1>
                  <div className="flex flex-row-reverse mt-4">
                    <p className="flex text-[11px] text-primary gap-1">
                      <IoIosArrowBack className="mt-1" />
                      مشاهده دوره{" "}
                    </p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>

          <NavLink
            to={"/courses"}
            className="flex text-gray-400 text-[10px] pl-[35%] my-4 gap-2"
          >
            <IoIosArrowBack className="mt-1" />
            مشاهده همه{" "}
          </NavLink>
        </div>

        {/* :دوره های در حال برگزاری */}
        <div className="grid-col-1 mx-6 my-4">
          <h3 className="text-right py-4 text-md text-gray-500 dark:text-gray-300 font-semibold">
            :دوره های در حال برگزاری
          </h3>

          <div>
            {getCourseDash2.data?.courseFilterDtos.map((data) => (
              <NavLink
                to={"/courses-detail/" + data.courseId}
                style={{ boxShadow: "0px 1px 1px 1px rgba(0,0,0,0.1)" }}
                className="relative bg-gray-50 dark:bg-gray-400/40  rounded-md p-2 my-4 flex gap-6"
              >
                <img
                  className="w-[88px] h-[60px] rounded-[6px]"
                  src={
                    data?.tumbImageAddress
                      ? data?.tumbImageAddress
                      : ImageErrore
                  }
                  onError={ImageErrore}
                />
                <div className="absolute right-0 px-2">
                  <h1 className="absolute right-2 text-teal-900 text-sm">
                    {data?.title}
                  </h1>
                  <div className="flex flex-row-reverse mt-10">
                    <p className="flex text-[10px] text-primary gap-1">
                      {data?.teacherName}
                      <IoPersonOutline className="mt-1 text-[11px]" />
                    </p>
                    <p className="mr-14 max-sm:mr-2 text-[10px] text-orange dark:text-amber-400 ">
                      <DateApi dateapi={data?.lastUpdate} />
                    </p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>

          <NavLink
            to={"/courses"}
            className="flex text-gray-400 text-[10px] pl-[40%] my-4 gap-2"
          >
            <IoIosArrowBack className="mt-1" />
            مشاهده همه{" "}
          </NavLink>
        </div>
      </div>  
    </>
  )
}

export default ThirdPart