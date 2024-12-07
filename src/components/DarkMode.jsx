import React, { useEffect } from "react";
import light from "../assets/darkmode/icons8-moon-80(1).png";
import first from "../assets/darkmode/first.svg";
import second from "../assets/darkmode/second.svg";
import third from "../assets/darkmode/third.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  initializeTheme,
  setTheme,
} from "../core/redux/slices/SpeechSlices/Theme";

const DarkMode = () => {
  const theme = useSelector((state) => state.ThemeSlice.theme);
  const dispatch = useDispatch();

  const handleThemeChange = (newTheme) => {
    dispatch(setTheme(newTheme));
  };
  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);

  return (
    <div
      className="group cursor-pointer ml-[90%] dark:bg-orange rounded-full flex items-center
        z-[9999] w-[55px] h-[55px] bg-green fixed bottom-8 right-12 hover:w-80 transition-all duration-700
            "
    >
      <div>
        <img
          src={`${
            theme === "dark"
              ? light
              : theme === "maintheme"
              ? first
              : theme === "secondTheme"
              ? second
              : third
          }`}
          className="absolute top-2 right-2 w-[40px] h-[40px] transition-all duration-200  "
        />
      </div>

      <div className="flex gap-3 ml-5">
        <div className="" onClick={() => handleThemeChange("dark")}>
          <img
            src={light}
            className="w-[40px] h-[40px]  transition-all duration-200  group-hover:block"
          />
        </div>
        <div className="" onClick={() => handleThemeChange("maintheme")}>
          <img
            src={first}
            className="w-[40px] h-[40px]  transition-all duration-200  group-hover:block"
          />
        </div>
        <div className="" onClick={() => handleThemeChange("secondTheme")}>
          <img
            src={second}
            className="w-[40px] h-[40px]  transition-all duration-200  group-hover:block"
          />
        </div>
        <div className="" onClick={() => handleThemeChange("thirdTheme")}>
          <img
            src={third}
            className="w-[40px] h-[40px]  transition-all duration-200  group-hover:block"
          />
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
