import React from 'react'
import alert from "../../../assets/dashboard/Frame.svg";

const SecondPart = () => {
  return (
    <>
      <div
        style={{ boxShadow: "0px 1px 1px 1px rgba(0,0,0,0.1)" }}
        className="relative m-2 my-12 bg-primary/5  dark:bg-gray-600/70 rounded-xl px-10 py-2
        max-lg:px-4
        max-sm:mx-0 max-sm:px-1
        "
      >
        <img src={alert} className="absolute bottom-40" />
        <h3 className="text-right py-2 text-md text-gray-500 dark:text-gray-200 font-semibold">
          جدید ترین اخبار و مقالات
        </h3>

        <div className="">
          <div className="relative flex flex-row-reverse py-1 border-dashed border-b-[1.5px] border-gray-400 gap-4">
            <div className="text-right flex py-2 gap-2 max-sm:gap-0 ">
              <p className="text-sm font-medium text-red-600 dark:text-red-800">
                جدید
              </p>
              <p className="text-sm text-gray-600  dark:text-gray-400">
                {" "}
                .منتشر شد{"Next.js"} دوره آموزش جامع از پایه تا پیشرفته{" "}
              </p>
            </div>
            <p className="absolute left-0 py-3 text-xs text-gray-400">
              1402/11/30
            </p>
          </div>

          <div className="relative flex flex-row-reverse py-1 border-dashed border-b-[1.5px] border-gray-400 gap-4">
            <div className="text-right flex py-2 gap-2 ">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {" "}
                .تخفیف ویژه دوره ریکت را از دست ندهید
              </p>
            </div>
            <p className="absolute left-0 py-3 mr-6 text-xs text-gray-400">
              1402/11/25
            </p>
          </div>

          <div className="relative flex flex-row-reverse py-1 gap-4">
            <div className="text-right flex py-2 gap-2 ">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {" "}
                .به روز شد{"tailwinds"} دوره آموزش{" "}
              </p>
            </div>
            <p className="absolute left-0 py-3 text-xs text-gray-400">
              1402/11/23
            </p>
          </div>
        </div>
      </div>  
    </>
  )
}

export default SecondPart