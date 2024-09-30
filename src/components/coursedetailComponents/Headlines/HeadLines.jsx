import { div, style } from "framer-motion/client";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const HeadLines = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "پیش نیاز های ری اکت",
      data: "معرفی React",
      time: "4   ",
      setion: " ۲۰  ",
      time2: "15:36",

      isOpen: false,
    },
    {
      key: 2,
      title: " های ری اکت Main Concept",
      data: "معرفی React",
      setion: "۲۰   ",

      time2: "15:36",

      isOpen: false,
    },
    {
      key: 3,
      title: "معرفی و نحوه استفاده از متد LifeCycle",
      data: "معرفی React",
      time: "4   ",
      setion: "۲۰   ",
      time2: "15:36",

      isOpen: false,
    },

    {
      key: 4,
      title: "معرفی و نحوه استفاده از متد LifeCycle",
      data: " Reactمعرفی",
      time: "4   ",
      setion: "۲۰   ",
      time2: "15:36",

      isOpen: false,
    },

    {
      key: 5,
      title: "مباحث مربوط به کار با Ajax و Api در ری اکت",
      data: "معرفی Ajax",
      time: "4   ",
      setion: "7  ",
      time2: "15:36",

      isOpen: false,
    },
    {
      key: 6,
      title: "پیش نیاز های ری اکت",
      data: "معرفی React",
      time: "4   ",
      setion: "5  ",

      time2: "15:36",

      isOpen: false,
    },
    {
      key: 7,
      title: "پیش نیاز های ری اکت",
      data: "معرفی React",
      time: "4   ",
      setion: "۲۰   ",

      time2: "15:36",

      isOpen: false,
    },
    {
      key: 8,
      title: "پیش نیاز های ری اکت",
      data: "معرفی React",
      time: "4   ",
      setion: "۲۰   ",

      time2: "15:36",

      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <>
      {/* headlines */}
      <div className=" relative w-[811px]    border-[rgba(0,0,0,0)]">
        <div className=" w-full mt-[35px]  relative">
          <h4 className=" mark  ">سرفصل ها</h4>

          <div className=" flex    gap-[10px] flex-wrap">
            {accordions.map((data, index) => (
              <div
                style={{ boxShadow: " 0px 1px 3px 0 rgba(0, 0, 0, 0.25)" }}
                className={`  flex cursor-pointer items-center flex-wrap  rounded-t-[10px]  rounded-b-[10px]  w-[809px] ${
                  data.isOpen ? "bg-[#00E2DC] " : " bg-[#FFFFFF] h-[51px]"
                }`}
              >
                <div
                  onClick={() => toggleAccordion(data.key)}
                  className="  my-auto w-full justify-between items-center  px-[35px] mb-3 pt-[10px]   flex"
                >
                  <div className="    gap-3  flex">
                    <div className=" flex items-center">
                      {" "}
                      {data.isOpen ? (
                        <svg
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.753419 7.12476L7.00342 0.874756L13.2534 7.12476"
                            stroke="#444444"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.2534 6.87476L10.0034 13.1248L3.75342 6.87476"
                            stroke="#444444"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                    </div>

                    <div
                      className={` text-right  font-normal font-Yekan text-[17px] h-[32px] gap-1 items-center flex ${
                        data.isOpen ? "text-[#005B58]" : "text-[#888888]"
                      } `}
                    >
                      ساعت<h3 className="  ">{data.time}</h3>
                      .جلسه<h3 className="    ">{data.setion}</h3>
                    </div>
                  </div>

                  <h2
                    className={` text-[#555555] text-right    font-normal font-Yekan text-[20px] h-[32px] ${
                      data.isOpen ? "text-[#006865]" : "text-[#555555]"
                    } `}
                  >
                    {data.title}
                  </h2>
                </div>

                <div
                  className={` text-black w-full   bg-[#EEFFFF] text-right px-[31.5px] py-[12.5px]  rounded-b-[10px] ${
                    data.isOpen ? "" : "hidden"
                  } `}
                >
                  <div className=" w-full  h-[42px] flex items-center justify-between ">
                    <div className="  flex items-center gap-3">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.375 1.71078C1.375 0.997445 2.13917 0.545778 2.76417 0.889111L12.3808 6.17828C12.528 6.25914 12.6508 6.37806 12.7363 6.5226C12.8218 6.66714 12.8669 6.832 12.8669 6.99994C12.8669 7.16788 12.8218 7.33274 12.7363 7.47728C12.6508 7.62183 12.528 7.74075 12.3808 7.82161L2.76417 13.1108C2.6214 13.1893 2.46065 13.2292 2.29776 13.2266C2.13486 13.2241 1.97545 13.1791 1.83522 13.0962C1.695 13.0132 1.57881 12.8952 1.49811 12.7537C1.41741 12.6121 1.37498 12.452 1.375 12.2891V1.71078Z"
                          stroke="#006865"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <h3 className=" font-Yekan text-[16px] font-normal text-[#006865]">
                        {data.time2}
                      </h3>
                    </div>
                    <h3
                      className=" text-[#006865] font-Yekan font-normal text-[18px]
                                      "
                    >
                      {data.data}
                    </h3>
                  </div>

                  <hr />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadLines;
