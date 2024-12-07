import React, { useState } from "react";
import { motion } from "framer-motion";
import AuthB1Img from "../../assets/landing/authback1.png";
import Squer from "../../assets/landing/one.svg";
import Background from "../../assets/landing/backgroundV.png";
import more from "../../assets/landing/moreCourse.png";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { handleToken } from "../../core/redux/slices/QueryState/TokenSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { postQuery } from "../../core/services/mutation/Authmutation";

const VorodAuth = () => {
  const Switch = useSelector((state) => state.SwetchSlice);

  const [showHidePassword, setShowHidePassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const loginQuery = postQuery();
  const [password, setPassword] = useState("");

  const handleCreateSubmit = (user) => {
    loginQuery.mutate(user);
    setPassword(user.password);
  };
  const token = loginQuery?.data?.token;

  localStorage.setItem("token", token);
  dispatch(handleToken(token));

  if (loginQuery?.data?.message === "ارسال پیامک انجام شد.") {
    const phoneNumber = loginQuery?.data?.phoneNumber;
    navigate(`/auth/v2/${phoneNumber}/${password}`);
  }

  if (token) {
    toast.success("ورود با موفقیت انجام شد", {
      theme: "colored",
      className: "custom-toast",
    });
    
    navigate("/auth/suggestion");
  } else if (token == "") {
    toast.error("اطلاعات ورودی نادرست است", {
      theme: "colored",
      className: "custom-toast",
    });
  }

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
  });

  return (
    <div className="container relative
     max-sm:bg-gradient-to-br from-secondary/20 dark:from-amber-100/80 from-10% to-primary/30 dark:to-cyan-100/80 to-90%">
     

      {/* hero image  */}
      <div className="flex justify-center items-center relative  ">
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
          className="w-[800px]  h-[500px] mt-[10px] relative rounded-2xl "
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
              className="w-full h-full opacity-80 dark:opacity-50 absolute top-0 left-0 max-sm:hidden "
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

                <h1 className="w-[200px] h-[50px] text-green text-xl mx-auto text-center absolute left-[50px] -top-[70px] font-semibold">
                  ورود به حساب کاربری
                </h1>

                {/* form  */}

                <form
                  onSubmit={handleSubmit(handleCreateSubmit)}
                  validationSchema={validation}
                >
                  <div className="relative flex flex-col gap-4">
                    <input
                      id="email"
                      name="email"
                      placeholder="ایمیل یا شماره همراه"
                      {...register("phoneOrGmail")}
                      className="w-[200px] h-[40px] ml-[50px] outline-none shadow-inner shadow-gray-400 border border-gray-300 rounded-lg bg-gray-100
                    text-[10px] font-semibold text-left indent-[10px] dark:text-black"
                      required
                    />

                    <i
                      onClick={() => setShowHidePassword(!showHidePassword)}
                      className="absolute right-16 bottom-[27px]"
                    >
                      {showHidePassword ? (
                        <IoEyeOutline className="text-green" />
                      ) : (
                        <FaRegEyeSlash className="text-green" />
                      )}
                    </i>
                    <input
                      type={showHidePassword ? "text" : "password"}
                      placeholder="رمز عبور"
                      name="password"
                      className="w-[200px] h-[40px] ml-[50px] outline-none shadow-inner shadow-gray-400 border border-gray-300 rounded-lg bg-gray-100
                    text-[10px] font-semibold text-left indent-[10px] dark:text-black"
                      {...register("password")}
                      required
                    />

                    <button
                      type="submit"
                      className="w-[90px] h-[30px] rounded-2xl bg-orange absolute top-[130px] right-[105px] text-white text-[10px] font-semibold"
                    >
                      ورود به حساب
                    </button>

                    <NavLink to={"/auth"}>
                      <button className="w-[90px] h-[30px] rounded-2xl  absolute top-[160px] right-[105px] text-green text-[10px] font-semibold">
                        ثبت نام
                      </button>
                    </NavLink>
                  </div>
                </form>

                <NavLink to={"/auth/forget1"}>
                  <h1
                    className="w-[60px] h-[10px]  absolute left-[55px] bottom-[85px] text-[8px] font-semibold text-orange
                  text-center whitespace-nowrap"
                  >
                    فراموشی رمز عبور
                  </h1>
                </NavLink>
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

export default VorodAuth;
