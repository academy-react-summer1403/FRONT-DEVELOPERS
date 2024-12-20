import React, { useState } from "react";
import { motion } from "framer-motion";
import AuthB1Img from "../../assets/landing/authback1.png";
import Squer from "../../assets/landing/one.svg";
import Back from "../../assets/landing/authBack.png";
import Background from "../../assets/landing/background.png";
import more from "../../assets/landing/moreCourse.png";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { postNumber } from "../../core/services/authApi";

const SignAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const number = {
      phoneNumber: phoneNumber,
    };

    const res = postNumber(number);

    navigate(`/auth/2/${phoneNumber}`);
  };

  const validation = yup.object().shape({
    title: yup.string().required("پر کردن این فیلد اجباریست"),
  });

  return (
    <div className="container h-[530px] relative
      max-sm:bg-gradient-to-br from-secondary/20 dark:from-amber-100/80 from-10% to-primary/30 dark:to-cyan-100/80 to-90%
    ">
     

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
          leading-[50px] top-[65px] -right-[90px] max-sm:hidden"
          >
            ثبت نام
          </NavLink>

          <NavLink
            to={"/auth/v1"}
            className="absolute w-[100px] h-[50px]  text-center font-semibold text-green hover:text-orange dark:text-white 
        leading-[50px] top-[155px] -right-[90px] max-sm:hidden"
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

          <div className="w-full h-full border border-[#fff0] relative ">
            <img
              src={Background}
              alt=""
              className="w-full h-full opacity-80 dark:opacity-50 absolute top-0 left-0  max-sm:hidden"
            />
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="w-[350px] h-[360px]  mx-auto mt-[10%] max-md:mt-[15%] relative  "
            >
              {/* formik section  */}

              <div className="absolute w-[300px] h-[200px] left-[25px] top-[150px] ">
                {/* text section  */}

                <h1 className="w-[200px] h-[50px] text-green text-xl mx-auto text-center absolute left-[50px] -top-[70px] font-semibold">
                  ایجاد حساب کاربری
                </h1>

                {/* form  */}

                <form
                  onSubmit={(values) => onSubmit(values)}
                  validationSchema={validation}
                >
                  <input
                    type="text"
                    placeholder="شماره همراه"
                    name="title"
                    className="w-[200px] h-[40px] ml-[50px] outline-none shadow-inner shadow-gray-400 border border-gray-300 rounded-lg bg-gray-100
                      text-[10px] font-semibold text-left indent-[10px] dark:text-black"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />

                  <button
                    type="submit"
                    className="w-[90px] h-[30px] rounded-2xl bg-orange absolute top-[80px] right-[105px] text-white text-[10px] font-semibold"
                  >
                    دریافت کد تایید
                  </button>

                  <NavLink to={"/auth/v1"}>
                    <button className="w-[90px] h-[30px] rounded-2xl  absolute top-[110px] right-[105px] text-green text-[10px] font-semibold">
                      ورود
                    </button>
                  </NavLink>
                </form>
              </div>

              <motion.img src={AuthB1Img} className="w-full h-full " />

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

export default SignAuth;
