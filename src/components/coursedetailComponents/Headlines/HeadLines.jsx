import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ReactPlayer from "react-player";

const HeadLines = ({ isCourseUser }) => {
  const { t } = useTranslation();
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "پیش نیاز های ری اکت",
      time: "4",
      setion: "20",
      items: [
        {
          data: "معرفی React",
          time2: "15:36",
          youtube: "https://www.youtube.com/watch?v=hn80mWvP-9g",
          isOpen: false,
          isPlaying: false,
        },
        {
          data: "معرفی 22React",
          setion: "۲۰",
          time: "4",
          time2: "15:36",
          youtube: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          isOpen: false,
          isPlaying: false,
        },
      ],
    },
    {
      key: 2,
      title: " های ری اکت Main Concept",
      time: "4",
      setion: "20",
      items: [
        {data: "معرفی React",
        setion: "۲۰   ",
        time: "4",
        isPlaying: false,
        time2: "15:36",
        youtube:"https://www.youtube.com/watch?v=SqcY0GlETPk",
  
        isOpen: false,}
       
      ],
     
    },
    {
      key: 3,
      title: "معرفی و نحوه استفاده از متد LifeCycle",
      time: "4",
      setion: "20",
      items: [
        {data: "معرفی React",
        setion: "۲۰   ",
        time: "4",
        isPlaying: false,
        time2: "15:36",
        youtube:"https://www.youtube.com/watch?v=SqcY0GlETPk",
  
        isOpen: false,}
       
      ],
   
    },

    {
      key: 4,
      title: "معرفی و نحوه استفاده از متد LifeCycle",
      time: "4",
      setion: "20",
      items: [
        {data: "معرفی React",
        setion: "۲۰   ",
        time: "4",
        isPlaying: false,
        time2: "15:36",
        youtube:"https://www.youtube.com/watch?v=SqcY0GlETPk",
  
        isOpen: false,}
       
      ],
    },

    {
      key: 5,
      title: "مباحث مربوط به کار با Ajax و Api در ری اکت", time: "4",
      setion: "20",
      items: [
        {data: "معرفی React",
        setion: "۲۰   ",
        time: "4",
        isPlaying: false,
        time2: "15:36",
        youtube:"https://www.youtube.com/watch?v=SqcY0GlETPk",
  
        isOpen: false,}
       
      ],
    },
    {
      key: 6,
      title: "پیش نیاز های ری اکت", time: "4",
      setion: "20",
      items: [
        {data: "معرفی React",
        setion: "۲۰   ",
        time: "4",
        isPlaying: false,
        time2: "15:36",
        youtube:"https://www.youtube.com/watch?v=SqcY0GlETPk",
  
        isOpen: false,}
       
      ],
    },
    {
      key: 7,
      title: "پیش نیاز های ری اکت", time: "4",
      setion: "20",
      items: [
        {data: "معرفی React",
        setion: "۲۰   ",
        time: "4",
        isPlaying: false,
        time2: "15:36",
        youtube:"https://www.youtube.com/watch?v=SqcY0GlETPk",
  
        isOpen: false,}
       
      ],
    },
    {
      key: 8,
      title: "پیش نیاز های ری اکت",
      items: [
        {data: "معرفی React",
        setion: "۲۰   ",
        time: "4",
        isPlaying: false,
        time2: "15:36",
        youtube:"https://www.youtube.com/watch?v=SqcY0GlETPk",
  
        isOpen: false,}
       
      ],
    }
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const toggleAccordion = (accordionKey) => {
    setAccordion((prev) =>
      prev.map((accord) =>
        accord.key === accordionKey
          ? { ...accord, isOpen: !accord.isOpen }
          : { ...accord, isOpen: false }
      )
    );
  };

  const togglePlay = (accordionKey, itemIndex) => {
    if(isCourseUser==0){ 
    setAccordion((prev) =>
      prev.map((accordion) =>
        accordion.key === accordionKey
          ? {
              ...accordion,
              items: accordion.items.map((item, index) =>
                (isCourseUser === 1 || index === 0)
                  ? { ...item, isPlaying: index === itemIndex } 
                  : item
              ),

              
            }
            : accordion
      )
    );

    if(itemIndex>0){
      alert("ابتدا باید در دوره شرکت کنید.")
    }
      
   }

     if(isCourseUser==1){
      
    
    setAccordion((prev) =>
      prev.map((accordion) =>
        accordion.key === accordionKey
          ? {
              ...accordion,
              items: accordion.items.map((item, index) =>
                index === itemIndex
                  ? { ...item, isPlaying: true }
                  : { ...item, isPlaying: false }
              ),
            }
          : accordion
      )
    );
    }
  };


  const closeVideo = (accordionKey, itemIndex) => {
    setAccordion((prev) =>
      prev.map((accordion) =>
        accordion.key === accordionKey
          ? {
              ...accordion,
              items: accordion.items.map((item, index) =>
                index === itemIndex ? { ...item, isPlaying: false } : item
              ),
            }
          : accordion
      )
    );
  };

  return (
    <SkeletonTheme baseColor="#cbd5e1" highlightColor="#f5f5f5">
      <div className="relative w-full border-[rgba(0,0,0,0)]">
        <div className="w-full mt-[15px] relative">
          <h4 className="mark max-xl:text-[20px] dark:text-slate-300">
            {t("HeadLines")}
          </h4>

          <motion.div
            initial={{ x: 0, opacity: 0, y: 300 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 3, delay: 0 }}
            className="flex mt-[15px] gap-[10px] flex-wrap"
          >
            {accordions.map((data, index) => (
              <div
                key={index}
                style={{ boxShadow: " 0px 1px 3px 0 rgba(0, 0, 0, 0.25)" }}
                className={`  flex cursor-pointer items-center flex-wrap   rounded-t-[10px]  rounded-b-[10px]  w-[809px] ${
                  data.isOpen ? "bg-[#00E2DC] dark:bg-slate-300" : "dark:bg-slate-700 bg-[#FFFFFF] h-[51px]"
                }`}
              >
                <div
                  onClick={() => toggleAccordion(data.key)}
                  className=" my-auto w-full justify-between items-center   px-[35px] pb-3  pt-[10px]   grid grid-cols-2"
                >   {loading ? <Skeleton width={"100px"} /> :  <div className="grid grid-cols-2 w-20  ">
                <div className=" w-6  flex items-center">
                  {" "}
                  {data.isOpen ? (
                    <svg
                      width="14"
                      height="8"
                      className="h-[6px] w-[12px]  "
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
                      className="h-[18px] w-[15px] dark:stroke-slate-200 stroke-[#444444]"

                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.2534 6.87476L10.0034 13.1248L3.75342 6.87476"
                        
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </div>
                {loading ? <Skeleton width={"100px"} /> : 
                  <div
                    className={` text-right justify-self-start font-normal font-Yekan text-[17px] h-[32px] gap-1 items-center flex ${
                      data.isOpen ? "text-[#005B58]  dark:text-slate-600" : "text-[#888888] dark:text-slate-200"
                    } `}
                  >
                    ساعت<h3 className="max-lg:text-[13px]  ">{data.time}</h3>
                    .جلسه<h3 className=" max-lg:text-[13px]   ">{data.setion}</h3>
                  </div>
                }
              </div>}

              {loading ? <Skeleton  /> :     <h2
                    className={` text-[#555555] text-right  max-lg:text-[13px] max-lg:line-clamp-1 max-xl:text-[16px]  font-normal font-Yekan text-[20px] h-[32px] ${
                      data.isOpen ? "text-[#006865]" : "text-[#555555] dark:text-slate-300"
                    } `}
                  >
                    {data.title}
                  </h2>
                  }
                </div>

                {data.isOpen && (
                  <div className="w-full bg-[#EEFFFF] dark:bg-slate-200 text-right px-[31.5px] py-[12.5px] rounded-b-[10px]">
                    {data.items.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <div
                          className="w-full h-[42px] flex items-center justify-between"
                          onClick= {()=>
                            
                              togglePlay(data.key, itemIndex) 
                             
                          }
                          
                        >
                          
                                                    
                          <div className="  flex items-center gap-3">
                      <svg
                        width="14"
                        height="14"
                        className=" dark:stroke-orange stroke-[#006865]"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.375 1.71078C1.375 0.997445 2.13917 0.545778 2.76417 0.889111L12.3808 6.17828C12.528 6.25914 12.6508 6.37806 12.7363 6.5226C12.8218 6.66714 12.8669 6.832 12.8669 6.99994C12.8669 7.16788 12.8218 7.33274 12.7363 7.47728C12.6508 7.62183 12.528 7.74075 12.3808 7.82161L2.76417 13.1108C2.6214 13.1893 2.46065 13.2292 2.29776 13.2266C2.13486 13.2241 1.97545 13.1791 1.83522 13.0962C1.695 13.0132 1.57881 12.8952 1.49811 12.7537C1.41741 12.6121 1.37498 12.452 1.375 12.2891V1.71078Z"
                          
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <h3 className=" font-Yekan text-[16px] font-normal text-[#006865] dark:text-blue-950">
                        {item.time2}
                      </h3>
                    </div><h3 className="text-[#006865] dark:text-blue-950 text-[16px]">
                            {item.data}
                          </h3>

                          

                        </div>
                        <hr  className=" dark:border-slate-400"/>
                        {item.isPlaying && (
                          <div className="w-[820px] rounded-md h-[520px] border bg-[#ccc] fixed top-[15%] left-[25%] z-[999999]">
                            <button
                              onClick={() => closeVideo(data.key, itemIndex)}
                              className="text-black w-9 h-9 shadow-xl bg-[#f8f7f7] items-center justify-center border text-center absolute -top-3 -left-2 rounded-md"
                            >
                              x
                            </button>
                            <ReactPlayer
                              url={item.youtube}
                              controls
                              width="800px"
                              height="500px"
                              style={{
                                borderRadius: "8px",
                                boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.2)",
                                margin: "10px auto",
                              }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default HeadLines;
