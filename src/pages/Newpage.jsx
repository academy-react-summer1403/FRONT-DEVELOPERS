import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { usefeature1, usefeature2 } from "../core/services/query/queries";
import { motion } from "framer-motion";
import BackImg from "../assets/courses/background.svg";
import { useDispatch, useSelector } from "react-redux";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Sliderfav from "./Feacherdetail/Slider";
import Slider2 from "./Feacherdetail/Slider2";
import { NavLink } from "react-router-dom";

const NewPage = () => {
  const { t } = useTranslation();

  // favorite
  const [selectedfavoriteOption, setselectedfavoriteOption] = useState(
    localStorage.getItem("selectedOption")
  );

  const params = {
    RowsOfPage: 15,
    PageNumber: 0,

    Query: selectedfavoriteOption,
  };
  const CoursesDataFavorite = usefeature1(params);

  //News

  const [selectedfavoriteOption1, setselectedfavoriteOption1] = useState(
    localStorage.getItem("selectedOption1")
  );

  const params1 = {
    RowsOfPage: 15,
    PageNumber: 0,

    NewsCategoryId: selectedfavoriteOption1,
  };

  const NewsData = usefeature2(params1);

  // level

  const [selectedlevelOption, setselectedlevelOption] = useState(
    localStorage.getItem("selectedOption2")
  );

  const params2 = {
    RowsOfPage: 15,
    PageNumber: 0,

    courseLevelId: selectedlevelOption,
  };

  const courseLevel = usefeature1(params2);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <>
          {" "}
          <div className=" p-5 mx-auto font-semibold text-darkgreen text-center grid">
            <DotLottieReact
              src="https://lottie.host/fd74c70d-0118-4fb7-a028-f983b5d8e88f/C950gKHXUn.lottie"
              loop
              autoplay
              className=" mx-auto w-[260px] "
            />
            <h1> ! در حال یافتن بهترین ها برای شما <br /> لطفا صبور باشید </h1>
          </div>{" "}
        </>
      ) : (
        <div className="xl:container  px-2 z-10 h-full ">
          <img
            src={BackImg}
            alt=""
            className="absolute w-[690px] left-[300px] 
            max-lg:left-0
            max-sm:left-0
            opacity-80 z-0"
          />

          {/* cours page hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="flex flex-row  rounded-lg my-10 px-4 mx-12 shadow-md bg-primary/5
          dark:bg-gray-700/70
          max-md:flex-col max-md:mx-4
          max-sm:flex-col max-sm:mx-4
          max-lg:flex-col max-lg:mt-14
          max-xl:flex-row  
          "
          >
            <DotLottieReact
              src="https://lottie.host/fd74c70d-0118-4fb7-a028-f983b5d8e88f/C950gKHXUn.lottie"
              loop
              autoplay
              className=" absolute top-28 left-44 w-[260px] max-lg:hidden"
            />

            <div
              className="grid justify-items-end w-full my-4 mt-8 h-90 relative
              max-sm:w-full max-sm:mx-auto
              max-md:w-full max-md:mx-auto
              "
            >
              <div className="flex flex-row-reverse ">
                <div className="relative w-3 h-3 bg-primary rounded-full top-4 ml-2"></div>
                <h2 className="text-3xl font-bold dark:text-white max-[450px]:text-center max-[450px]:text-[18px] ">
                  ... پیشنهاد های ما برای شما
                </h2>
              </div>
              <p className="mr-4 mt-6  mb-4 text-xl text-gray-400 dark:text-gray-200 max-[450px]:text-center max-[450px]:text-[18px] ">
                {t("UpToDateCourses")}
              </p>
            </div>
          </motion.div>

          {/* body of CoursPage */}
          <div
            className="relative  mt-20        
            max-md:flex  max-md:mb-20 max-md:flex-col-reverse
            max-sm:flex "
          >
            {/* cards fave section  */}

            <div
              className={`${
                selectedfavoriteOption == "" ? "hidden" : " mb-16"
              }`}
            >
              <Sliderfav
                h={"... شاید بیشتر دوست داشته باشید "}
                getCourseCard={CoursesDataFavorite.data?.courseFilterDtos}
              />
            </div>

            {/* news */}

            <div
              className={`${
                selectedfavoriteOption1 == "" ? "hidden" : " mb-16"
              }`}
            >
              <Slider2
                h={"... مطالبی  که  شاید بیشتر دوست داشته باشید "}
                getNewsCard={NewsData?.data?.news}
              />
            </div>

            {/* {level} */}
            <div
              className={`${selectedlevelOption == "" ? "hidden" : " mb-16"}`}
            >
              <Sliderfav
                h={"...  با توجه به سطح شما"}
                getCourseCard={courseLevel.data?.courseFilterDtos}
              />
            </div>

            <NavLink to={"/auth/fav1"}>
              <button className=" border rounded-xl text-md text-primary p-2 border-primary
                max-sm:flex max-sm:mb-5 max-sm:mx-auto                 
              ">
                ویرایش لیست علاقه مندی
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default NewPage;
