import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// image:
import react from "../../assets/articles and news/Ellipse 39(3).svg";
import view from "../../assets/articles and news/Frame(4).svg";
import likes from "../../assets/articles and news/Vector.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useNewsData } from "../../core/services/query/queries";
import { NavLink } from "react-router-dom";

const Podcasts = () => {
  const { t } = useTranslation();
  const [sort, setSort] = useState("currentView");
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
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
      className="bg-white dark:bg-gray-700/70 shadow rounded-xl my-8 p-4 max-sm:mx-4"
    >
      <div className="text-center ">
        <h3 className="text-lg font-medium text-darkgreen dark:text-white mb-2">
          {t("podcasts")}
        </h3>
        <p className="text-sm text-gray-400 dark:text-gray-300">
          {t("podcasts")}
        </p>
      </div>
      {newsDataQuery.data?.news.map((item, key) => (
        <NavLink
          to={"/article-detail/" + item.id}
          key={key}
          className="relative flex flex-row my-4"
        >
          <img
            data-aos="flip-right"
            data-aos-duration="700"
            src={react}
            className="z-[9999]"
          />
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="absolute bg-gray-100 dark:bg-gray-500/70 w-[82%] right-0 my-2 px-2 py-4 text-right shadow rounded-lg
                                    max-sm:w-[95%]
                                    max-md:w-[92%] 
                                    max-lg:w-[92%] 
                                "
          >
            <p className="text-[11px] w-[80%] ml-8 max-sm:w-[60%] max-sm:ml-20  font-medium text-darkgreen/80 dark:text-white mb-3">
              {item?.title}
            </p>
            <div className="text-[10px] text-gray-400 flex flex-row px-[25%] max-lg:px-[20%] max-sm:px-[10%]  gap-5 ">
              <p className="flex flex-row-reverse gap-1 ">
                {item?.currentView}
                <img src={view} />
              </p>
              <p className="flex flex-row-reverse gap-1">
                {item?.currentLikeCount}
                <img src={likes} />
              </p>
            </div>
          </div>
        </NavLink>
      ))}
    </motion.div>
  );
};

export default Podcasts;
