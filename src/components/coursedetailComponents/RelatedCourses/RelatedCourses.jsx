import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ImageErrore } from "../../ImageErrore";
import { IoIosArrowBack } from "react-icons/io";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const RelatedCourses = ({ title, image }) => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-right" className="w-full">
      <div
        style={{ boxShadow: " 0px 1px 1px 0 rgba(0, 0, 0, 0.25)" }}
        className={`h-[112px] max-lg:h-[90px] cursor-pointer max-md:justify-center  max-md:ml-1  dark:bg-slate-800  bg-[#F8F8F8] rounded-[10px] flex justify-end p-[15px] w-full`}
      >
        <div className="w-2/3 grid justify-items-end relative">
          <motion.h3
            initial={{ x: -300, opacity: 0, y: -300 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 1,
              stiffness: 100,
              delay: 0.2,
            }}
            className="text-darkgreen/80 max-xl:text-[13px] max-2xl:text-[15px] max-md:line-clamp-none max-md:-mt-[2px] max-md:text-[13px] overflow-hidden
                    font-Yekan font-normal text-[17px] dark:text-orange/70  max-sm:ml-[10%] max-sm:line-clamp-2 max-lg:w-[100px]  max-md:w-[198px]  max-lg:text-[15px] 
                    max-lg:line-clamp-1 max-lg:mt-2 text-right mr-[15px] w-[198px] "
          >
            {title}
          </motion.h3>

          <motion.p
            initial={{ x: 0, opacity: 0, y: 200 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 1,
              stiffness: 100,
              delay: 0.2,
            }}
            className="absolute left-0 bottom-0 dark:text-secondary text-primary flex items-center justify-between font-Yekan font-normal text-[12px] text-right  w-[75px]"
          >
            <IoIosArrowBack />

            {t("seecourse")}
          </motion.p>
        </div>

        <motion.img
          initial={{ x: 300, opacity: 0, y: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1,
            stiffness: 100,
            delay: 0.2,
          }}
          style={{ boxShadow: " 0px 1px 2px 0 rgba(0, 0, 0, 0.25)" }}
          className="w-[126px] max-sm:w-[70px] h-[84px] max-lg:w-[100px] max-lg:h-[64px] rounded-[10px]"
          src={image ? image : <ImageErrore />}
          onError={ImageErrore}
        />
      </div>
    </div>
  );
};
export default RelatedCourses;
