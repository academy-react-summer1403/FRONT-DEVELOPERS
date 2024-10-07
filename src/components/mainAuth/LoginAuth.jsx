import React from 'react'
import { motion } from "framer-motion";
import AuthB1Img from "../../assets/landing/authback3.png";
import Squer from "../../assets/landing/one.svg";
import Back from "../../assets/landing/authBack.png";
import Background from "../../assets/landing/background.png";
import more from "../../assets/landing/more course 2.png";
import {  ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const LoginAuth = () => {
  const validation = yup.object().shape({
    email: yup.string().email("InvalidEmail").required("پر کردن این فیلد اجباریست"),

    password: yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),

  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match")
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
  
                <div className="absolute w-[300px] h-[200px] left-[25px] top-[100px] ">
                  {/* text section  */}
  
                  <h1 className="w-[200px] h-[50px] text-green text-xl mx-auto text-center absolute left-[50px] -top-[70px] font-semibold">
                    ورود حساب کاربری
                  </h1>
  
                  {/* form  */}
  
                  <Formik
                    initialValues={{ title: "", desc: "" }}
                    // onSubmit={(values) => onSubmit(values)}
                    validationSchema={validation}
                  >
                    <Form className='flex flex-col gap-4'>
                      <Field
                        type="email"
                        placeholder="ایمیل"
                        name="email"
                        className="w-[200px] h-[40px] ml-[50px] outline-none shadow-inner shadow-gray-400 border border-gray-300 rounded-lg bg-gray-100
                        text-[10px] font-semibold text-left indent-[10px] dark:text-black"
                        // onChange={HandleChangeItem}
                        // value={item.title}
                        required
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 w-[50px] text-[10px] font-semibold absolute whitespace-nowrap top-[35px] left-[50px] "
                      />

                      <Field
                        type="password"
                        placeholder="رمز عبور"
                        name="password"
                        className="w-[200px] h-[40px] ml-[50px] outline-none shadow-inner shadow-gray-400 border border-gray-300 rounded-lg bg-gray-100
                        text-[10px] font-semibold text-left indent-[10px] dark:text-black"
                        // onChange={HandleChangeItem}
                        // value={item.title}
                        required
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 w-[50px] text-[10px] font-semibold absolute whitespace-nowrap top-[90px] left-[50px] "
                      />

                      <Field
                        type="password"
                        placeholder="تایید رمز عبور"
                        name="confirmPassword"
                        className="w-[200px] h-[40px] ml-[50px] outline-none shadow-inner shadow-gray-400 border border-gray-300 rounded-lg bg-gray-100
                        text-[10px] font-semibold text-left indent-[10px] dark:text-black"
                        // onChange={HandleChangeItem}
                        // value={item.title}
                        required
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-red-500 w-[50px] text-[10px] font-semibold absolute whitespace-nowrap top-[150px] left-[50px] "
                      />
  
                      <button
                        type="submit"
                        className="w-[100px] h-[30px] rounded-2xl bg-orange absolute top-[180px] right-[100px] text-white text-[10px] font-semibold"
                      >
                        ورود به حساب کاربری
                      </button>
  
                    </Form>
                  </Formik>
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
  )
}

export default LoginAuth
