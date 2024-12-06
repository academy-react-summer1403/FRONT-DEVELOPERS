import { motion } from "framer-motion";
import UserImg from "../../assets/landing/user.png";
import { HiHome } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";

const DashNavbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div
        className="flex justify-between items-center pb-2 
        max-sm:px-2 max-sm:flex-col-reverse 
        "
      >
        {/* ACCOUNT section  */}
        <div className="text-2xl flex items-center gap-2 font-bold ">
          <NavLink
            to={"/auth"}
            className="group flex relative w-14 hover:w-40 h-14 bg-primary 
                transition-all duration-500 rounded-full cursor-pointer"
          >
            <img
              src={UserImg}
              alt=""
              className="w-7 h-7 transition-all mt-3 ml-3.5"
            />
            <div
              className="hidden absolute w-36 group-hover:block text-sm font-semibold transition delay-[1000ms] duration-700
                     text-white text-right pr-4 ml-4 leading-[50px]"
            >
              حساب کاربری
            </div>
          </NavLink>
          <NavLink to={"/"}>
            <HiHome className="text-green" />
          </NavLink>
        </div>

        {/* Logo section  */}
        <div className="space-x-6">
          <Logo />
        </div>
      </div>
    </motion.div>
  );
};

export default DashNavbar;
