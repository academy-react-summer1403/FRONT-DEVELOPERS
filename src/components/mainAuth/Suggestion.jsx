import React from "react";

import { motion } from "framer-motion";
import AuthB1Img from "../../assets/landing/authback1.png";
import Squer from "../../assets/landing/one.svg";
import Back from "../../assets/landing/authBack.png";
import Background from "../../assets/landing/backgroundV.png";
import more from "../../assets/landing/moreCourse.png";

import { NavLink } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Suggestion = () => {
  return (
    <div className="container relative">
      <img
        src={Back}
        alt=""
        className="fixed rotate-180 left-[300px] top-[30px] w-[1000px] opacity-30"
      />

      {/* hero image  */}
      <div className="flex justify-center items-center relative">
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
          className="w-[800px]  h-[500px] mt-[10px] relative
     rounded-2xl 
      "
        >
          <NavLink
            to={"/auth"}
            className="absolute w-[100px] h-[50px]  text-center font-semibold text-green hover:text-orange dark:text-white 
      leading-[50px] top-[65px] -right-[90px]"
          >
            ثبت نام
          </NavLink>

          <NavLink
            to={"/auth/v1"}
            className="absolute w-[100px] h-[50px]  text-center font-semibold text-green hover:text-orange dark:text-white 
      leading-[50px] top-[155px] -right-[90px]"
          >
            ورود
          </NavLink>

          <div
            className="absolute w-[90px] h-[50px] z-[5000] text-center font-semibold text-green hover:text-orange dark:text-white 
      leading-[50px] -bottom-[10px] left-[20px]"
          >
            <NavLink to={"/"}>
              {" "}
              <img src={more} alt="" />
            </NavLink>
          </div>

          <div className="w-full h-full border border-[#fff0] relative">
            <img
              src={Background}
              alt=""
              className="w-full h-full opacity-80 dark:opacity-50 absolute top-0 left-0  "
            />
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              //   src={HeroAImg}
              alt=""
              className="w-[350px] h-[360px]   mx-auto mt-[10%] max-md:mt-[15%] relative"
            >
              {/* formik section  */}

              <div className="absolute w-[300px] h-[200px] left-[25px] top-[120px] ">
                {/* text section  */}

                <h1 className="w-[200px] h-[50px]  text-green text-xl mx-auto text-center absolute left-[50px] -top-[70px] font-semibold">
                  تنظیمات سایت خود را تکمیل کنید
                </h1>

                {/* form  */}

                <div className="relative flex flex-col gap-2">
                  <DotLottieReact
                    src="https://lottie.host/041fefcd-2b21-4d88-833b-288f7479f840/QgcX3hun9d.lottie"
                    loop
                    autoplay
                  />

                  <NavLink to={"/auth/s1"}>
                    <button
                      type="submit"
                      className="w-[90px] h-[30px]  rounded-2xl 7 absolute top-[170px] right-[-10px] text-green text-[10px] font-semibold"
                    >
                      الان تنطیم میکنم
                    </button>
                  </NavLink>

                  <NavLink to={"/"}>
                    <button className="w-[40px] h-[30px] rounded-2xl  absolute top-[170px]  left-[10px] text-slate-400 text-[10px] font-semibold">
                      بعدا
                    </button>
                  </NavLink>
                </div>
              </div>

              <motion.img src={AuthB1Img} className="w-full h-full" />

              {/* number section  */}
              <motion.div className="absolute  top-[65px] -left-[40px]">
                <p className="absolute text-red-500 top-[12px] left-[23px]">
                  1
                </p>
                <img src={Squer} alt="" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Suggestion;
