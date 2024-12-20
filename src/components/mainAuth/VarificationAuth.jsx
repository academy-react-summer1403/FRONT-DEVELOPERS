import React, { useState } from "react";
import { motion } from "framer-motion";
import AuthB1Img from "../../assets/landing/authback2.png";
import Squer from "../../assets/landing/one.svg";
import Back from "../../assets/landing/authBack.png";
import Background from "../../assets/landing/background.png";
import more from "../../assets/landing/more course 2.png";
import * as yup from "yup";

import "react-verification-input-aria/lib/style.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { postCode } from "../../core/services/authApi";
import OTPInput from "react-otp-input";
import "react-toastify/dist/ReactToastify.css";

const VarificationAuth = () => {
  const { phoneNumber } = useParams();

  const [verifyCode, setVerifyCode] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const code = {
      verifyCode: verifyCode,
      phoneNumber: phoneNumber,
    };

    const res = postCode(code);

    navigate("/auth/3");
  };

  const style = {
    margin: "auto",
    display: "flex",
    padding: "1rem",
    borderRadius: 10,
    maxWidth: "350px",
    marginBottom: "2rem",
    alignItems: "center",
    background: "#ffffff",
    justifyContent: "center",
    border: "1px solid #ddd",
    color: "black",
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
            <NavLink to={"/auth"}>
              <img src={more} alt="" />
            </NavLink>
          </div>

          <div className="w-full h-full border border-[#fff0] relative">
            <img
              src={Background}
              alt=""
              className="w-full h-full opacity-80 dark:opacity-50 absolute top-0 left-0 max-sm:hidden"
            />
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              //   src={HeroAImg}
              alt=""
              className="w-[350px] h-[360px] mx-auto mt-[10%] max-md:mt-[15%] relative"
            >
              {/* formik section  */}

              <div className="absolute w-[300px]  h-[100px] left-[25px] top-[150px] ">
                {/* text section  */}

                <h1 className="w-[200px] h-[50px] text-green text-xl mx-auto text-center absolute left-[50px] -top-[110px] font-semibold">
                  کد تایید
                </h1>

                <p className=" w-[200px] h-[20px] text-gray-500 text-[9px] mx-auto text-center absolute left-[50px] -top-[70px] font-sans">
                  کد تایید به شماره ی {phoneNumber} ارسال شده است ، در صورت
                  مغایرت روی <h1 className="text-primary">ویرایش</h1> کلیک کنید
                </p>

                {/* form  */}

                <form
                  // initialValues={{ title: "", desc: "" }}
                  onSubmit={(values) => onSubmit(values)}
                  validationSchema={validation}
                >
                  <div className="-mt-[10px]">
                    <OTPInput
                      value={verifyCode.toString("")}
                      onChange={(e) => setVerifyCode(e.toString(""))}
                      numInputs={5}
                      renderInput={(inputProps, index) => (
                        <input {...inputProps} key={index} />
                      )}
                      inputStyle={{
                        width: "3rem",
                        height: "3rem",
                        border: "1px solid #ccc",
                        margin: "10px 0.35rem",
                        fontSize: "1.5rem",
                        borderRadius: "4px",
                      }}
                    />

                    <button
                      type="submit"
                      className="w-[90px] h-[30px] rounded-2xl bg-orange absolute top-[100px] right-[105px] text-white text-[10px] font-semibold"
                    >
                      ایجاد حساب کاربری
                    </button>

                    <button
                      type="submit"
                      className="w-[90px] h-[30px] rounded-2xl  absolute top-[130px] right-[105px] text-green text-[10px] font-semibold underline underline-offset-[5px]"
                    >
                      ارسال دوباره کد
                    </button>
                  </div>
                </form>
              </div>

              <motion.img src={AuthB1Img} className="w-full h-full" />

              {/* number section  */}
              <motion.div className="absolute  top-[157px] -left-[40px]">
                <p className="absolute text-red-500 top-[12px] left-[23px]">
                  2
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

export default VarificationAuth;
