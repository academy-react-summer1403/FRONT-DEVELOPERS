import Herobg from "../../assets/articles and news/Ellipse 38.svg";
import Herovector from "../../assets/articles and news/hero.svg";
import Heroring from "../../assets/courses/Ellipse 4.svg";
import BackImg from "../../assets/courses/background.svg";
import Search from "../../assets/landing/Search.svg";

import ArticleNewsCard from "../../components/articlesnews/ArticleNewsCard";
import OfferSection from "../../components/articlesnews/OfferSection";
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { useNewsData } from "../../core/services/query/queries";
import { useEffect, useState } from "react";
import { SliderRight } from "../../utility/animation";
import Pagination from "../../components/Pagination";
import { useTranslation } from "react-i18next";
import NotFound from "../../components/notFound/NotFound";
import FilterNews from "../../components/articlesnews/fillter/FilterNews";
import NewsCardLoading from "../../components/skeleton/NewsCardLoading";

const ArticlesNews = () => {
  const { t } = useTranslation();
  const [sort, setSort] = useState();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [rows, setRows] = useState(6);


  const params = {
    SortingCol: sort,
    Query: query,
  };

  const newsDataQuery = useNewsData(params, page,rows);

  const lastPage = () => {
    setPage((old) => Math.max(old - 1, 0));
  };
  const nextPage = () => {
    setPage((old) => Math.min(old + 1, 2));
  };

  const categories = [t("newest"), t("popular")];


  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  }, [])
  

  return (
    <div className="  lg:container max-lg:px-12 max-lg:px-2  ">
      <img
        src={BackImg}
        alt=""
        className="absolute w-[690px] left-[290px] 
           max-lg:left-0
            max-sm:left-0
           z-0"
      />

      {/*  page hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        className="flex flex-row rounded-tl-lg rounded-tr-[90px] rounded-br-lg rounded-bl-[80px] my-14 px-4 shadow
        dark:bg-gray-700/70 bg-primary/5
        max-md:flex-col 
        max-sm:flex-col
        max-lg:flex-col
        max-xl:flex-row  
        "
      >
        {/* hero vector */}
        <div
          className="  w-[700px] max-xl:w-[600px]  max-lg:hidden
            relative"
        >
          <img
            src={Herobg}
            alt=""
            className="absolute w-[400px] 
                     "
          />

          <motion.img
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={Herovector}
            alt=""
            className=" absolute w-[480px] max-xl:w-[400px] max-xl:h-[340px] max-xl:-left-4 max-xl:top-[-20px] h-[420px] top-[-50px] -left-9  z-40 
              "
          />

          <motion.img
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={Heroring}
            alt=""
            className="absolute z-30 w-[1100px] -left-5 max-xl:-left-2 top-[120px]
             "
          />
        </div>

        {/* text part */}
        <div className="grid justify-items-end w-full my-4 mr-6 h-90 relative max-sm:w-full max-sm:mx-auto max-md:w-full max-md:mx-auto">
          <div className="flex flex-row-reverse mt-4 pt-5 ">
            <div className="head2 relative top-4 ml-2 "></div>
            <h2 className="text-3xl font-bold dark:text-white">
            {t("articles_and_news")}
            </h2>
          </div>
          <p className="mr-5 mt-3 text-lg text-gray-400 dark:text-gray-400">
          {t("stay_updated")}
          </p>
          {/* search box  */}
          <motion.div
            variants={SliderRight(1.0)}
            initial="hidden"
            animate="visible"
            className="flex flex-row w-3/4 max-sm:w-full max-sm:mr-2 max-md:w-full max-lg:w-full max-xl:w-3/4"
          >
            <div className="relative top-[32px] left-[65px] bg-orange rounded-full w-14 h-[50px] z-40">
              <img src={Search} className="w-[25px] h-[29px] mt-[11px] ml-3" />
            </div>

            <input
              onChange={(e) => setQuery(e.target.value)}
              id="search"
              name="search"
              type="text"
              placeholder={t("search_placeholder")}
              className="mx-2 backdrop-blur-sm my-6 w-full outline-none h-[65px] rounded-full text-right pr-8 pb-2 dark:bg-gray-700/70"
              style={{ boxShadow: "0px 0.1px 1px 1px rgba(0, 0, 0, 0.1)" }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* body  */}
      <div
        className="my-28  grid grid-cols-4 gap-4 
            max-sm:flex flex-col-reverse
            max-md:flex 
            max-lg:flex  
        "
      >
        {/*right: offer section  */}
        <OfferSection />

        {/*left: news section  */}
        <div className="relative col-span-3 ">
          {/* top part */}
          <div
            className="relative flex flex-row-reverse gap-4
                 max-sm:flex-col 
                "
          >
            <div className="text-2xl font-semibold text-darkgreen dark:text-white p-2 text-center">
            {t("latest_articles")}
            </div>
            {/* menu  */}
            <div className="relative group max-sm:grid max-sm:justify-items-center">
              <div className="group flex px-5 py-2 mr-4 gap-6 dark:bg-gray-700/70 rounded-full shadow-sm shadow-gray-300 outline-none indent-0
               dark:text-white text-gray-900 hover:bg-gray-50 cursor-pointer text-lg">
                <IoIosArrowDown
                  className="relative mt-2 h-5 w-5 flex-none text-darkgreen dark:text-darkgreen/60
                                     rotate-180 group-hover:rotate-0 duration-300"
                />
                 {t("newest")}
                <BiMenuAltRight className="w-7 h-7 mt-1 text-darkgreen dark:text-darkgreen/60" />
              </div>
              <div className="absolute z-[9999] hidden group-hover:block max-sm:top-10 w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                <ul className="space-y-2">
                  {categories.map((item, index) => (
                    <li key={index} className="group">
                      <div
                        onClick={() => setSort("lastUpdate")}
                        className="inline-block px-4 font-semibold text-gray-500
                                        hover:text-black dark:hover:text-white duration-200 p-2
                                         w-full hover:bg-green/40 rounded-md text-right
                                        group-data-[selected]:font-semibold cursor-pointer
                                        "
                      >
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* filter  */}
            <div  className='relative max-sm:grid max-sm:justify-items-center'>
          
                  <FilterNews />
            </div>
          </div>

          {/* carde  */}
          <motion.div
            layout
            className="grid grid-cols-3 my-8 gap-4 
                    max-sm:grid-cols-1
                    max-md:grid-cols-2 
                    max-xl:grid-cols-2
                    min-h-40
                    
                "
          >
            <AnimatePresence> {loading ?<NewsCardLoading cards={6}/> :  
              newsDataQuery.data?.news.length == 0  ? <NotFound/> : newsDataQuery.data?.news.map((item) => (
                <ArticleNewsCard {...item} />
              ))}

            </AnimatePresence>
          </motion.div>

           <div className="w-full mt-10 grid grid-col-3 justfy-items-center">
              <Pagination nextPage={nextPage} lastPage={lastPage} />
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default ArticlesNews;
