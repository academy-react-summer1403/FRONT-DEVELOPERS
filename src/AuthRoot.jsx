import React from "react";
import NavbarAuth from "./components/NavbarAuth";
import FooterAuth from "./components/FooterAuth";
import { Outlet } from "react-router-dom";
import DarkMode from "./components/DarkMode";

const AuthRoot = () => {
  return (
    <div className=" dark:bg-gray-900 dark:text-white duration-200 ">
      <NavbarAuth />

      <Outlet />
      <DarkMode/>
      <FooterAuth />
    </div>
  );
};

export default AuthRoot;
