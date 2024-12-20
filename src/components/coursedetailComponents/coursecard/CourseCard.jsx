import React, { useEffect, useState } from "react";
import { useCourseId } from "../../../core/services/query/queries";
import { postReserv } from "../../../core/services/DashApi";
import { MdOutlineShoppingCart } from "react-icons/md";

import {
  useDeleteFavoriteCourse,
  usePostFavoriteCourse,
} from "../../../core/services/mutation/DetailsMutation";
import { toast } from "react-toastify";
import Buton from "../../Commen/Buton";

const CourseCard = ({ courseId, isUserFavorite, isCourseReseve }) => {
  const CourseDetail = useCourseId(courseId);

  const [save, setSave] = useState(isUserFavorite ? true : false);
  const [isReserve, setIsReseve] = useState(isCourseReseve);

  const [favorite, setFavorite] = useState(CourseDetail.data?.isUserFavorite);

  const addFavoriteCourse = usePostFavoriteCourse();

  const handleAddFavorite = (favorite) => {
    const params = {
      courseId: favorite,
    };
    addFavoriteCourse.mutate(params);
  };

  const deleteFavoriteCourse = useDeleteFavoriteCourse();

  const handleRemoveFavorite = (userFavoriteId) => {
    const CourseFavoriteId = new FormData();
    CourseFavoriteId.append("CourseFavoriteId", userFavoriteId);
    deleteFavoriteCourse.mutate(CourseFavoriteId);
  };

  const [reserve, setReserve] = useState(false);

  const handleReserveCourse = (reserv) => {
    setIsReseve(1);
    const params = {
      courseId: reserv,
    };
    const reservComment = postReserv(params);
  };

  useEffect(() => {
    try {
      if (reserve) {
        handleReserveCourse(courseId);
        toast.success("اطلاعات شما با موفقیت بروزرسانی شد.", {
          theme: "colored",
          className: "custom-toast",
        });
      }
    } catch (error) {
      toast.error("بروزرسانی اطلاعات با خطا مواجه شد. دوباره امتحان کنید.", {
        theme: "colored",
        className: "custom-toast",
      });
      console.error("Error updating user info:", error);
    }
  }, [reserve]);

  useEffect(() => {
    if (reserve) {
      handleReserveCourse(courseId);
    }
  }, [reserve]);

  return (
    <>
      {/* course detail card */}
      <div
        style={{ boxShadow: " 0px 1px 2px 0 rgba(0, 0, 0, 0.25)" }}
        className="max-xl:w-[500px] max-sm:mx-auto max-xl:h-[320px] max-lg:h-[340px]  w-[598px] p-[36px] dark:dark:bg-slate-700
            bg-[#FFFFFF]  rounded-[15px]  h-[395px]"
      >
        <div className=" flex justify-between  relative">
          <svg
            onClick={() => (
              favorite === true
                ? handleRemoveFavorite(CourseDetail.data?.userFavoriteId)
                : handleAddFavorite(CourseDetail.data?.courseId),
              setSave(!save)
            )}
            width="27"
            className={`h-[20px] stroke-primary dark:stroke-orange cursor-pointer
                ${save ? "fill-primary  dark:fill-orange" : "  "}`}
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.7921 3.73726C21.0296 3.88126 21.9375 4.94888 21.9375 6.19538V23.625L13.5 19.4063L5.0625 23.625V6.19538C5.0625 4.94888 5.96925 3.88126 7.20788 3.73726C11.3886 3.25197 15.6114 3.25197 19.7921 3.73726Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          {/* course name */}

          <h2 className=" text-right font-bold max-lg:mt-[-20px] dark:text-white text-[24px] max-xl:text-[20px] max-lg:text-[18px]  leading-10 text-black">
            {CourseDetail.data?.title}
          </h2>
        </div>

        <p className="max-xl:text-[16px] max-xl:mt-[10px] max-lg:text-[14px]   mt-[40px] dark:text-slate-300 text-[#777777] font-normal text-[18px] leading-7 text-right">
          {CourseDetail.data?.miniDescribe}
        </p>

        <div className="   flex-row-reverse  justify-between flex max-xl:mt-[10px] mt-[30px] ">
          <div className="   flex-row-reverse items-center  flex ">
            <svg
              width="24"
              height="25"
              className="dark:stroke-orange stroke-darkgreen/80 max-xl:w-[20px] max-lg:w-[18px]"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.41 5.75024C15.41 6.66663 15.0235 7.54549 14.3354 8.19347C13.6473 8.84145 12.7141 9.20549 11.741 9.20549C10.7679 9.20549 9.83462 8.84145 9.14654 8.19347C8.45846 7.54549 8.07189 6.66663 8.07189 5.75024C8.07189 4.83386 8.45846 3.955 9.14654 3.30702C9.83462 2.65903 10.7679 2.295 11.741 2.295C12.7141 2.295 13.6473 2.65903 14.3354 3.30702C15.0235 3.955 15.41 4.83386 15.41 5.75024ZM4.40381 18.7585C4.43525 16.9456 5.2221 15.2168 6.59466 13.9452C7.96722 12.6736 9.81552 11.9609 11.741 11.9609C13.6664 11.9609 15.5147 12.6736 16.8873 13.9452C18.2598 15.2168 19.0467 16.9456 19.0781 18.7585C16.7763 19.7525 14.2732 20.2655 11.741 20.2623C9.12271 20.2623 6.63753 19.7242 4.40381 18.7585Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h3 className=" font-normal max-xl:text-[18px] max-lg:text-[14px] text-right text-[22px] dark:text-blue-200 leading-6 text-darkgreen/80">
              {CourseDetail.data?.teacherName}
            </h3>
          </div>

          <div className="  flex items-center gap-2">
            <svg
              width="26"
              height="23"
              className="max-xl:w-[20px] max-lg:w-[18px]  stroke-darkgreen/80 dark:stroke-orange "
              viewBox="0 0 26 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.8125 19.4375C7.48201 19.4321 14.1225 20.3153 20.5588 22.0637C21.4675 22.3112 22.375 21.6362 22.375 20.6937V19.4375M2.6875 1.625V2.5625C2.6875 2.81114 2.58873 3.0496 2.41291 3.22541C2.2371 3.40123 1.99864 3.5 1.75 3.5H0.8125M0.8125 3.5V3.03125C0.8125 2.255 1.4425 1.625 2.21875 1.625H23.3125M0.8125 3.5V14.75M23.3125 1.625V2.5625C23.3125 3.08 23.7325 3.5 24.25 3.5H25.1875M23.3125 1.625H23.7812C24.5575 1.625 25.1875 2.255 25.1875 3.03125V15.2188C25.1875 15.995 24.5575 16.625 23.7812 16.625H23.3125M0.8125 14.75V15.2188C0.8125 15.5917 0.960658 15.9494 1.22438 16.2131C1.4881 16.4768 1.84579 16.625 2.21875 16.625H2.6875M0.8125 14.75H1.75C1.99864 14.75 2.2371 14.8488 2.41291 15.0246C2.58873 15.2004 2.6875 15.4389 2.6875 15.6875V16.625M23.3125 16.625V15.6875C23.3125 15.4389 23.4113 15.2004 23.5871 15.0246C23.7629 14.8488 24.0014 14.75 24.25 14.75H25.1875M23.3125 16.625H2.6875M16.75 9.125C16.75 10.1196 16.3549 11.0734 15.6517 11.7767C14.9484 12.4799 13.9946 12.875 13 12.875C12.0054 12.875 11.0516 12.4799 10.3483 11.7767C9.64509 11.0734 9.25 10.1196 9.25 9.125C9.25 8.13044 9.64509 7.17661 10.3483 6.47335C11.0516 5.77009 12.0054 5.375 13 5.375C13.9946 5.375 14.9484 5.77009 15.6517 6.47335C16.3549 7.17661 16.75 8.13044 16.75 9.125ZM20.5 9.125H20.51V9.135H20.5V9.125ZM5.5 9.125H5.51V9.135H5.5V9.125Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h4 className="max-xl:text-[14px] dark:text-blue-200  font-normal text-[16px] max-lg:text-[14px]  leading-[22.7px] font-Yekan  text-darkgreen/80">
              تومان
            </h4>
            <h2 className=" max-lg:text-[18px]  dark:text-blue-200  max-xl:text-[27px]  leading-[42.55px]  font-normal font-Yekan text-[30px]  text-darkgreen/80">
              {CourseDetail.data?.cost}
            </h2>
          </div>
        </div>

        <Buton
          onClick={() => {
            reserve ? "" : setReserve(true);
          }}
          text={`${isReserve == 1 ? "! قبلا شرکت کردید  " : "!شرکت در دوره"}`}
          icon={<MdOutlineShoppingCart className="text-white w-7 h-7" />}
          style={
            "bg-secondary/90 max-lg:text-[16px]   max-md:mx-auto  max-xl:w-[280px] max-xl:h-[40px] max-lg:ml-[0] max-xl:ml-[10%] ml-[18%] max-xl:mt-[15px] mt-[25px] flex gap-3 items-center justify-center  w-[347px] h-[55px] text-white rounded-[9px] font-bold max-xl:text-[19px] text-[22px]"
          }
        />
      </div>
    </>
  );
};

export default CourseCard;
