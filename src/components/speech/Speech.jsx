import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSpeechRecognition } from "react-speech-kit";
import { BsMic } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { TranslateSlice } from "../../core/redux/slices/SpeechSlices/TranslateSlice";
import { setTheme } from "../../core/redux/slices/SpeechSlices/Theme";

function SpeechBot() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.TokenSlice);
  const token = user?.token;
  const handleLogout = () => {
    localStorage.removeItem("token", user?.token);
  };

  const [text, setText] = useState("");
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setText(result);

      if (
        result.toLowerCase().includes("blue") ||
        result.toLowerCase().includes("آبی")
      ) {
      }

      // pages
      if (
        result.toLowerCase().includes("courses") ||
        result.toLowerCase().includes("course")
      ) {
        navigate("/courses");
      }
      if (
        result.toLowerCase().includes("article") ||
        result.toLowerCase().includes("articles") ||
        result.toLowerCase().includes("new") ||
        result.toLowerCase().includes("news")
      ) {
        navigate("/article-news");
      }
      if (
        result.toLowerCase().includes("home") ||
        result.toLowerCase().includes("mainpage")
      ) {
        navigate("/");
      }
      if (result.toLowerCase().includes("login")) {
        navigate("/auth/v1");
      }
      if (result.toLowerCase().includes("signin")) {
        navigate("/auth");
      }
      if (
        result.toLowerCase().includes("account") ||
        result.toLowerCase().includes("profile") ||
        result.toLowerCase().includes("dashboard")
      ) {
        navigate("/Dashboard");
      }
      if (
        result.toLowerCase().includes("edit") ||
        result.toLowerCase().includes("edit profile")
      ) {
        navigate("/info");
      }
      if (
        result.toLowerCase().includes("change password") ||
        result.toLowerCase().includes("edit password")
      ) {
        navigate("/settings");
      }
      if (
        result.toLowerCase().includes("comments") ||
        result.toLowerCase().includes("comment")
      ) {
        navigate("/stdPointOfView");
      }
      if (
        result.toLowerCase().includes("favorite") ||
        result.toLowerCase().includes("favorites")
      ) {
        navigate("/stdFavorite");
      }
      if (
        result.toLowerCase().includes("reserve") ||
        result.toLowerCase().includes("reservCourses")
      ) {
        navigate("/reservCourses");
      }
      if (
        result.toLowerCase().includes("my course") ||
        result.toLowerCase().includes("my courses")
      ) {
        navigate("/stdCourses");
      }

      // translate

      if (result.toLowerCase().includes("translate")) {
        {
          dispatch(TranslateSlice.actions.toggleLanguage());
        }
      }

      // log out

      if (result.toLowerCase().includes("log out")) {
        handleLogout();
      }

      // theme

      if (
        result.toLowerCase().includes("change theme to dark") ||
        result.toLowerCase().includes("dark")
      ) {
        dispatch(setTheme("dark"));
      }

      if (
        result.toLowerCase().includes("change theme to light") ||
        result.toLowerCase().includes("light")
      ) {
        dispatch(setTheme("maintheme"));
      }

      if (
        result.toLowerCase().includes("change theme") ||
        (result.toLowerCase().includes("theme3") &&
          (theme == "maintheme" || theme == "secondTheme"))
      ) {
        dispatch(setTheme("thirdTheme"));
      }

      if (
        result.toLowerCase().includes("change theme") ||
        (result.toLowerCase().includes("theme1") &&
          (theme == "thirdTheme" || theme == "secondTheme"))
      ) {
        dispatch(setTheme("maintheme"));
      }

      if (
        result.toLowerCase().includes("change theme") ||
        (result.toLowerCase().includes("theme2") &&
          (theme == "thirdTheme" || theme == "maintheme"))
      ) {
        dispatch(setTheme("secondTheme"));
      }
    },
  });

  const theme = useSelector((state) => state.ThemeSlice.theme);

  return (
    <>
      <button
        className="w-[55px] h-[55px] rounded-full bg-orange   fixed  z-[99999] bottom-8 left-10"
        onClick={listen}
      >
        {" "}
        <div
          onClick={() => setOpen(!open)}
          className=" rounded-full border  fixed flex items-center justify-center w-[55px] h-[55px] bg-orange bottom-8 left-10 "
        >
          <BsMic className=" text-white w-[25px] h-[25px]" />
        </div>
      </button>

      <div
        className={`border z-[999] w-[350px] bg-[#f1f1f1] p-2 rounded-[30px] transition-all  fixed bottom-[85px] left-16  h-[150px] ${
          open ? "hidden" : ""
        }`}
      >
        <p className=" text-md mt-2 ml-2 line-clamp-3">
          {" "}
          <p className="text-gray-700">Hello,How can i help you?</p> {text}
        </p>
        <button
          className="border bg-orange text-white flex justify-center items-center rounded-full absolute top-28 left-[70%] font-Yekan w-20 h-7 "
          onClick={stop}
        >
          <div onClick={() => setOpen(true)}>stop </div>
        </button>
        {listening && (
          <p className="text-sm text-red-900 absolute top-28 right-[77%] ">
            listening..
          </p>
        )}
      </div>
    </>
  );
}

export default SpeechBot;
