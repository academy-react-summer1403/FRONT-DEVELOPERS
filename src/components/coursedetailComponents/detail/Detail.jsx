import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import profile from "../../../assets/detail/prof.jpg"
import { useParams } from 'react-router-dom';
import { useCourseId, useCourses } from '../../../core/services/query/queries';
import DateApi from '../../DateApi';

import AOS from "aos";
import 'aos/dist/aos.css';

const Detail = ({courseId}) => {

  useEffect(() => {
    AOS.init();
  }, [])


  const CourseDetail = useCourseId(courseId);
  console.log(CourseDetail)
 
  const coursedetals = [
    {
      id: 1,
      title: "دسته بندی",
      subtitle: `${CourseDetail.data?.techs}`,
      icon: (
        <svg
          width="28"
          height="28"
          className='max-lg:h-[22px] max-lg:w-[22px] stroke-darkgreen dark:stroke-orange/80'
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.625 8.75L22.8958 21.154C22.8565 21.8226 22.5632 22.4508 22.0759 22.9102C21.5885 23.3695 20.944 23.6253 20.2743 23.625H7.72567C7.05596 23.6253 6.41147 23.3695 5.92413 22.9102C5.43679 22.4508 5.14346 21.8226 5.10417 21.154L4.375 8.75M11.6667 13.125H16.3333M3.9375 8.75H24.0625C24.787 8.75 25.375 8.162 25.375 7.4375V5.6875C25.375 4.963 24.787 4.375 24.0625 4.375H3.9375C3.213 4.375 2.625 4.963 2.625 5.6875V7.4375C2.625 8.162 3.213 8.75 3.9375 8.75Z"
             
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "پیش نیاز ها",
      subtitle: "HTML , CSS , JS",
      icon: (
        <svg
          width="28"
          height="28"
          className='max-lg:h-[22px] max-lg:w-[22px] stroke-darkgreen dark:stroke-orange/80'

          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 7.04895C12.0769 5.32387 9.58346 4.37138 7 4.37495C5.77267 4.37495 4.59433 4.58495 3.5 4.97228V21.5973C4.62422 21.2006 5.80786 20.9986 7 20.9999C9.68917 20.9999 12.1427 22.0114 14 23.6739M14 7.04895C15.9231 5.32377 18.4165 4.37127 21 4.37495C22.2273 4.37495 23.4057 4.58495 24.5 4.97228V21.5973C23.3758 21.2006 22.1921 20.9986 21 20.9999C18.4165 20.9964 15.9231 21.9489 14 23.6739M14 7.04895V23.6739"
             
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "نوع آموزش",
      subtitle: "حضوری و غیرحضوری",
      icon: (
        <svg
          width="28"
          height="28"
          className='max-lg:h-[22px] max-lg:w-[22px] stroke-darkgreen dark:stroke-orange/80'

          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.625 8.3125C2.625 7.588 3.213 7 3.9375 7H10.9375C11.662 7 12.25 7.588 12.25 8.3125V12.6875C12.25 13.412 11.662 14 10.9375 14H3.9375C3.5894 14 3.25556 13.8617 3.00942 13.6156C2.76328 13.3694 2.625 13.0356 2.625 12.6875V8.3125ZM16.625 10.0625C16.625 9.338 17.213 8.75 17.9375 8.75H24.0625C24.787 8.75 25.375 9.338 25.375 10.0625V19.6875C25.375 20.412 24.787 21 24.0625 21H17.9375C17.5894 21 17.2556 20.8617 17.0094 20.6156C16.7633 20.3694 16.625 20.0356 16.625 19.6875V10.0625ZM4.375 18.8125C4.375 18.088 4.963 17.5 5.6875 17.5H11.8125C12.537 17.5 13.125 18.088 13.125 18.8125V21.4375C13.125 22.162 12.537 22.75 11.8125 22.75H5.6875C5.3394 22.75 5.00556 22.6117 4.75942 22.3656C4.51328 22.1194 4.375 21.7856 4.375 21.4375V18.8125Z"
             
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "وضعیت دوره ",
      subtitle:`${CourseDetail.data?.courseStatusName}`,
      icon: (
        <svg
          width="28"
          height="28"
          className='max-lg:h-[22px] max-lg:w-[22px] stroke-darkgreen dark:stroke-orange/80'

          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.781 23.219C5.18727 23.6254 5.66962 23.9477 6.20049 24.1677C6.73137 24.3876 7.30037 24.5008 7.875 24.5008M4.781 23.219C5.60147 24.0395 6.71468 24.5008 7.875 24.5008M4.781 23.219C3.96053 22.3985 3.5 21.2853 3.5 20.125V4.8125C3.5 4.088 4.088 3.5 4.8125 3.5H10.9375C11.662 3.5 12.25 4.088 12.25 4.8125V9.56317M7.875 24.5008C8.44963 24.5008 9.01863 24.3876 9.54951 24.1677C10.0804 23.9477 10.5627 23.6254 10.969 23.219M7.875 24.5008C9.03532 24.5008 10.1485 24.0395 10.969 23.219M7.875 24.5008L23.1875 24.5C23.912 24.5 24.5 23.912 24.5 23.1875V17.0625C24.5 16.338 23.912 15.75 23.1875 15.75H18.4368M10.969 23.219L18.4368 15.75M10.969 23.219C11.7895 22.3985 12.25 21.2853 12.25 20.125V9.56317M18.4368 15.75L21.7957 12.39C22.309 11.879 22.309 11.0483 21.7957 10.535L17.465 6.20317C16.9517 5.691 16.121 5.691 15.61 6.20317L12.25 9.56317M7.875 20.125H7.88433V20.1343H7.875V20.125Z"
             
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "تاریخ شروع دوره",
      subtitle: ( <DateApi dateapi={CourseDetail.data?.startTime}/>),
      icon: (
        <svg
          width="28"
          height="28"
          className='max-lg:h-[22px] max-lg:w-[22px] stroke-darkgreen dark:stroke-orange/80'

          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 7V14H19.25M24.5 14C24.5 15.3789 24.2284 16.7443 23.7007 18.0182C23.1731 19.2921 22.3996 20.4496 21.4246 21.4246C20.4496 22.3996 19.2921 23.1731 18.0182 23.7007C16.7443 24.2284 15.3789 24.5 14 24.5C12.6211 24.5 11.2557 24.2284 9.98182 23.7007C8.70791 23.1731 7.55039 22.3996 6.57538 21.4246C5.60036 20.4496 4.82694 19.2921 4.29926 18.0182C3.77159 16.7443 3.5 15.3789 3.5 14C3.5 11.2152 4.60625 8.54451 6.57538 6.57538C8.54451 4.60625 11.2152 3.5 14 3.5C16.7848 3.5 19.4555 4.60625 21.4246 6.57538C23.3938 8.54451 24.5 11.2152 24.5 14Z"
          
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },

    {
      id: 6,
      title: "تاریخ پایان دوره",
      subtitle: ( <DateApi dateapi={CourseDetail.data?.endTime}/>),
      icon: (
        <svg
          width="28"
          height="28"
          className='max-lg:h-[22px] max-lg:w-[22px] stroke-darkgreen dark:stroke-orange/80'

          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 7V14H19.25M24.5 14C24.5 15.3789 24.2284 16.7443 23.7007 18.0182C23.1731 19.2921 22.3996 20.4496 21.4246 21.4246C20.4496 22.3996 19.2921 23.1731 18.0182 23.7007C16.7443 24.2284 15.3789 24.5 14 24.5C12.6211 24.5 11.2557 24.2284 9.98182 23.7007C8.70791 23.1731 7.55039 22.3996 6.57538 21.4246C5.60036 20.4496 4.82694 19.2921 4.29926 18.0182C3.77159 16.7443 3.5 15.3789 3.5 14C3.5 11.2152 4.60625 8.54451 6.57538 6.57538C8.54451 4.60625 11.2152 3.5 14 3.5C16.7848 3.5 19.4555 4.60625 21.4246 6.57538C23.3938 8.54451 24.5 11.2152 24.5 14Z"
             
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
          {/* detail section */}

          <div style={{boxShadow:" 0px 1px 2px 0 rgba(0, 0, 0, 0.25)"}} className="bg-white dark:bg-slate-700 max-sm:w-full  max-md:w-[500px] rounded-[15px] w-full h-[1015px] max-md:h-[700px]  p-[23px] max-2xl:p-[15px]">
            {/* consent section & students number */}
            <motion.div
            initial={{ x:200,opacity:0,y:0}}
            animate={{ x:0,y:0,opacity:1}}
            transition={{type:"spring" , stiffness:70,duration:100 , delay:0}}
             className=" w-[366px]   h-[71px] max-xl:w-full  max-2xl:justify-start max-2xl:gap-4  max-xl:justify-between flex justify-between">
              {/* consent section */}
              <div  data-aos="zoom-in-right" style={{boxShadow:" 0px 1px 2px 0 rgba(0, 0, 0, 0.25)"}} className="w-[174px] max-2xl:w-[45%] h-[71px]  flex justify-center items-center gap-5 dark:bg-slate-800  bg-[#F7F7F7] rounded-[10px]">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.7325 4.68126C16.3859 3.11064 18.6142 3.11064 19.2675 4.68126L22.3038 11.9817L30.1846 12.6146C31.8821 12.7502 32.5704 14.8677 31.2769 15.9761L25.2729 21.1196L27.1061 28.8094C27.5013 30.4661 25.7002 31.7742 24.2477 30.8875L17.5 26.7663L10.7523 30.8875C9.29982 31.7742 7.49877 30.4646 7.89398 28.8094L9.72711 21.1196L3.72315 15.9761C2.42961 14.8677 3.11794 12.7502 4.81544 12.6146L12.6963 11.9817L15.7325 4.68126Z"
                    fill="#FFC700"
                  />
                </svg>

                <h4 className=" font-Yekan font-normal text-[19px] leading-[21px] text-center  w-[40px] dark:text-slate-300 text-[#444444] h-[43px]">
                  {" "}
                  4.7 <h4 className="text-[#888888] dark:text-slate-200 ">رضایت</h4>
                </h4>
              </div>

              {/* students number section */}

              <div  data-aos="zoom-in-right" style={{boxShadow:" 0px 1px 2px 0 rgba(0, 0, 0, 0.25)"}} className="w-[174px] max-2xl:w-[45%]  h-[71px] flex justify-center items-center gap-5  dark:bg-slate-800 bg-[#F7F7F7] rounded-[10px] ">
                <svg
                  width="30"
                  height="30"
                  className='dark:fill-orange fill-green'
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.3125 8.4375C10.3125 7.1943 10.8064 6.00201 11.6854 5.12294C12.5645 4.24386 13.7568 3.75 15 3.75C16.2432 3.75 17.4355 4.24386 18.3146 5.12294C19.1936 6.00201 19.6875 7.1943 19.6875 8.4375C19.6875 9.6807 19.1936 10.873 18.3146 11.7521C17.4355 12.6311 16.2432 13.125 15 13.125C13.7568 13.125 12.5645 12.6311 11.6854 11.7521C10.8064 10.873 10.3125 9.6807 10.3125 8.4375ZM19.6875 12.1875C19.6875 11.1929 20.0826 10.2391 20.7858 9.53585C21.4891 8.83259 22.4429 8.4375 23.4375 8.4375C24.4321 8.4375 25.3859 8.83259 26.0892 9.53585C26.7924 10.2391 27.1875 11.1929 27.1875 12.1875C27.1875 13.1821 26.7924 14.1359 26.0892 14.8392C25.3859 15.5424 24.4321 15.9375 23.4375 15.9375C22.4429 15.9375 21.4891 15.5424 20.7858 14.8392C20.0826 14.1359 19.6875 13.1821 19.6875 12.1875ZM2.8125 12.1875C2.8125 11.1929 3.20759 10.2391 3.91085 9.53585C4.61411 8.83259 5.56794 8.4375 6.5625 8.4375C7.55706 8.4375 8.51089 8.83259 9.21415 9.53585C9.91741 10.2391 10.3125 11.1929 10.3125 12.1875C10.3125 13.1821 9.91741 14.1359 9.21415 14.8392C8.51089 15.5424 7.55706 15.9375 6.5625 15.9375C5.56794 15.9375 4.61411 15.5424 3.91085 14.8392C3.20759 14.1359 2.8125 13.1821 2.8125 12.1875ZM7.8875 18.8962C8.64994 17.7013 9.70135 16.7178 10.9445 16.0368C12.1877 15.3558 13.5825 14.9992 15 15C16.1873 14.9989 17.3614 15.2486 18.4455 15.7327C19.5296 16.2168 20.4992 16.9244 21.2909 17.8092C22.0826 18.694 22.6785 19.736 23.0396 20.8671C23.4007 21.9981 23.5188 23.1926 23.3862 24.3725C23.37 24.5191 23.3195 24.6598 23.2387 24.7831C23.1579 24.9065 23.0491 25.0091 22.9212 25.0825C20.5107 26.4657 17.7792 27.1915 15 27.1875C12.1187 27.1875 9.4125 26.4225 7.07875 25.0825C6.95086 25.0091 6.8421 24.9065 6.7613 24.7831C6.68051 24.6598 6.62995 24.5191 6.61375 24.3725C6.40382 22.4558 6.85308 20.5247 7.8875 18.8975V18.8962Z"
                    
                  />
                  <path
                    d="M6.3526 17.8175C5.11979 19.7205 4.54542 21.9754 4.7176 24.2363C3.96698 24.1225 3.22873 23.9383 2.5126 23.6863L2.36885 23.6363C2.2406 23.5907 2.12829 23.509 2.04554 23.401C1.96278 23.2929 1.91313 23.1632 1.9026 23.0275L1.8901 22.8763C1.83961 22.2487 1.91605 21.6174 2.11486 21.0201C2.31367 20.4227 2.63077 19.8715 3.04726 19.3994C3.46374 18.9273 3.97106 18.5439 4.53895 18.2721C5.10684 18.0003 5.72366 17.8457 6.3526 17.8175ZM25.2826 24.2363C25.4548 21.9754 24.8804 19.7205 23.6476 17.8175C24.2765 17.8457 24.8934 18.0003 25.4613 18.2721C26.0291 18.5439 26.5365 18.9273 26.9529 19.3994C27.3694 19.8715 27.6865 20.4227 27.8853 21.0201C28.0842 21.6174 28.1606 22.2487 28.1101 22.8763L28.0976 23.0275C28.0868 23.163 28.0371 23.2924 27.9543 23.4002C27.8716 23.508 27.7594 23.5896 27.6313 23.635L27.4876 23.685C26.7789 23.935 26.0426 24.1213 25.2826 24.2363Z"
                    
                  />
                </svg>
                <h4 className=" font-Yekan font-normal text-[19px] leading-[21px] text-[#444444] text-center dark:text-slate-300   w-[40px] h-[43px]">
                  {" "}
                  216 <h4 className="text-[#888888] dark:text-slate-200 ">دانشجو</h4>
                </h4>{" "}
              </div>
            </motion.div>

            <div className=" w-[367px] h-[860px] mt-[23px] max-sm:w-full  flex flex-wrap gap-[20px] max-md:w-[500px]">
              {/* class members percentage */}

              <div  data-aos="zoom-in-right" className=" w-full max-2xl:w-[95%]   max-xl:w-[88%] max-sm:w-full  max-lg:w-[75%] max-md:w-[93%] h-[44px]  ">
                <div className="flex max-sm:w-full  justify-between ">
                  <h3 className=" font-Yekan font-normal text-[16px] text-[#000000] dark:text-slate-200  ">
                    87%
                  </h3>
                  <h3 className="font-Yekan font-normal text-[16px] text-darkgreen text-right  dark:text-slate-200 ">
                    درصد تکمیل دوره
                  </h3>
                </div>

                <div className=" h-[8px] rounded-full max-sm:w-full  bg-[#F0F0F0] mt-2">
                  <motion.div
                  initial={{ width:0, x:0,opacity:0,y:0}}
                  animate={{width: "87%", x:0,y:0,opacity:1}}
                  transition={{type:"keyframe" ,stiffness:90,duration:3 , delay:0}}
                    className="h-[8px] rounded-full bg-primary  max-sm:w-full  dark:bg-secondary"
                  
                  >
                    {" "}
                  </motion.div>
                </div>
              </div>

              <hr className="border-[1.5px] max-2xl:w-[95%]  border-[#F6F6F6]  w-full max-xl:w-[88%] max-lg:w-[75%] max-md:hidden" />

              {/* more details of classes */}
              <motion.div 
              
                
              className='flex flex-wrap w-full gap-5  max-sm:justify-center  max-md:justify-start'>
              {coursedetals.map((item, index) => (
                <div
                
                data-aos="zoom-in-right"
                  key={index}
                  style={{boxShadow:" 0px 1px 2px 0 rgba(0, 0, 0, 0.25)"}}
                  className=" w-full max-2xl:w-[95%] h-[70px]  dark:bg-slate-800 bg-[#F7F7F7] max-sm:w-[45%]      max-md:w-[45%] max-md:mt-[-250px] max-lg:w-[75%] rounded-[10px] max-xl:w-[88%] flex gap-4 items-center justify-end p-[25px] "
                >
                  <div >
                    <h3 className=" max-lg:text-[13px] max-sm:text-[12px] max-sm:line-clamp-1  text-[#888888] dark:text-slate-200 font-Yekan font-normal text-[15px] leading-[24px] text-right">
                      {item.title}
                    </h3>
                    <h2 className=" text-darkgreen dark:text-secondary max-sm:text-[13px] max-sm:font-semibold  max-sm:line-clamp-1 max-lg:text-[18px] font-Yekan font-normal text-[21px] leading-[24px] text-right ">
                      {item.subtitle}
                    </h2>
                  </div>
                  {item.icon}
                </div>
              ))}</motion.div>

              <hr className="border-[1.5px] border-[#F6F6F6] w-full max-2xl:w-[95%] max-xl:w-[88%] max-lg:w-[75%] max-md:hidden" />

              {/* teachers profile */}
              <div  data-aos="zoom-in-right" className="max-sm:mx-auto  w-[177px] h-[200px] max-lg:mr-[130px] max-md:mt-[-260px] max-md:mr-[160px]  mx-auto max-xl:pr-[30px]">
                <img
                  className=" rounded-full    h-[135px] w-[135px] shadow-lg mx-auto mb-5"
                  src={profile}
                  alt=""
                />
                <button className=" text-[#6B3A00] max-sm:mx-auto max-sm:w-[100%] max-sm:text-[13px] max-xl:ml-[-15px] border-[2px] border-orange dark:text-secondary rounded-[25px] w-[177px] h-[40px] text-center font-Yekan text-[16px] font-normal mx-auto">
                  پروفایل مدرس دوره
                </button>
              </div>
            </div>
          </div>
        </>
  )
}

export default Detail