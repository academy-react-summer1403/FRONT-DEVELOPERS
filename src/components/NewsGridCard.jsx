import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImageErrore } from "./ImageErrore";
import { IoIosArrowBack } from "react-icons/io";

const NewGridCard = ({
  title,
  newsCatregoryName,
  currentRegistrants,
  addUserFullName,
  currentImageAddressTumb,
  id,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <NavLink to={"/article-detail/" + id}>
      <Tilt className="mt-[80px] max-2xl:-ml-6 mb-5 max-sm:-ml-8 grid justify-items-center">
        <div
          data-aos="zoom-out-left"
          data-aos-duration="900"
          className="relative rounded-[15px] w-[265px] max-xl:w-[230px] max-sm:w-[240px] max-sm:ml-2 max-md:h-[320px]  
        max-md:w-[255px] max-sm:h-[310px] h-[305px] dark:hover:bg-gray-600  max-xl:flex flex-wrap justify-center hover:bg-slate-50 
        bg-white px-4 dark:bg-gray-700/70"
          style={{ boxShadow: "0px 1px 2px 0px #00000040" }}
        >
          {/* card image   */}
          <div
            style={{ boxShadow: " 0px 1px 4px 0px #00000040" }}
            className="relative w-[233px] h-[150px] rounded-[10px]   top-[-20px]
              max-md:h-[130px]"
          >
            <img
              src={
                currentImageAddressTumb ? currentImageAddressTumb : ImageErrore
              }
              onError={ImageErrore}
              className="rounded-xl w-full h-full"
            />
          </div>

          {/* card body  */}
          <div className="relative top-[-10px] overflow-hidden">
            <h3 className=" text-[#444444] text-right text-[19px] line-clamp-1   max-md:text-[16px] font-Yekan font-bold mr-1 dark:text-white">
              {title}
            </h3>

            <div className="  mt-6 mr-1">
              <div className="  h-[17px] flex justify-between">
                <h3 className="  flex h-full items-center gap-1 text-[16px] max-md:text-[14px] font-normal font-Yekan text-[#888888]">
                  {currentRegistrants}
                </h3>

                <h3 className="  flex h-full items-center gap-1 text-[16px] max-md:text-[14px] font-normal font-Yekan text-[#888888]">
                  {addUserFullName}
                  <svg
                    width="13"
                    height="17"
                    viewBox="0 0 13 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.35378 4.25C9.35378 4.95448 9.08533 5.63011 8.6075 6.12825C8.12966 6.6264 7.48158 6.90625 6.80581 6.90625C6.13005 6.90625 5.48197 6.6264 5.00413 6.12825C4.5263 5.63011 4.25785 4.95448 4.25785 4.25C4.25785 3.54552 4.5263 2.86989 5.00413 2.37175C5.48197 1.8736 6.13005 1.59375 6.80581 1.59375C7.48158 1.59375 8.12966 1.8736 8.6075 2.37175C9.08533 2.86989 9.35378 3.54552 9.35378 4.25ZM1.71057 14.2503C1.73241 12.8565 2.27883 11.5275 3.23199 10.5499C4.18516 9.57237 5.4687 9.0245 6.80581 9.0245C8.14293 9.0245 9.42647 9.57237 10.3796 10.5499C11.3328 11.5275 11.8792 12.8565 11.9011 14.2503C10.3026 15.0144 8.56435 15.4087 6.80581 15.4063C4.98759 15.4063 3.26177 14.9926 1.71057 14.2503Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </h3>
              </div>

              <div className=" h-[17px] mt-2 flex justify-end">
                <h3 className=" flex h-full items-center gap-1 text-[16px] max-md:text-[14px] font-normal font-Yekan text-[#888888]">
                  {newsCatregoryName}

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.00006 3V7H10.0001M13.0001 7C13.0001 7.78793 12.8449 8.56815 12.5433 9.2961C12.2418 10.0241 11.7999 10.6855 11.2427 11.2426C10.6855 11.7998 10.0241 12.2417 9.29616 12.5433C8.56821 12.8448 7.78799 13 7.00006 13C6.21213 13 5.43191 12.8448 4.70396 12.5433C3.97601 12.2417 3.31457 11.7998 2.75742 11.2426C2.20027 10.6855 1.75831 10.0241 1.45678 9.2961C1.15526 8.56815 1.00006 7.78793 1.00006 7C1.00006 5.4087 1.6322 3.88258 2.75742 2.75736C3.88264 1.63214 5.40876 1 7.00006 1C8.59136 1 10.1175 1.63214 11.2427 2.75736C12.3679 3.88258 13.0001 5.4087 13.0001 7Z"
                      stroke="#888888"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </h3>
              </div>
            </div>

            <hr className=" my-3" />

            <div className="  h-[25px] flex text-center text-green items-center  justify-center">
              <IoIosArrowBack className=" w-4 h-4 mt-[1px]" />
              <h3 className=""> مطالعه بیشتر</h3>
            </div>
          </div>
        </div>
      </Tilt>
    </NavLink>
  );
};

export default NewGridCard;
