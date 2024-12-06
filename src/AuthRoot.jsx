import React from "react";
import NavbarAuth from "./components/NavbarAuth";
import FooterAuth from "./components/FooterAuth";
import { Outlet } from "react-router-dom";
import DarkMode from "./components/DarkMode";
import Back from "./assets/landing/authBack.png";


const AuthRoot = () => {
  return (
    <div className=" dark:bg-gray-900 dark:text-white duration-200 h-screen">
       <img
        src={Back}
        alt=""
        className="fixed rotate-180 left-[300px] top-[30px] w-[1000px] opacity-30"
      />
      <NavbarAuth />

      <Outlet />
      <DarkMode />
      <FooterAuth />
    </div>
  );
};

export default AuthRoot;
