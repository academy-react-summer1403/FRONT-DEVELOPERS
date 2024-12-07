import React, { useEffect, useState } from "react";

import { useCommentCourse } from "../../../core/services/query/CommentQuery";

import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import DateApi from "../../DateApi";
import { ImageErrore } from "../../ImageErrore";
import CommentsLoading from "../../skeleton/detail/CommentsLoading";
import {
  useDislikeCourseComment,
  useLikeCommentCourse,
} from "../../../core/services/mutation/DetailsMutation";
import CommentdivCourse from "./CommentdivCourse";
import ReplyCourse from "./ReplyCourse";
import AddReplyCourse from "./AddReplyCourse";
import Buton from "../../Commen/Buton";

const CourseComment = ({ courseId }) => {
  const [loading, setLoading] = useState(true);

  const GetCommentcourse = useCommentCourse(courseId);
  

  const [like, setLike] = useState(GetCommentcourse.data);
  useEffect(() => {
    if (GetCommentcourse.data) {
      setLike(GetCommentcourse.data);
    }
  }, [GetCommentcourse.data]);

  // like:
  const postLikeComment = useLikeCommentCourse(like);
  const handleLikeComment = (id) => {
    GetCommentcourse.data?.map((comment) => {
    
      if (comment.id === id) {
        postLikeComment.mutate(id);
      }
    });
  };

  const DislikeCourseComment = useDislikeCourseComment(like);
  const handleDissLikeComment = (id) => {
    GetCommentcourse.data?.map((comment) => {
      if (comment.id === id) {
        DislikeCourseComment.mutate(id);
      }
    });
  };

  const [comentdiv, setCommentdiv] = useState(false);

  const [showMore, setShowMore] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [replydiv, setReplydiv] = useState();

  

  const handleReply = (id) => {
    setReplydiv(id);
  };

  return (
    <div
      style={{ boxShadow: " 0px 1px 2px 0 rgba(0, 0, 0, 0.25)" }}
      className={`mt-[15px] bg-white dark:bg-slate-700 rounded-[15px] p-[20.5px]
       overflow-hidden relative ${
         showMore ? "h-[774px] mb-40" : " min-h-[774px]"
       }`}
    >
      {/* add comment :  */}
      <button
        onClick={() => setCommentdiv(true)}
        className="w-[185px] h-[37px] max-xl:w-[170px] max-xl:h-[37px] rounded-[7px] dark:bg-orange bg-primary flex items-center justify-center  gap-2 "
      >
        <h3 className="font-normal font-Yekan text-[15px] text-darkgreen/90 dark:text-white">
          {t("newcomment")}
        </h3>

        <svg
          width="17"
          height="16"
          className=" dark:stroke-white stroke-green"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M5.82813 7.5C5.82813 7.57874 5.79685 7.65425 5.74117 7.70992C5.6855 7.7656 5.60999 7.79687 5.53125 7.79687C5.45251 7.79687 5.377 7.7656 5.32133 7.70992C5.26565 7.65425 5.23438 7.57874 5.23438 7.5C5.23438 7.42126 5.26565 7.34575 5.32133 7.29008C5.377 7.2344 5.45251 7.20312 5.53125 7.20312C5.60999 7.20312 5.6855 7.2344 5.74117 7.29008C5.79685 7.34575 5.82813 7.42126 5.82813 7.5ZM5.82813 7.5H5.53125M8.79688 7.5C8.79688 7.57874 8.7656 7.65425 8.70992 7.70992C8.65425 7.7656 8.57874 7.79687 8.5 7.79687C8.42126 7.79687 8.34575 7.7656 8.29008 7.70992C8.2344 7.65425 8.20313 7.57874 8.20313 7.5C8.20313 7.42126 8.2344 7.34575 8.29008 7.29008C8.34575 7.2344 8.42126 7.20312 8.5 7.20312C8.57874 7.20312 8.65425 7.2344 8.70992 7.29008C8.7656 7.34575 8.79688 7.42126 8.79688 7.5ZM8.79688 7.5H8.5M11.7656 7.5C11.7656 7.57874 11.7343 7.65425 11.6787 7.70992C11.623 7.7656 11.5475 7.79687 11.4688 7.79687C11.39 7.79687 11.3145 7.7656 11.2588 7.70992C11.2032 7.65425 11.1719 7.57874 11.1719 7.5C11.1719 7.42126 11.2032 7.34575 11.2588 7.29008C11.3145 7.2344 11.39 7.20312 11.4688 7.20312C11.5475 7.20312 11.623 7.2344 11.6787 7.29008C11.7343 7.34575 11.7656 7.42126 11.7656 7.5ZM11.7656 7.5H11.4688M15.625 7.5C15.625 11.1068 12.4346 14.0312 8.5 14.0312C7.81694 14.0321 7.13678 13.9424 6.47729 13.7645C5.54769 14.4183 4.41367 14.7153 3.28292 14.6012C3.1572 14.5891 3.03201 14.572 2.90767 14.5498C3.29785 14.0899 3.56433 13.5382 3.68192 12.9467C3.75317 12.5849 3.57663 12.2334 3.31221 11.9761C2.11125 10.8076 1.375 9.23296 1.375 7.5C1.375 3.89317 4.56542 0.96875 8.5 0.96875C12.4346 0.96875 15.625 3.89317 15.625 7.5Z"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <CommentdivCourse
        comentdiv={comentdiv}
        setCommentdiv={setCommentdiv}
        holder={"نظر جدید"}
        Id={courseId}
      />

      {/* comments:  */}
      {loading ? (
        <CommentsLoading cards={2} />
      ) : (
        GetCommentcourse.data?.map((item) => (
          <div
            data-aos="zoom-in-down"
            style={{ boxShadow: "-1px 2px 1px 0 rgba(0,0,0,0.2)" }}
            className={`bg-[#F9F9F9] dark:bg-slate-800 rounded-[7px] w-full  flex flex-col  p-[20.5px] mt-[30px]
                ${showMore ? "h-[315px] overflow-hidden" : "min-h-[315px]"}`}
          >
            <div className="w-full h-full flex flex-col">
              <div className=" border-b justify-between h-[80px] px-5 flex items-center">
                <div className="  gap-3 flex items-center justify-between">
                  <svg
                    className="cursor-pointer"
                    onClick={() => handleReply(item.id)}
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.73572 0.264172C6.86446 0.393079 6.93678 0.567817 6.93678 0.750005C6.93678 0.932193 6.86446 1.10693 6.73572 1.23584L2.40905 5.5625H11.7499C13.3909 5.5625 14.9647 6.2144 16.1251 7.37478C17.2855 8.53516 17.9374 10.109 17.9374 11.75C17.9374 13.391 17.2855 14.9648 16.1251 16.1252C14.9647 17.2856 13.3909 17.9375 11.7499 17.9375H8.99988C8.81755 17.9375 8.64268 17.8651 8.51375 17.7361C8.38482 17.6072 8.31238 17.4323 8.31238 17.25C8.31238 17.0677 8.38482 16.8928 8.51375 16.7639C8.64268 16.6349 8.81755 16.5625 8.99988 16.5625H11.7499C12.3819 16.5625 13.0077 16.438 13.5915 16.1962C14.1754 15.9543 14.706 15.5998 15.1528 15.153C15.5997 14.7061 15.9542 14.1755 16.1961 13.5917C16.4379 13.0078 16.5624 12.382 16.5624 11.75C16.5624 11.118 16.4379 10.4922 16.1961 9.90834C15.9542 9.32446 15.5997 8.79393 15.1528 8.34705C14.706 7.90017 14.1754 7.54569 13.5915 7.30383C13.0077 7.06198 12.3819 6.9375 11.7499 6.9375H2.40905L6.73572 11.2642C6.80326 11.3271 6.85744 11.403 6.89502 11.4873C6.93259 11.5717 6.9528 11.6627 6.95443 11.755C6.95605 11.8473 6.93907 11.939 6.9045 12.0246C6.86992 12.1102 6.81845 12.188 6.75317 12.2533C6.68788 12.3186 6.61012 12.37 6.52451 12.4046C6.43891 12.4392 6.34722 12.4562 6.2549 12.4545C6.16259 12.4529 6.07156 12.4327 5.98722 12.3951C5.90289 12.3576 5.82699 12.3034 5.76405 12.2358L0.26405 6.73584C0.135304 6.60693 0.0629883 6.43219 0.0629883 6.25C0.0629883 6.06782 0.135304 5.89308 0.26405 5.76417L5.76405 0.264172C5.89296 0.135426 6.06769 0.0631104 6.24988 0.0631104C6.43207 0.0631104 6.60681 0.135426 6.73572 0.264172Z"
                      className="fill-primary"
                    />
                  </svg>

                  <AddReplyCourse
                    comentdiv={replydiv}
                    setCommentdiv={setReplydiv}
                    Id={courseId}
                    commentId={item.id}
                  />

                  {/* comment like: */}

                  <h3 className=" like flex items-center gap-2">
                    <svg
                      onClick={() => {
                        item?.currentUserEmotion === "LIKED"
                          ? "handledeleteCommentlike(item?.id) "
                          : handleLikeComment(item?.id);
                      }}
                      width="20"
                      height="19"
                      className={`cursor-pointer max-lg:w-[15px] max-lg:h-[17px] stroke-orange/80
                                ${
                                  item?.currentUserEmotion == "LIKED"
                                    ? "fill-orange/80 "
                                    : " "
                                } `}
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.08025 8.39587C5.81909 8.39587 6.4855 7.98704 6.942 7.40587C7.65357 6.49802 8.54682 5.74871 9.56459 5.20587C10.2273 4.85387 10.8021 4.32954 11.0798 3.63379C11.2749 3.14635 11.3751 2.62615 11.375 2.10112V1.52087C11.375 1.33854 11.4474 1.16367 11.5764 1.03474C11.7053 0.905807 11.8802 0.833374 12.0625 0.833374C12.6095 0.833374 13.1341 1.05067 13.5209 1.43747C13.9077 1.82426 14.125 2.34887 14.125 2.89587C14.125 3.95187 13.8867 4.95196 13.4623 5.84571C13.2184 6.35721 13.5603 7.02087 14.1268 7.02087M14.1268 7.02087H16.9923C17.9328 7.02087 18.7753 7.65704 18.8752 8.59296C18.9164 8.97979 18.9375 9.37212 18.9375 9.77087C18.9413 12.2792 18.0841 14.7128 16.5093 16.6651C16.1536 17.107 15.6045 17.3334 15.038 17.3334H11.3567C10.9139 17.3334 10.473 17.2619 10.0523 17.1225L7.19775 16.1692C6.7771 16.0293 6.33665 15.9581 5.89334 15.9584H4.412M14.1268 7.02087H12.0625M4.412 15.9584C4.48809 16.1463 4.57059 16.3296 4.6595 16.5102C4.84009 16.8769 4.588 17.3334 4.18009 17.3334H3.34775C2.53284 17.3334 1.7775 16.8585 1.54009 16.0794C1.22259 15.0373 1.06164 13.9539 1.0625 12.8646C1.0625 11.441 1.33292 10.0816 1.82425 8.83312C2.10475 8.12362 2.81975 7.70837 3.58334 7.70837H4.54859C4.98125 7.70837 5.2315 8.21804 5.00692 8.58837C4.22399 9.87716 3.81106 11.3567 3.81342 12.8646C3.81342 13.9591 4.02609 15.0032 4.41292 15.9584H4.412Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {item?.likeCount}
                  </h3>

                  <h3
                    onClick={() => handleDissLikeComment(item?.id)}
                    className="like flex items-center gap-2"
                  >
                    <svg
                      onClick={() => ""}
                      width="20"
                      height="19"
                      className={`cursor-pointer max-lg:w-[15px] max-lg:h-[17px] stroke-orange/80
                                    ${
                                      item?.currentUserEmotion == "DISSLIKED"
                                        ? "fill-orange/80 "
                                        : " "
                                    } `}
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.87317 11.9791H3.00767C2.06717 11.9791 1.22475 11.343 1.12483 10.407C1.08324 10.0158 1.06243 9.62259 1.0625 9.22913C1.0625 6.61846 1.97183 4.22046 3.49075 2.33488C3.84642 1.89304 4.3955 1.66663 4.962 1.66663H8.64333C9.08664 1.66636 9.5271 1.73755 9.94775 1.87746L12.8023 2.83079C13.2229 2.97071 13.6634 3.0419 14.1067 3.04163H15.2928M5.87317 11.9791C6.43967 11.9791 6.78158 12.6428 6.53775 13.1543C6.09984 14.0759 5.8734 15.0838 5.875 16.1041C5.875 16.6511 6.0923 17.1757 6.47909 17.5625C6.86589 17.9493 7.39049 18.1666 7.9375 18.1666C8.11984 18.1666 8.2947 18.0942 8.42364 17.9653C8.55257 17.8363 8.625 17.6615 8.625 17.4791V16.8989C8.625 16.3736 8.72583 15.8539 8.92017 15.3662C9.19883 14.6695 9.77267 14.147 10.4354 13.7941C11.4529 13.2512 12.3458 12.5019 13.0571 11.5941C13.5136 11.013 14.1809 10.6041 14.9198 10.6041H15.2717M5.87317 11.9791H7.89167M15.2928 3.04163C15.302 3.08746 15.3185 3.13329 15.3396 3.17729C15.8832 4.27729 16.1875 5.51479 16.1875 6.82288C16.1875 8.18596 15.8575 9.47204 15.2717 10.6041M15.2928 3.04163C15.2232 2.70704 15.4606 2.35413 15.8199 2.35413H16.6523C17.4672 2.35413 18.2225 2.82896 18.4599 3.60813C18.7707 4.62563 18.9375 5.70454 18.9375 6.82288C18.9375 8.24646 18.6671 9.60588 18.1758 10.8544C17.8953 11.5639 17.1802 11.9791 16.4176 11.9791H15.4523C15.0197 11.9791 14.7694 11.4695 14.994 11.0991C15.0923 10.9374 15.1849 10.7723 15.2717 10.6041"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {item?.disslikeCount}
                  </h3>
                </div>

                <div className="  flex items-center">
                  <div className="text-right">
                    <h3 className=" commentname  max-lg:text-[12px]   max-lg:line-clamp-1 max-md:text-[15px]  max-md:line-clamp-none  ">
                      {" "}
                      {item?.author}
                    </h3>
                    <h4 className=" datecomment ">
                      {" "}
                      <DateApi dateapi={item?.insertDate} />
                    </h4>
                  </div>

                  <img
                    className=" profile"
                    src={
                      item?.pictureAddress ? item?.pictureAddress : ImageErrore
                    }
                    onError={ImageErrore}
                    alt=""
                  />
                </div>
              </div>

              <p className="w-full  min-h-[40px]  text-right py-2 px-5 comment text-[15px] ">
                {item?.describe}
              </p>

              <div className="w-full  flex justify-start">
                <ReplyCourse
                  courseId={courseId}
                  courseCommmentId={item?.id}
                  showMore={showMore}
                />
              </div>
            </div>
          </div>
        ))
      )}

      {/* show more button */}

      <Buton
          onClick={() => setShowMore(!showMore)}
          text={t("showmore")}
          icon={showMore ? (
            <IoIosArrowDown className="transition duration-500" />
          ) : (
            <IoIosArrowDown className="rotate-180 transition duration-500" />
          )}
          style={
            "border-secondary/80  dark:border-[#E48900]  dark:text-[#fdb359] border-[1px] absolute  bottom-7 left-[43%] text-secondary hover:scale-105 ease-in-out duration-150 leading-[32px] font-normal font-Yekan text-[12px] flex items-center w-[120px] h-[35px] rounded-[25px] mx-auto justify-center gap-2 max-md:mt-[-50px]   "    
          }
        />
    </div>
  );
};

export default CourseComment;
