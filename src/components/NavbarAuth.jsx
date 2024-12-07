import React from "react";
import { motion } from "framer-motion";
import UserImg from "../assets/landing/user.png";

const NavbarAuth = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div>
        <div className="container flex justify-between items-center py-4 dark:bg-gray-900  duration-200 ">
          {/* ACCOUNT section  */}
          <div
            className="relative w-[145px] max-md:w-[150px] px-2 gap-1  max-sm:w-[150px] max-lg:w-[150px] max-xl:w-[200px]  h-[45px] bg-primary
     rounded-[26px] hover:shadow-lg  dark:bg-orange  flex items-center justify-center mt-8"
          >
            <img src={UserImg} alt="" className="w-[25px] h-[25px]  " />

            <h1 className="text-[16px]  font-semibold text-white text-right leading-[24px]  ">
              حساب کاربری
            </h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavbarAuth;
