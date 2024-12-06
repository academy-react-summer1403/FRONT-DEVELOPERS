import React, { useState } from 'react'
import { motion } from "framer-motion";
import AuthB1Img from "../../assets/landing/authback3.png";
import Squer from "../../assets/landing/one.svg";
import Back from "../../assets/landing/authBack.png";
import Background from "../../assets/landing/backgroundV.png";
import more from "../../assets/landing/more course 2.png";

import * as yup from "yup";

import { NavLink, useNavigate, useParams, } from 'react-router-dom';
import OTPInput from 'react-otp-input';
// import { usetowStepLoginApi } from '../../core/services/mutation/Authmutation';
import { towStepLoginApi } from '../../core/services/authApi';
// import {  postCode } from '../../core/services/authApi';



const VarificationVorod = () => {


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
  // const navigate=useNavigate()
  const {phoneNumber} = useParams()
  const [verifyCode, setVerifyCode] = useState("")

  // const towStep = usetowStepLoginApi()
  const onSubmit = (e)=>{
    e.preventDefault();
    const params={
      VrifyCode :verifyCode,
    }
    console.log(params)
    towStepLoginApi(params)

  }

  const validation = yup.object().shape({
    title: yup.string().required("پر کردن این فیلد اجباریست"),
  });


  return (
    <div className="container h-[530px] relative">
    <img
      src={Back}
      alt=""
      className="fixed rotate-180 left-[300px] -top-[40px] w-[1000px] opacity-30"
    />

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
          <NavLink to={"/auth/v1"}><img src={more} alt="" /></NavLink>
        </div>

        
        <div className="w-full h-full border border-[#fff0] relative"><img
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

            <div className="absolute w-[300px]  h-[100px] left-[25px] top-[150px] ">
              {/* text section  */}

              <h1 className="w-[200px] h-[50px] text-green text-xl mx-auto text-center absolute left-[50px] -top-[110px] font-semibold">
                کد تایید
              </h1>

              <p className=" w-[200px] h-[20px] text-gray-500 text-[9px] mx-auto text-center absolute left-[50px] -top-[70px] font-sans">
              کد تایید به شماره ی {phoneNumber} ارسال شده است ، در صورت مغایرت روی <h1 className="text-primary">ویرایش</h1> کلیک کنید
              </p>

              {/* form  */}

              <form 
                // initialValues={{ title: "", desc: "" }}
                onSubmit={(values) => onSubmit(values)}
                validationSchema={validation}
              >
                <div className='-mt-[10px] dark:text-darkgreen'>

  

                  <OTPInput
                   
                    
                    value={verifyCode.toString("")}
                    onChange={(e)=>setVerifyCode(e.toString(""))}
                    numInputs={5}
                    
                    renderInput={(inputProps , index) => <input {...inputProps} key={index} />}
                    
                   inputStyle={{
                    width:"3rem",
                    height:"3rem",
                    border:"1px solid #ccc",
                    margin:"10px 0.35rem",
                    fontSize:"1.5rem",
                    borderRadius:"4px",
                    
                   }}
                    
                   
                  />
                 
                  <button 
                    type="submit"
                    className="w-[90px] h-[30px] rounded-2xl bg-orange absolute top-[100px] right-[105px] text-white text-[10px] font-semibold"
                  >
                    ورود
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
            <motion.div className="absolute  top-[257px] -left-[40px]">
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

export default VarificationVorod
