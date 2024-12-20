import Filter from "../../components/courspage/Filter";
import Pagination from "../../components/Pagination";
import CoursGridCard from "../../components/courspage/CoursGridCard";
import CoursListCard from "../../components/courspage/CoursListCard";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import Search from "../../assets/landing/Search.svg";
import Herobg from "../../assets/courses/49.svg";
import Herovector from "../../assets/courses/12.svg";
import Heroring from "../../assets/courses/Ellipse 4.svg";
import BackImg from "../../assets/courses/background.svg";
import WindowView from "../../assets/courses/Vector.svg";
import ListView from "../../assets/courses/Frame.svg";
import {
  useCourses,
  useGetCost,
  useTopCourses,
} from "../../core/services/query/queries";
import { SliderRight } from "../../utility/animation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NotFound from "../../components/notFound/NotFound";
import GridCardLoading from "../../components/skeleton/GridCardLoading";

const CoursPage = () => {
  const { t } = useTranslation();

  const [sort, setSort] = useState();

  const [page, setPage] = useState(1);

  const [view, setView] = useState(false);

  const [view1, setView1] = useState(6);

  const [search, setSearch] = useState({});

  const query = useSelector((state) => state.QuerySlice.search);

  const costup = useSelector((state) => state.RangeSlice.Range);
  const costdown = useSelector((state) => state.lessRangeSlice.less);

  const GetCostFillter = useGetCost(page, view1, costdown, costup);

  const dispatch = useDispatch();

  const params = {
    RowsOfPage: view1,
    PageNumber: page,
    courseLevelId: query,
    SortingCol: sort,
    CourseTypeId: query,
  };

  const CoursesData = useCourses(search, params);

  const getCourseTop = useTopCourses();

  const lastPage = () => {
    setPage((old) => Math.max(old - 1, 1));
  };
  const nextPage = () => {
    setPage((old) => Math.min(old + 1, 28));
  };

  const [sortTitle, setSortTitle] = useState("بدون ترتیب");
  const categories = [
    {
      title: `${t("Cheapest")}`,
      col: "cost",
    },
    {
      title: `${t("Newest")}`,
      col: "lastUpdate",
    },
    {
      title: `${t("MostPopular")}`,
      col: "likeCount",
    },
  ];

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="xl:container px-2 z-10 h-full ">
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
        {/* hero vector */}
        <div
          className=" w-[90%] 
            max-lg:h-[400px] 
            max-md:h-[400px]
             relative"
        >
          <img
            src={Herobg}
            alt=""
            className="absolute w-[350px]  h-[450px] left-[40px] top-[5px]
              max-lg:top-12 max-lg:left-[55px]
              max-md:left-[15px]
              max-xl:left-[5px]

            "
          />

          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={Herovector}
            alt=""
            className=" absolute w-[430px] h-[430px] left-[10px] top-[-25px]  z-40  
            max-lg:top-4 max-md:left-[35px] 
            max-md:left-[25px]
            max-xl:left-[10px]
               "
          />

          <motion.img
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={Heroring}
            alt=""
            className="absolute z-30 left-[-30px] top-32 w-[500px] 
            max-lg:top-40  max-lg:left-0
            max-md:left-[0px]  max-md:top-44 
                 "
          />
        </div>

        {/* text part */}
        <div
          className="grid justify-items-end w-full my-4 mt-8 h-90 relative
            max-sm:w-full max-sm:mx-auto
            max-md:w-full max-md:mx-auto
            "
        >
          <div className="flex flex-row-reverse mt-4 pt-6">
            <div className="relative w-3 h-3 bg-primary rounded-full top-4 ml-2"></div>
            <h2 className="text-3xl font-bold dark:text-white">
              {t("Courses")}
            </h2>
          </div>
          <p className="mr-4 mt-6 text-xl text-gray-400 dark:text-gray-200">
            {t("UpToDateCourses")}
          </p>
          {/* search box  */}
          {/* <SearchBar placeholder={"...چی میخوای یاد بگیری؟"}/> */}
          <motion.div
            variants={SliderRight(1.0)}
            initial="hidden"
            animate="visible"
            className="flex flex-row  w-full 
            max-sm:w-full max-sm:mr-2
            max-md:w-full
            max-lg:w-full
            max-xl:w-3/4"
          >
            <div className="relative top-[32px] left-[65px] bg-orange rounded-full  w-14 h-[50px] z-40 ">
              <img src={Search} className="w-[25px] h-[29px] mt-[11px] ml-3 " />
            </div>

            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("WhatDoYouWantToLearn")}
              id="search"
              name="search"
              type="text"
              //   placeholder={placeholder}
              className="mx-2 backdrop-blur-sm my-6  w-full outline-none
               h-[65px] rounded-full text-right pr-8 pb-2 dark:bg-gray-700/70   
              "
              style={{ boxShadow: " 0px 0.1px 1px 1px rgba(0, 0, 0, 0.1)" }}

              // onChange={HandleChange}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* body of CoursPage */}
      <div
        className="relative mt-44 grid grid-cols-4 gap-2        
          max-md:flex  max-md:mb-20 max-md:flex-col-reverse
          max-sm:flex   
           
        "
      >
        {/* cards section  */}
        <div className="relative col-span-3">
          {/* top part for view */}
          <div className="relative flex mx-4 max-md:mx-0 flex-row ">
            {/* right: buttons */}
            <div className=" relative z-50">
              <button
                className={` ${
                  view ? "" : "bg-gray-200"
                } relative z-50  mr-2 p-3 hover:bg-gray-200 
                         transition duration-300 shadow-sm shadow-gray-400 outline-none indent-1
                         rounded rounded-tl-2xl top-0  w-[50px]`}
                onClick={() => (setView(false), setView1(6))}
              >
                {" "}
                <img src={WindowView} className="w-full h-full" />
              </button>

              <button
                className={` ${
                  view ? "bg-gray-200" : ""
                } absolute top-[0.25px] p-2 hover:bg-gray-200 
                        transition duration-300 shadow-sm shadow-gray-400 outline-none indent-1 
                        rounded rounded-tr-2xl w-[50px] h-[50px]`}
                onClick={() => (setView(true), setView1(3))}
              >
                {" "}
                <img src={ListView} className="w-8 h-8" />{" "}
              </button>
            </div>
            {/* left: menu  */}
            <div className="group absolute right-0 ">
              <div
                className="group flex p-2 bg-white dark:bg-gray-700  z-50 
                        rounded rounded-t-2xl shadow-sm shadow-gray-400 outline-none indent-1 font-semibold 
                        text-gray-900 dark:text-white hover:bg-gray-50 cursor-pointer text-lg w-[200px] whitespace-nowrap"
              >
                <IoIosArrowDown
                  className="relative top-1 h-5 w-5 mr-8 flex-none rotate-180 group-hover:rotate-0 
                                duration-300 text-teal-900 dark:text-teal-600"
                />
                {sortTitle}
                <BiMenuAltRight className="w-7 h-7 mt-1 text-teal-900 dark:text-teal-600 ml-6" />
              </div>

              <div
                className="absolute z-[9999] hidden group-hover:block  h-[150px]
                            w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white"
              >
                <ul className="space-y-2">
                  {categories.map((item, index) => (
                    <li
                      key={index}
                      className="group"
                      onClick={() => setSortTitle(item.title)}
                    >
                      <div
                        onClick={() => setSort(item.col)}
                        className={`block px-4 font-semibold text-gray-500
                                        hover:text-black dark:hover:text-white duration-200 p-2
                                         w-full hover:bg-primary rounded-md text-right
                                        group-data-[selected]:font-semibold cursor-pointer
                                        ${
                                          sortTitle == item.title
                                            ? "bg-primary text-white"
                                            : ""
                                        }
                                        `}
                      >
                        {item.title}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* cards  */}

          <motion.div
            layout
            className={` grid w-full z-10 mb-20 
                  ${
                    view
                      ? "grid-cols-1 mt-2"
                      : "grid-cols-3 max-lg:grid-cols-2 max-sm:justify-items-center max-sm:grid-cols-1  pt-0"
                  }`}
          >
            {costup == 0 || costdown == 0 ? (
              <>
                {view ? (
                  <AnimatePresence>
                    {CoursesData.data?.courseFilterDtos.length == 0 ? (
                      <NotFound />
                    ) : (
                      CoursesData.data?.courseFilterDtos.map((item) => (
                        <CoursListCard {...item} />
                      ))
                    )}
                  </AnimatePresence>
                ) : (
                  <AnimatePresence>
                    {" "}
                    {loading ? (
                      <GridCardLoading cards={16} />
                    ) : CoursesData.data?.courseFilterDtos.length == 0 ? (
                      <NotFound />
                    ) : (
                      CoursesData.data?.courseFilterDtos.map((item) => (
                        <CoursGridCard {...item} />
                      ))
                    )}
                  </AnimatePresence>
                )}
              </>
            ) : (
              <>
                {view ? (
                  <AnimatePresence>
                    {GetCostFillter.data?.courseFilterDtos.length == 0 ? (
                      <NotFound />
                    ) : (
                      GetCostFillter.data?.courseFilterDtos.map((item) => (
                        <CoursListCard {...item} />
                      ))
                    )}
                  </AnimatePresence>
                ) : (
                  <AnimatePresence>
                    {" "}
                    {loading ? (
                      <GridCardLoading cards={16} />
                    ) : GetCostFillter.data?.courseFilterDtos.length == 0 ? (
                      <NotFound />
                    ) : (
                      GetCostFillter.data?.courseFilterDtos.map((item) => (
                        <CoursGridCard {...item} />
                      ))
                    )}
                  </AnimatePresence>
                )}
              </>
            )}
          </motion.div>

          {/* paginantion  */}

          <div className="w-full absolute bottom-0 grid grid-col-1 justfy-items-center mt-10">
            <Pagination nextPage={nextPage} lastPage={lastPage} />
          </div>
        </div>

        {/* filter section  */}
        <div className="relative  col-span-1 md:h-[1000px] max-md:h-full max-xl:mt-20 ">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default CoursPage;
