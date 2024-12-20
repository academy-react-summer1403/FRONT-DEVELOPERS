import React, { useEffect } from "react";

// images:
import starbg from "../../assets/landing/stars.svg";
import star from "../../assets/courses/star2.svg";
import hat from "../../assets/landing/academic hat.svg";
import teacher from "../../assets/courses/Frame(1).svg";
import level from "../../assets/courses/Frame(2).svg";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImageErrore } from "../ImageErrore";

const CoursGridCard = ({
  title,
  levelName,
  cost,
  teacherName,
  likeCount,
  courseId,
  tumbImageAddress,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    // container
    <motion.div
      className="grid grid-col-1 h-[320px] mt-20 max-sm:min-w-[310px] mx-[10px] max-md:mx-0"
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.2 }}
      layout
      key={courseId}
    >
      <Tilt>
        <NavLink to={"/courses-detail/" + courseId}>
          {/* map part of card:  */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="group relative rounded-xl max-md:m-4 px-4 bg-white 
                dark:bg-gray-600/70 dark:hover:bg-secondary transition duration-500 "
            style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25)" }}
          >
            {/* card image   */}
            <div
              style={{ boxShadow: " 0px 1px 4px 0px rgba(0, 0, 0, 0.25)" }}
              className="relative grid justify-items-center top-[-25px]
                        rounded-xl h-[170px]   w-[100%]"
            >
              <img
                src={tumbImageAddress ? tumbImageAddress : ImageErrore}
                onError={ImageErrore}
                className="rounded-xl w-full h-full"
              />
            </div>

            {/* carde body  */}
            <div className="relative top-[-10px]">
              <h3 className="text-right dark:text-white text-lg font-semibold">
                {title}
              </h3>

              <div className="grid grid-cols-2 my-2 gap-3">
                <div className="flex text-gray-400 dark:text-gray-400 dark:group-hover:text-gray-200 text-sm">
                  <img
                    src={hat}
                    className="mr-1 relative top-[2px] w-[17px] h-[17px]"
                  />
                  {likeCount}
                </div>
                <div className="flex flex-row-reverse text-xs leading-6 text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-200">
                  <img
                    src={teacher}
                    className="ml-1 relative top-1 w-[18px] h-[18px]"
                  />{" "}
                  {teacherName}
                </div>
                <div className="flex flex-rows">
                  <img src={starbg} className="w-[18px] h-[18px]" />
                  <img src={starbg} className="w-[18px] h-[18px]" />
                  <img src={starbg} className="w-[18px] h-[18px]" />
                  <img src={starbg} className="w-[18px] h-[18px]" />
                  <img src={star} className="w-[18px] h-[18px]" />
                </div>

                <div className="flex flex-row-reverse text-sm text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-200">
                  <img
                    src={level}
                    className="ml-1 relative top-1 w-[18px] h-[18px]"
                  />{" "}
                  {levelName}
                </div>
              </div>

              <div className="flex flex-row-reverse py-2 border-t-[1.5px]">
                <MdOutlineAddShoppingCart className="w-8 h-8 text-green" />
                <div className="absolute left-0 flex flex-row text-green text-lg">
                  <p className="text-[10px] mr-2 relative top-1">تومان</p>
                  {cost}
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </Tilt>
    </motion.div>
  );
};

export default CoursGridCard;
