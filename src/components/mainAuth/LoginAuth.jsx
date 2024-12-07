import React, { useState } from "react";
import { motion } from "framer-motion";
import AuthB1Img from "../../assets/landing/authback3.png";
import Squer from "../../assets/landing/one.svg";
import Back from "../../assets/landing/authBack.png";
import Background from "../../assets/landing/background.png";
import more from "../../assets/landing/more course 2.png";

import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { postRegister } from "../../core/services/authApi";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";

const LoginAuth = () => {
  const [password, setPassword] = useState("");
  const [gmail, setGmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      phoneNumber: phoneNumber,
      gmail: gmail,
      password: password,
    };

    const res = postRegister(user);

    navigate("/");
  };

  const [showHidePassword, setShowHidePassword] = useState(false);

  const validation = yup.object().shape({
    email: yup
      .string()
      .email("InvalidEmail")
      .required("پر کردن این فیلد اجباریست"),

    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),

    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  return (
    <div className="container h-[530px] relative
        max-sm:bg-gradient-to-br from-secondary/20 dark:from-amber-100/80 from-10% to-primary/30 dark:to-cyan-100/80 to-90%
    ">
      {/* hero image  */}
      <div className="flex justify-center items-center relative ">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="w-[800px]  h-[500px] mt-[10px] relative
         rounded-2xl 
          "
        >
          <h1
            className="absolute w-[100px] h-[50px]  text-center font-semibold text-green hover:text-orange dark:text-white 
          leading-[50px] top-[65px] -right-[90px] max-sm:hidden"
          >
            ثبت نام
          </h1>

          <h1
            className="absolute w-[100px] h-[50px]  text-center font-semibold text-green hover:text-orange dark:text-white 
          leading-[50px] top-[155px] -right-[90px] max-sm:hidden"
          >
            ورود
          </h1>

          <div
            className="absolute w-[90px] h-[50px] z-[5000] text-center font-semibold text-green hover:text-orange dark:text-white 
          leading-[50px] -bottom-[10px] right-[50px]"
          >
            <NavLink to={"/auth/2"}>
              {" "}
              <img src={more} alt="" />
            </NavLink>
          </div>

          <div className="w-full h-full border border-[#fff0] relative">
            <img
              src={Background}
              alt=""
              className="w-full h-full opacity-80 dark:opacity-50 absolute top-0 left-0  max-sm:hidden"
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

              <div className="absolute w-[300px] h-[200px] left-[25px] top-[100px] ">
                {/* text section  */}

                <h1 className="w-[200px] h-[50px] text-green text-xl mx-auto text-center absolute left-[50px] -top-[70px] font-semibold">
                  ورود به حساب کاربری
                </h1>

                {/* form  */}

                <form
                  // initialValues={{ title: "", desc: "" }}
                  onSubmit={(values) => onSubmit(values)}
                  validationSchema={validation}
                >
                  <div className="flex flex-col gap-4 relative">
                    <input
                      type="text"
                      placeholder="شماره همراه"
                      name="email"
                      className="w-[200px] h-[40px] ml-[50px] outline-none shadow-inner shadow-gray-400 border border-gray-300 rounded-lg bg-gray-100
                        text-[10px] font-semibold text-left indent-[10px] dark:text-black"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      // value={item.title}
                      required
                    />
                    {/* <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 w-[50px] text-[10px] font-semibold absolute whitespace-nowrap top-[35px] left-[50px] "
                      /> */}

                    <input
                      type="text"
                      placeholder="ایمیل"
                      name="password"
                      className="w-[200px] h-[40px] ml-[50px] outline-none shadow-inner shadow-gray-400 border border-gray-300 rounded-lg bg-gray-100
                        text-[10px] font-semibold text-left indent-[10px] dark:text-black"
                      onChange={(e) => setGmail(e.target.value)}
                      // value={item.title}
                      required
                    />
                    {/* <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 w-[50px] text-[10px] font-semibold absolute whitespace-nowrap top-[90px] left-[50px] "
                      /> */}

                    {/* show/hide icon  */}
                    <i
                      onClick={() => setShowHidePassword(!showHidePassword)}
                      className="absolute right-16 bottom-[12px]"
                    >
                      {showHidePassword ? (
                        <IoEyeOutline className="text-green" />
                      ) : (
                        <FaRegEyeSlash className="text-green" />
                      )}
                    </i>
                    <input
                      type={showHidePassword ? "text" : "password"}
                      placeholder=" رمز عبور"
                      name="confirmPassword"
                      className="w-[200px] h-[40px] ml-[50px] outline-none shadow-inner shadow-gray-400 border border-gray-300 rounded-lg bg-gray-100
                        text-[10px] font-semibold text-left indent-[10px] dark:text-black"
                      onChange={(e) => setPassword(e.target.value)}
                      // value={item.title}
                      required
                    />
                    {/* <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-red-500 w-[50px] text-[10px] font-semibold absolute whitespace-nowrap top-[150px] left-[50px] "
                      /> */}

                    <button
                      type="submit"
                      className="w-[100px] h-[30px] rounded-2xl bg-orange absolute top-[180px] right-[100px] text-white text-[10px] font-semibold"
                    >
                      ورود به حساب کاربری
                    </button>
                  </div>
                </form>
              </div>

              <motion.img src={AuthB1Img} className="w-full h-full" />

              {/* number section  */}
              <motion.div className="absolute  top-[257px] -left-[40px]">
                <p className="absolute text-red-500 top-[12px] left-[23px]">
                  3
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

export default LoginAuth;
