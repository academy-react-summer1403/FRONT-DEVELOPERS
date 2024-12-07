import React from "react";

import { motion } from "framer-motion";
import AuthB1Img from "../../../assets/landing/authback1.png";
import Squer from "../../../assets/landing/one.svg";
import Back from "../../../assets/landing/authBack.png";
import Background from "../../../assets/landing/backgroundV.png";
import more from "../../../assets/landing/moreCourse.png";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { setSelectedOption } from "../../../core/redux/slices/FeacherFavorite/fav1";

const Qfav1 = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const selectedOption = useSelector(
    (state) => state.selectedOption.selectedOption
  );
  localStorage.setItem("selectedOption", selectedOption);
  const handleOptionChange = (event) => {
    dispatch(setSelectedOption(event.target.value));
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
          className="w-[800px]  h-[500px] mt-[10px] relative
     rounded-2xl 
      "
        >
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
                <h1
                  className={`w-[200px] h-[50px] text-green text-xl mx-auto text-center absolute left-[50px] -top-[70px] font-semibold `}
                >
                {t("tosee")}
                </h1>

                <div className="relative pr-6 flex  items-end flex-col gap-2">
                  <div>
                    {" "}
                    <label className="  mt-3 text-[14px]  font-medium  flex flex-row-reverse gap-2">
                      <input
                        type="radio"
                        name="option"
                        value="فرانت"
                        checked={selectedOption === "فرانت"}
                        onChange={handleOptionChange}
                      />
                    {t("front")}
                    </label>{" "}
                    <hr className=" mt-2 w-20" />
                  </div>

                  <div>
                    {" "}
                    <label className="  flex text-[14px]  font-medium flex-row-reverse gap-2">
                      <input
                        type="radio"
                        name="option"
                        value="بک"
                        checked={selectedOption === "بک"}
                        onChange={handleOptionChange}
                      />
                      {t("back")}
                    </label>
                    <hr className=" mt-2 w-20" />
                  </div>

                  <div>
                    {" "}
                    <label className="  text-[14px]  font-medium flex flex-row-reverse gap-2">
                      <input
                        type="radio"
                        name="option"
                        value="فول"
                        checked={selectedOption === "فول"}
                        onChange={handleOptionChange}
                      />
                     {t("full")}
                    </label>{" "}
                    <hr className=" mt-2 w-20" />
                  </div>
                  <div>
                    {" "}
                    <label className="  text-[14px]  font-medium flex flex-row-reverse gap-2">
                      <input
                        type="radio"
                        name="option"
                        value=""
                        checked={selectedOption === ""}
                        onChange={handleOptionChange}
                      />

                      {t("none")}
                      
                    </label>{" "}
                    <hr className=" mt-2 w-20" />
                  </div>

                  <NavLink to={"/auth/fav2"}>
                    <button
                      type="submit"
                      className={`w-[90px] h-[30px] rounded-2xl 7 absolute top-[170px]  text-green text-[10px] font-semibold right-[-10px]`}
                    >
                      {t("next")}
                    </button>
                  </NavLink>
                </div>
              </div>

              <motion.img src={AuthB1Img} className="w-full h-full" />

              {/* number section  */}
              <motion.div className="absolute  top-[65px] -left-[40px]">
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

export default Qfav1;
