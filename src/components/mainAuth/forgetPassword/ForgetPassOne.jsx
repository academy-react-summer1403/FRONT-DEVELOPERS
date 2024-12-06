import React from "react";
import { motion } from "framer-motion";
import AuthB1Img from "../../../assets/landing/authback1.png";
import Squer from "../../../assets/landing/one.svg";
import Back from "../../../assets/landing/authBack.png";
import Background from "../../../assets/landing/backgroundV.png";
import more from "../../../assets/landing/moreCourse.png";
import { NavLink } from "react-router-dom";
import { usePostForgetPassword } from "../../../core/services/mutation/Authmutation";
import { useForm } from "react-hook-form";

const ForgetPassOne = () => {
  const { handleSubmit, register } = useForm();

  const PostForgetPassword = usePostForgetPassword();
  const changePasswrod = (data) => {
    const params = {
      email: data.email,
      baseUrl: "http://localhost:5173/auth/forget2",
    };
    PostForgetPassword.mutate(params);
  };

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
          className="w-[800px]  h-[500px] mt-[10px] relative rounded-2xl "
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
              alt=""
              className="w-[350px] h-[360px]   mx-auto mt-[10%] max-md:mt-[15%] relative"
            >
              <div className="absolute w-[300px] h-[200px] left-[25px] top-[120px] ">
                <h1 className="w-[200px] h-[50px] text-green text-2xl mx-auto text-center absolute left-[50px] -top-[70px] font-semibold">
                  تغییر رمز عبور
                </h1>

                <form onSubmit={handleSubmit(changePasswrod)}>
                  <div className="relative flex flex-col gap-4">
                    <input
                      id="email"
                      name="email"
                      placeholder="ایمیل"
                      {...register("email")}
                      className="w-[200px] h-[40px] ml-[50px] mt-2 outline-none shadow-inner shadow-gray-400 border border-gray-300 rounded-lg bg-gray-100
                                        text-[10px] font-semibold text-left indent-[10px] dark:text-black"
                      required
                    />

                    <button
                      type="submit"
                      className="w-[90px] h-[30px] rounded-2xl bg-orange absolute top-[100px] right-[105px] text-white text-[10px] font-semibold"
                    >
                      مرحله بعد
                    </button>

                    <NavLink to={"/auth"}>
                      <button className="w-[90px] h-[30px] rounded-2xl  absolute top-[130px] right-[105px] text-green text-[10px] font-semibold">
                        ثبت نام
                      </button>
                    </NavLink>
                  </div>
                </form>
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

export default ForgetPassOne;
