import Filter from "../../components/courspage/Filter";
import Pagination from "../../components/Pagination";
import CoursGridCard from "../../components/courspage/CoursGridCard";
import CoursListCard from "../../components/courspage/CoursListCard";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import Search from "../../assets/landing/Search.svg";
import Herobg from "../../assets/courses/49.svg";
import Herovector from "../../assets/courses/12.svg";
import Heroring from "../../assets/courses/Ellipse 4.svg";
import BackImg from "../../assets/courses/background.svg";
import WindowView from "../../assets/courses/Vector.svg";
import ListView from "../../assets/courses/Frame.svg";
import { useCourses } from "../../core/services/query/queries";
import { SliderRight } from "../../utility/animation";
import { useDispatch, useSelector } from "react-redux";
// import { QuerySlice } from "../../core/redux/slices/QueryState/QueryRedux";
import { useState } from "react";


const CoursPage = () => {

  const [sort, setSort] = useState();
  console.log(sort);

  const [search , setSearch] = useState({});
  console.log(search)

  const [page, setPage] = useState(1);
  console.log(page);


  
  const query = useSelector((state) => state.QuerySlice.data);
  console.log(query);

  

  const params = {
     Query : search,
     courseLevelId : query,
     SortingCol : sort,
     CourseTypeId : query
    
  }

  const dispatch = useDispatch();
  console.log(dispatch);


  const CoursesData = useCourses(params ,page );
  console.log(CoursesData);

  const lastPage = () => {
    setPage((old) => Math.max(old - 1, 0));
  };
  const nextPage = () => {
    setPage((old) => Math.min(old + 1, 2));
  };

  const categories = [
    {
      title:"ارزان ترین",
      col : "cost"
    },
    {
      title:"جدید ترین",
      col : "lastUpdate"
    },
    {
      title:"محبوب ترین",
      col : "likeCount"
    },
  
  ];

  return (
    <div className="container  z-10">
      <img
        src={BackImg}
        alt=""
        className="absolute w-[690px] left-[300px] 
           max-md:left-0
            max-sm:left-0
          opacity-80 z-0"
      />

      {/* cours page hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        style={{ backgroundColor: "rgba(235, 249, 249, 0.51)" }}
        className="flex flex-row  rounded-lg my-10 px-4 shadow-md 
        dark:bg-gray-700/70
        max-md:flex-col max-md:m-4
        max-sm:flex-col max-sm:m-4
        max-lg:flex-col
        max-xl:flex-row  
        "
      >
        {/* hero vector */}
        <div
          className=" w-full md:w-3/12
            max-lg:h-[400px]
            max-md:h-[400px]"
        >
          <img
            src={Herobg}
            alt=""
            className="absolute w-[350px] 
                max-sm:left-[3%]
                max-md:w-[400px]  max-md:h-[400px] max-md:left-[20%]
                max-lg:left-[26%]
                max-xl:w-[350px]  left-[130px] top-[225px]  "
          />

          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={Herovector}
            alt=""
            className=" absolute w-[435px] h-[435px]   left-[100px] top-[167px]  z-40 
                max-sm:left-[3%]
                max-md:w-[450px] max-md:h-[450px] max-md:left-[120px] max-md:top-[140px]
                max-lg:left-[23%]
                max-xl:w-[440px] max-xl:h-[440px] "
          />

          <motion.img
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={Heroring}
            alt=""
            className="absolute z-30 left-34 top-60 w-[470px] left-[68px] top-[320px]
                max-sm:left-[3%]
                max-md:w-[400px]  max-md:left-[20%]
                max-lg:left-[20%]
                max-xl:w-[470px]  "
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
              دوره های آموزشی
            </h2>
          </div>
          <p className="mr-4 mt-6 text-xl text-gray-400 dark:text-gray-200">
            به روز ترین دوره هایی که میتونید پیدا کنید
          </p>
          {/* search box  */}
          {/* <SearchBar placeholder={"...چی میخوای یاد بگیری؟"}/> */}
          <motion.div
            variants={SliderRight(1.0)}
            initial="hidden"
            animate="visible"
            className="flex flex-row  w-3/4 
            max-sm:w-full max-sm:mr-2
            max-md:w-full
            max-lg:w-full
            max-xl:w-3/4"
          >
            <div className="relative top-[32px] left-[65px] bg-orange rounded-full  w-14 h-[50px] z-40 ">
              <img src={Search} className="w-[25px] h-[29px] mt-[11px] ml-3 " />
            </div>

            <input
            // onChange={(e) => dispatch(QuerySlice.actions.search(e.target.value))}
            onChange={(e) => setSearch(e.target.value)}

              
              
              
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
        className="relative mt-44  grid grid-cols-4 gap-4
            max-md:flex flex-col-reverse max-md:m-2
            max-sm:flex flex-col-reverse max-sm:m-2
           
        "
      >
        {/* cards section  */}
        <div className="relative  col-span-3   grid grid-cols-3 h-[1100px]">
          {/* top part for view */}
          <div className="absolute flex flex-row">
            {/* right: buttons */}
            <div className="w-[150px] h-[50px] ">
              <button
                className="relative shadow-md border border-gray-100 mr-2 p-3 hover:bg-gray-200 
                         transition duration-300 shadow-sm shadow-gray-400 outline-none indent-1
                         rounded rounded-tl-2xl top-0  w-[50px]"
                onClick={() => setView(<CoursGridCard />)}
              >
                {" "}
                <img src={WindowView} className="w-full h-full" />
              </button>

              <button
                className="relative shadow-md  border border-gray-100 p-2 hover:bg-gray-200 
                        transition duration-300 shadow-sm shadow-gray-400 outline-none indent-1 
                        rounded rounded-tr-2xl top-1 w-[50px] h-[50px]"
                onClick={() => setView(<CoursListCard />)}
              >
                {" "}
                <img src={ListView} className="w-8 h-8" />{" "}
              </button>
            </div>
            {/* left: menu  */}
            <div className="group absolute right-0">
              <div
                className="group flex p-2 bg-white dark:bg-gray-700 absolute z-50 left-[600px]
                        rounded rounded-t-2xl shadow-sm shadow-gray-400 outline-none indent-1 font-semibold 
                        text-gray-900 dark:text-white hover:bg-gray-50 cursor-pointer text-lg w-[200px] whitespace-nowrap"
              >
                <IoIosArrowDown
                  className="relative top-1 h-5 w-5 mr-8 flex-none rotate-180 group-hover:rotate-0 
                                duration-300 text-teal-900 dark:text-teal-600"
                />
                جدید ترین
                <BiMenuAltRight className="w-7 h-7 mt-1 text-teal-900 dark:text-teal-600 ml-6" />
              </div>
              <div
                className="absolute top-[45px] left-[600px] z-[9999] hidden group-hover:block  h-[150px]
                            w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white"
              >
                <ul className="space-y-2">
                  {categories.map((item, index) => (
                    <li key={index} className="group">
                      <div onClick={()=>setSort(item.col)}
                        className="block px-4 font-semibold text-gray-500
                                        hover:text-black dark:hover:text-white duration-200 p-2
                                         w-full hover:bg-primary rounded-md text-right
                                        group-data-[selected]:font-semibold cursor-pointer
                                        "
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
          {CoursesData.data?.courseFilterDtos.map((item) => (
            <CoursGridCard {...item} />
          ))}

          {/* paginantion  */}

          <div className="w-[1000px]  h-[100px] flex justify-center mt-[10px]">
            <Pagination nextPage={nextPage} lastPage={lastPage} />
          </div>
        </div>

        {/* filter section  */}
        <div className="relative  col-span-1 ">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default CoursPage;
