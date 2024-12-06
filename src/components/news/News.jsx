import React, { useEffect } from "react";
import Img1 from "../../assets/detail/01.jpg";
import Img2 from "../../assets/detail/02.jpg";
import Img3 from "../../assets/detail/03.jpg";
import Img4 from "../../assets/detail/04.jpg";
import Img5 from "../../assets/detail/05.jpg";
import Img6 from "../../assets/detail/06.jpg";
import { NavLink } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="max-md:px-5 max-sm:px-1 flex items-center flex-col mt-[170px] h-[700px] max-md:h-[870px]">
      {/* text section  */}
      <h1 className=" head1">
        {" "}
        {t("news")}
        <div className="head2"></div>{" "}
      </h1>
      <h3 className=" head3"> {t("news2")}</h3>

      {/* body section  */}
      <div className="flex h-[474px] max-md:h-[870px] w-[1068px] max-md:w-full  justify-between max-xl:justify-center mt-10 max-sm:gap-2">
        <div
          data-aos="fade-right"
          data-aos-duration="900"
          className=" w-[522px] max-sm:w-[200px] max-xl:w-[500px] max-md:w-full relative h-full flex justify-between max-xl:justify-center flex-wrap gap-5 max-sm:gap-1 max-xl:gap-3"
        >
          <div
            style={{
              boxShadow: "0px 2px 5px 0px #00000040",
              background: `url(${Img1})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
            className=" rounded-[15px] max-xl:w-[228px] max-xl:h-[228px] w-[250px] h-[250px] group max-md:absolute max-md:left-0 max-md:top-0 max-md:w-[280px] max-sm:w-[200px] max-sm:h-[200px]"
          >
            <div
              className=" border max-xl:w-[228px] max-xl:h-[228px]  border-[#b8b7b7] transform transition-all hover:backdrop-blur-sm rounded-[15px] max-md:w-[280px] max-sm:w-[200px] max-sm:h-[200px] w-[250px] h-[250px]"
              style={{
                background:
                  " linear-gradient(180deg, rgba(228, 137, 0, 0) -1.5%, #00E7E1 100%)",
              }}
            >
              <h3 className="mt-[85%] mr-[6%] max-md:mt-[60%] max-xl:text-[13.5px] transform transition-all  group-hover:opacity-0 text-[14px] text-right font-semibold text-[#005B58] font-Yekan">
                {t("new1")}
              </h3>
            </div>

            <h3 className=" relative opacity-0 transform transition-all  group-hover:opacity-100 w-[120px] h-[30px] pt-1 rounded-[20px] bg-[#E48900] mx-auto -mt-[50%] max-md:mt-[-45%]  text-center text-[#6C3A00] text-[15px] font-Yekan font-normal">
              مطالعه مطلب
            </h3>
          </div>

          <div
            style={{
              boxShadow: "0px 2px 5px 0px #00000040",
              background: `url(${Img2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "50%",
            }}
            className="  max-lg:absolute max-lg:bottom-0 max-md:left-0 max-md:bottom-0 rounded-[15px] max-md:top-60 max-md:w-[280px]   w-[250px] max-xl:w-[228px] max-xl:h-[228px] h-[250px] group max-sm:w-[200px] max-sm:h-[200px]"
          >
            <div
              className=" border border-[#b8b7b7] max-xl:w-[228px] max-xl:h-[228px] transform transition-all hover:backdrop-blur-sm  max-md:w-[280px]  rounded-[15px]  w-[250px] h-[250px] max-sm:w-[200px] max-sm:h-[200px]"
              style={{
                background:
                  " linear-gradient(180deg, rgba(228, 137, 0, 0) -1.5%, #00E7E1 100%)",
              }}
            >
              <h3 className="mt-[80%] max-md:mt-[60%] mr-[6%] text-[15px] transform transition-all  group-hover:opacity-0 text-right font-semibold text-[#005B58] font-Yekan leading-[21px]">
                {t("new2")}
              </h3>
              <h3 className=" max-md:mt-[-40%] opacity-0 transform transition-all  group-hover:opacity-100 w-[120px] h-[30px] pt-1 rounded-[20px] bg-[#E48900] mx-auto -mt-[50%]  text-center text-[#6C3A00] text-[15px] font-Yekan font-normal">
                مطالعه مطلب
              </h3>
            </div>
          </div>

          <div
            style={{
              boxShadow: "0px 2px 5px 0px #00000040",
              background: `url(${Img3})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "0%",
            }}
            className="   max-lg:absolute max-lg:bottom-0  max-md:-bottom-0  max-lg:left-96  max-md:left-0   max-md:w-[280px] rounded-[15px] max-lg:w-[228px]  max-lg:h-[228px] max-xl:w-[480px] w-full h-[200px] group max-sm:w-[200px] max-sm:h-[200px]"
          >
            <div
              className=" border border-[#b8b7b7] max-lg:w-[228px]  max-lg:h-[228px]  max-md:w-[280px] transform transition-all hover:backdrop-blur-sm rounded-[15px]  w-full h-[200px] max-sm:w-[200px] max-sm:h-[200px]"
              style={{
                background:
                  " linear-gradient(180deg, rgba(228, 137, 0, 0) -1.5%, #00E7E1 100%)",
              }}
            >
              <h3 className="mt-[30%] mr-[6%] max-md:mt-[60%]  max-xl:mt-[35%] max-lg:mt-[78%] text-[15px] transform transition-all  text-right group-hover:opacity-0 font-semibold text-[#005B58] font-Yekan leading-[21px]">
                {" "}
                {t("new3")}{" "}
              </h3>
              <h3 className="max-md:mt-[-40%] opacity-0 transform transition-all  group-hover:opacity-100 w-[120px] h-[30px] pt-1 rounded-[20px] bg-[#E48900] mx-auto mt-[-15%]  text-center text-[#6C3A00] text-[15px] font-Yekan font-normal">
                مطالعه مطلب
              </h3>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="900"
          className="w-[522px] max-sm:w-[200px] max-xl:w-[500px]  relative max-xl:gap-3 max-xl:justify-center h-full flex justify-between flex-wrap gap-5 max-sm:gap-1"
        >
          <div
            style={{
              boxShadow: "0px 2px 5px 0px #00000040",
              background: `url(${Img4})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "50%",
            }}
            className="   max-lg:absolute max-lg:left-32 max-md:left-0  max-md:w-[280px] max-lg:bottom-0  rounded-[15px]  max-lg:w-[228px]  max-lg:h-[228px] max-xl:w-[480px]  w-full h-[200px] group max-sm:w-[200px] max-sm:h-[200px]"
          >
            <div
              className=" border max-lg:w-[228px]  max-lg:h-[228px] max-md:w-[280px] border-[#b8b7b7] rounded-[15px] transform transition-all hover:backdrop-blur-sm w-full h-[200px] max-sm:w-[200px] max-sm:h-[200px]"
              style={{
                background:
                  " linear-gradient(180deg, rgba(228, 137, 0, 0) -1.5%, #00E7E1 100%)",
              }}
            >
              <h3 className="max-md:mt-[60%]  mt-[30%] max-xl:mt-[35%] max-lg:mt-[78%] mr-[6%] text-[15px] transform transition-all  group-hover:opacity-0 text-right font-semibold text-[#005B58] font-Yekan leading-[21px]">
                {" "}
                {t("new3")}
              </h3>
              <h3 className="max-md:mt-[-40%]  opacity-0 transform transition-all  group-hover:opacity-100 w-[120px] h-[30px] pt-1 rounded-[20px] bg-[#E48900] mx-auto mt-[-15%]  text-center text-[#6C3A00] text-[15px] font-Yekan font-normal">
                {" "}
                {t("read")}
              </h3>
            </div>
          </div>

          <div
            style={{
              boxShadow: "0px 2px 5px 0px #00000040",
              background: `url(${Img5})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
            className="  max-lg:absolute max-lg:-left-[115px]  max-lg:top-0  max-md:left-0  rounded-[15px] max-xl:w-[228px] max-xl:h-[228px] w-[250px] h-[250px] group max-md:w-[280px] max-sm:w-[200px] max-sm:h-[200px]"
          >
            <div
              className=" border border-[#d8d6d6] max-xl:w-[228px] max-xl:h-[228px]  rounded-[15px]  transform transition-all hover:backdrop-blur-sm  w-[250px] h-[250px] max-md:w-[280px] max-sm:w-[200px] max-sm:h-[200px]"
              style={{
                background:
                  " linear-gradient(180deg, rgba(228, 137, 0, 0) -1.5%, #00E7E1 100%)",
              }}
            >
              <h3 className="mt-[80%] max-md:mt-[60%] transform transition-all  group-hover:opacity-0 mr-[7%] text-[14px] text-right font-semibold text-[#005B58] font-Yekan leading-[21px]">
                {t("new4")}
              </h3>
              <h3 className="max-md:mt-[-40%] opacity-0 transform transition-all  group-hover:opacity-100 w-[120px] h-[30px] pt-1 rounded-[20px] bg-[#E48900] mx-auto -mt-[50%]  text-center text-[#6C3A00] text-[15px] font-Yekan font-normal">
                {" "}
                {t("read")}{" "}
              </h3>
            </div>
          </div>

          <div
            style={{
              boxShadow: "0px 2px 5px 0px #00000040",
              background: `url(${Img6})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "50%",
            }}
            className="max-lg:right-36  max-lg:absolute  rounded-[15px] max-md:left-0 max-md:top-60 max-xl:w-[228px] max-xl:h-[228px] w-[250px] h-[250px] group max-md:w-[280px] max-sm:w-[200px] max-sm:h-[200px]"
          >
            <div
              className=" border border-[#b8b7b7] max-xl:w-[228px] max-xl:h-[228px] transform transition-all hover:backdrop-blur-sm  rounded-[15px] max-md:w-[280px]  w-[250px] h-[250px] max-sm:w-[200px] max-sm:h-[200px]"
              style={{
                background:
                  " linear-gradient(180deg, rgba(228, 137, 0, 0) -1.5%, #00E7E1 100%)",
              }}
            >
              <h3 className="transform max-md:mt-[65%] transition-al max-xl:text-[13.5px]  group-hover:opacity-0 mt-[85%] mr-[8%] text-[14px] text-right font-semibold text-[#005B58] font-Yekan">
                {t("new5")}
              </h3>
              <h3 className="max-md:mt-[-40%] opacity-0 transform transition-all   group-hover:opacity-100 w-[120px] h-[30px] pt-1 rounded-[20px] bg-[#E48900] mx-auto -mt-[50%]  text-center text-[#6C3A00] text-[15px] font-Yekan font-normal">
                {t("read")}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2    mx-auto mt-5 ">
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.84375 10.1875L1.15625 5.5L5.84375 0.8125"
            stroke="#AAAAAA"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <NavLink to={"/article-news"}>
          <h3 className=" text-right font-normal font-Yekan text-[18px] text-[#AAAAAA]">
            {" "}
            {t("showmore")}{" "}
          </h3>
        </NavLink>
      </div>
    </div>
  );
};

export default News;
