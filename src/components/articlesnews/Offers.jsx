import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// images:
import figma from "../../assets/articles and news/Ellipse 39(6).svg";

import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowBack } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useNewsData } from "../../core/services/query/queries";

const Offers = () => {
  const { t } = useTranslation();
  const [sort, setSort] = useState("currentLikeCount");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [rows, setRows] = useState(3);

  const params = {
    SortingCol: sort,
    Query: query,
  };

  const newsDataQuery = useNewsData(params, page, rows);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <motion.div
      className="bg-white dark:bg-gray-700/70 shadow rounded-xl my-8 p-4 
            max-sm:mx-4 "
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
    >
      <div className="text-center">
        <h3 className="text-lg font-medium text-darkgreen dark:text-white mb-2">
          {t("suggested_articles")}
        </h3>
        <p className="text-sm text-gray-400 dark:text-gray-300">
          {t("interesting_articles")}
        </p>
      </div>
      {newsDataQuery.data?.news.map((item, key) => (
        <NavLink
          to={"/article-detail/" + item.id}
          key={key}
          className="relative flex flex-row my-4 "
        >
          <img
            data-aos="flip-right"
            data-aos-duration="700"
            src={figma}
            className="z-[9999] "
          />
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="absolute bg-gray-100 dark:bg-gray-500/70 w-[82%] right-0 mt-4 p-3 text-right shadow rounded-lg
                                    max-sm:w-[95%]
                                    max-md:w-[92%] 
                                    max-lg:w-[92%] 
                                "
          >
            <p className="text-[11px] font-medium text-darkgreen/80 dark:text-white mb-3">
              {item?.title}
            </p>
            <NavLink
              to={"#"}
              className="text-[10px] text-green/80 flex flex-row-reverse "
            >
              {t("view_articles")}
              <IoIosArrowBack className="mt-[3px]" />
            </NavLink>
          </div>
        </NavLink>
      ))}
    </motion.div>
  );
};

export default Offers;
