import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import DarkMode from "./components/DarkMode";
import SpeechBot from "./components/speech/Speech";

const Layout = () => {
  return (
    <div className="bg-gray-50/20 dark:bg-gray-900 dark:text-white duration-200 ">
      <Navbar />
      <Outlet />
      <Footer />

      <DarkMode />
      <SpeechBot />
    </div>
  );
};

export default Layout;
