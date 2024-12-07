import React from "react";
import Telegram from "../assets/landing/telegram.png";
import instagram from "../assets/landing/instagram.png";
import youtube from "../assets/landing/youtube.png";
import linkdin from "../assets/landing/linkdin.png";

const FooterAuth = () => {
  return (
    <div className="container h-[70px]  flex items-center ">
      <div className="flex justify-start flex-row gap-3 items-center  w-[400px] h-[60px]">
        <div className="w-[55%] h-[52%] bg-green rounded-2xl text-white text-center leading-[30px] dark:bg-orange">
          info@pazhooheshgah.ir
        </div>

        <div className="w-[8%] h-[50%] bg-green rounded-full dark:bg-orange">
          <img src={Telegram} alt="" className="ml-[4px] mt-[3px]" />
        </div>
        <div className="w-[8%] h-[50%] bg-green rounded-full dark:bg-orange">
          <img src={instagram} alt="" className="ml-[4px] mt-[3px]" />
        </div>
        <div className="w-[8%] h-[50%] bg-green rounded-full dark:bg-orange">
          <img src={youtube} alt="" className="ml-[4px] mt-[3px]" />
        </div>
        <div className="w-[8%] h-[50%] bg-green rounded-full dark:bg-orange">
          <img src={linkdin} alt="" className="ml-[4px] mt-[3px]" />
        </div>
      </div>
    </div>
  );
};

export default FooterAuth;
