import React from 'react'
import { motion } from "framer-motion";
import AuthB1Img from "../../assets/landing/authback2.png";
import Squer from "../../assets/landing/one.svg";
import Back from "../../assets/landing/authBack.png";
import Background from "../../assets/landing/background.png";
import more from "../../assets/landing/more course 2.png";
import {  Field, Form, Formik } from "formik";
import * as yup from "yup";
import ReactVerificationInput from "react-verification-input-aria";
import "react-verification-input-aria/lib/style.css";



const VarificationAuth = () => {
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
    color:"black"
  };




    const validation = yup.object().shape({
      title: yup.string().required("پر کردن این فیلد اجباریست"),
    });


  return (
    <div className="container h-[530px] relative">
    <img
      src={Back}
      alt=""
      className="absolute rotate-180 left-[300px] -top-[40px] w-[1000px] opacity-30"
    />

    {/* hero image  */}
    <div className="flex justify-center items-center relative ">
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        className="w-[800px]  h-[500px] mt-[10px]
     rounded-2xl 
      "
      >
        <h1
          className="absolute w-[100px] h-[50px]  text-center font-semibold text-green hover:text-orange dark:text-white 
      leading-[50px] top-[65px] -right-[90px]"
        >
          ثبت نام
        </h1>

        <h1
          className="absolute w-[100px] h-[50px]  text-center font-semibold text-green hover:text-orange dark:text-white 
      leading-[50px] top-[155px] -right-[90px]"
        >
          ورود
        </h1>

        <div
          className="absolute w-[90px] h-[50px] z-[5000] text-center font-semibold text-green hover:text-orange dark:text-white 
      leading-[50px] -bottom-[10px] right-[50px]"
        >
          <img src={more} alt="" />
        </div>

        <img
          src={Background}
          alt=""
          className="w-full h-full opacity-80 dark:opacity-50 "
        />
        <div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            //   src={HeroAImg}
            alt=""
            className="w-[350px] h-[360px] absolute left-[225px] top-[80px]"
          >





            {/* formik section  */}

            <div className="absolute w-[300px]  h-[100px] left-[25px] top-[150px] ">
              {/* text section  */}

              <h1 className="w-[200px] h-[50px] text-green text-xl mx-auto text-center absolute left-[50px] -top-[110px] font-semibold">
                کد تایید
              </h1>

              <p className=" w-[200px] h-[20px] text-gray-500 text-[9px] mx-auto text-center absolute left-[50px] -top-[70px] font-sans">
              کد تایید به شماره ی {`09926695494`} ارسال شده است ، در صورت مغایرت روی <h1 className="text-primary">ویرایش</h1> کلیک کنید
              </p>

              {/* form  */}

              <Formik 
                initialValues={{ title: "", desc: "" }}
                // onSubmit={(values) => onSubmit(values)}
                validationSchema={validation}
              >
                <Form className='-mt-[10px]'>

                
                <div 
                  style={{
                    ...style,
                    background: "#fff",
                    
                  }}
                >
                  <ReactVerificationInput number fields={5} styleType="underlined" />
                </div>

                  {/* <Field
                    type="text"
                    placeholder="شماره همراه"
                    name="title"
                    className="w-[200px] h-[40px] ml-[50px] outline-none shadow-inner shadow-gray-400 border border-gray-300 rounded-lg bg-gray-100
                    text-[10px] font-semibold text-left indent-[10px] dark:text-black"
                    // onChange={HandleChangeItem}
                    // value={item.title}
                    required
                  /> */}
                 
                  
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
                </Form>
              </Formik>
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
  )
}

export default VarificationAuth
