import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { SlSocialYoutube } from "react-icons/sl";
import { FaRegCopyright } from "react-icons/fa6";
import Brand from "../assets/landing/brand.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FooterLogo from "./FooterLogo";

const footerLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="relative mt-10 w-full">
      <div className="relative  w-full flex justify-center items-center max-md:h-[540px] h-[500px] max-[1015px]:bg-primary/20 ">
        <svg
          className="absolute bottom-0 w-full h-[75%] max-l:h-[65%]  mx-auto max-[1015px]:hidden"
          width="1440"
          height="364"
          viewBox="0 0 1440 364"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_109_620)">
            <path
              d="M-512 0L106.75 27.75L416.125 41.625L570.812 48.5625L648.156 52.0312C648.156 52.0312 705 27.75 725.5 27.75C746 27.75 803.406 52.0312 803.406 52.0312L881.312 48.5625L1037.12 41.625L1348.75 27.75L1972 0V496L1348.75 468L1037.12 454L881.312 447L803.406 443.5C803.406 443.5 742 468 725.5 468C709 468 648.156 443.5 648.156 443.5L570.812 447L416.125 454L106.75 468L-512 496V0Z"
              className="fill-primary/20 dark:fill-primary"
              fill-opacity="1"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_109_620"
              x="-518"
              y="-6"
              width="2496"
              height="508"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_109_620"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_109_620"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <div
          className="absolute xl:container mx-0 px-0 grid grid-cols-3 justify-center items-center w-full h-[400px] top-[100px]
                max-md:flex max-md:flex-col-reverse  max-md:top-[10px] max-md:h-[440px]
                max-[1015px]:top-[20px] 
            "
        >
          {/* left section  */}
          <div
            className=" grid-col-1 mt-40  px-4 grid grid-cols-3 
                    max-md:h-[100px]  max-md:px-0 max-md:mt-0 max-md:mb-1
                "
          >
            <div
              className="grid-col-1 h-[20%]  grid justify-items-end 
                    max-xl:ml-[40px] 
                    max-lg:ml-[10px] 
                    "
            >
              <img src={Brand} alt="" />
            </div>

            <ul className="grid-col-1 h-[20%] flex flex-col text-green/70  max-lg:text-xs max-md:mr-[10px] font-sans text-right text-sm ">
              <NavLink
                to={"/"}
                className="w-full  cursor-pointer hover:text-orange  transition-colors relative pr-4 group"
              >
                <div className="absolute right-0 top-2 w-1.5 h-1.5 bg-green/80 group-hover:bg-orange rounded-full"></div>
                {t("BestTeachers")}{" "}
              </NavLink>
              <NavLink
                to={"/"}
                className="w-full  cursor-pointer hover:text-orange  transition-colors relative pr-4 group"
              >
                <div className="absolute right-0 top-2 w-1.5 h-1.5 bg-green/80 group-hover:bg-orange rounded-full"></div>{" "}
                {t("catfooter")}{" "}
              </NavLink>
              <NavLink
                to={"/"}
                className="w-full  cursor-pointer hover:text-orange  transition-colors relative pr-4 group"
              >
                <div className="absolute right-0 top-2 w-1.5 h-1.5 bg-green/80 group-hover:bg-orange rounded-full"></div>
                {t("service")}
              </NavLink>
              <NavLink
                to={"/auth/3"}
                className="w-full  cursor-pointer hover:text-orange  transition-colors relative pr-4 group"
              >
                <div className="absolute right-0 top-2 w-1.5 h-1.5 bg-green/80 group-hover:bg-orange rounded-full"></div>{" "}
                {t("vorod")}
              </NavLink>
            </ul>

            <ul className="grid-col-1 h-[20%] flex flex-col  max-lg:text-xs max-md:mr-[10px]  text-right text-sm ">
              <NavLink
                to={"/courses"}
                className="w-full  text-green/70 cursor-pointer hover:text-orange  transition-colors relative pr-4 group"
              >
                <div className="absolute right-0 top-2 w-1.5 h-1.5 bg-green/80 group-hover:bg-orange rounded-full"></div>
                {t("courses")}
              </NavLink>
              <NavLink
                to={"/article-news"}
                className="w-full  text-green/70 cursor-pointer hover:text-orange  transition-colors relative pr-4 group"
              >
                <div className="absolute right-0 top-2 w-1.5 h-1.5 bg-green/80 group-hover:bg-orange rounded-full"></div>
                {t("news")}{" "}
              </NavLink>
              <NavLink
                to={"/"}
                className="w-full  text-green/70 cursor-pointer hover:text-orange  transition-colors relative pr-4 group"
              >
                <div className="absolute right-0 top-2 w-1.5 h-1.5 bg-green/80 group-hover:bg-orange rounded-full"></div>{" "}
                {t("Podcasts")}
              </NavLink>
              <NavLink
                to={"/"}
                className="w-full  text-green/70 cursor-pointer hover:text-orange  transition-colors relative pr-4 group"
              >
                <div className="absolute right-0 top-2 w-1.5 h-1.5 bg-green/80 group-hover:bg-orange rounded-full"></div>{" "}
                {t("call")}{" "}
              </NavLink>
            </ul>
          </div>

          {/* middle  */}
          <div className="grid-col-1 max-md:w-1/2 max-sm:w-full flex flex-col justify-center h-full pl-2 max-md:pl-0 max-md:mb-0">
            <div className="w-full mt-4 max-md:mt-0 h-[40%] flex justify-center max-md:mb-8">
              <FooterLogo />
            </div>
            <div
              className=" h-8 w-[60%] leading-8 rounded-full mx-auto flex justify-center bg-green text-white
                     max-md:w-full 
                     max-lg:w-[80%]
                     "
            >
              info@pazhooheshgah.ir
            </div>
            <div className="w-full pt-4 flex flex-row justify-center items-center gap-2 mb-2 ">
              <div className="w-9 h-9 rounded-full text-white  bg-green">
                <LiaTelegramPlane className="w-5 h-5 ml-2 mt-2" />
              </div>
              <div className="w-9 h-9 rounded-full text-white  bg-green">
                <FaInstagram className="w-5 h-5 ml-2 mt-2" />
              </div>
              <div className="w-9 h-9 rounded-full text-white  bg-green">
                <SlSocialYoutube className="w-5 h-5 ml-2 mt-2" />
              </div>
              <div className="w-9 h-9 rounded-full text-white  bg-green">
                <FaLinkedinIn className="w-5 h-5 ml-2 mt-2" />
              </div>
            </div>
          </div>

          {/* right section  */}
          <div className=" grid-col-1 h-full max-md:h-20 flex flex-col justify-center gap-3 items-end max-md:items-start px-8 max-md:mb-8">
            <div
              className=" mt-[100px] text-green text-xs text-right font-medium
                    max-lg:mr-2 
                    max-md:w-full max-md:text-right "
            >
              {t("footer2")}
            </div>
            <div
              className="text-green text-sm text-right font-semibold w-[70%] relative 
                    max-xl:w-[85%]
                    max-lg:mr-2 
                    max-md:w-full max-md:text-right"
            >
              {t("footer3")}
              <p className="absolute font-normal left-8 max-md:right-0 top-6 max-lg:top-14 max-md:top-10 max-lg:text-md">
                {" "}
                011-43332000
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[40px] flex justify-center items-center w-full bg-green absolute bottom-0 mx-auto z-50 text-sm max-sm:leading-0 text-white leading-10">
        <div className="flex flex-row-reverse  justify-center mx-auto gap-1  ">
          {t("footer1")}
          <FaRegCopyright className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
