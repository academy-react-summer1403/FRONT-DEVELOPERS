import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDissLikeCourse, useLikeCourse } from '../../../core/services/mutation/DetailsMutation';


const LikeRate = ({CourseDetail , courseId  }) => {
  const { t } = useTranslation();
 



// like 

  const [like, setLike] = useState(
    CourseDetail?.data?.currentUserLike
  );
  const [currentlike, setCurrentlike] = useState(
    CourseDetail?.data?.likeCount
  );
  const [disslike, setDissLike] = useState(
    CourseDetail?.data?.currentUserDissLike
  );

  const addlikenew = useLikeCourse();
  const handlelike = (courseId) => {
    addlikenew.mutate(courseId)
  };

  const addDisslikenew = useDissLikeCourse();
  const handledisslike = (courseId) => {
    addDisslikenew.mutate(courseId)
  };

  useEffect(() => {
    if(CourseDetail?.data){
     console.log(CourseDetail?.data)
     setCurrentlike(CourseDetail?.data?.likeCount)
     setLike(CourseDetail?.data?.currentUserLike)
     setDissLike(CourseDetail?.data?.currentUserDissLike)
    }
   }, [CourseDetail?.data])


  return (
    <div>
        <motion.div
        initial={{ x: 200, opacity: 0, y: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, duration: 3, delay: 0 }}
        style={{ boxShadow: " 0px 1px 2px 0 #00000040" }}
        className="max-sm:w-full my-[20px] px-[24.5px]  w-full h-[52px] rounded-[8px] bg-white dark:bg-slate-700  flex justify-between items-center"
      >
        <div className=" flex items-center gap-5">
          <div className="  share max-xl:text-[14px] flex items-center gap-2">
            {/* Like: */}
            <svg
              onClick={() => {
                if (like == "0") {
                  handlelike(courseId);
                  setLike("1");
                }
                if (like == "1") {"handledeletelike(articleDetail.data?.detailsNewsDto?.likeId);setLike(false);"}
                  
                  
                
              }}
              width="20"
              height="19"
              className={`cursor-pointer max-xl:h-[15px] max-xl:w-[16px] stroke-[#AAAAAA] dark:stroke-orange
                 ${like === "1" ? "fill-[#AAAAAA]" : "fill-none"}`}
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
            {currentlike}

            {/* DissLike:  */}
            <svg
              className={`cursor-pointer max-xl:h-[15px] max-xl:w-[16px] stroke-[#AAAAAA] dark:stroke-orange 
               ${disslike == "1" ? "fill-[#AAAAAA]" : "fill-none" }`}
              width="20"
              height="19"
              onClick={() => {
                if (disslike == "0") {
                  handledisslike(courseId);
                  setDissLike(0);

                  handledeletelike(articleDetail.data?.detailsNewsDto?.likeId);
                  setLike("0");
                }
              }}
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

            {CourseDetail?.data?.dissLikeCount}
          </div>

          <div className="  flex items-center gap-2">
            <h3 className="share max-sm:text-[12px] max-xl:text-[14px]">
              {t("share")}{" "}
            </h3>
            <svg
              width="19"
              height="19"
              className="max-xl:h-[15px] max-xl:w-[15px] stroke-[#888888] dark:stroke-orange"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.3146 8.54363C5.10273 8.1624 4.77027 7.86232 4.3694 7.69049C3.96853 7.51865 3.52195 7.4848 3.09976 7.59424C2.67757 7.70367 2.30367 7.9502 2.03675 8.29513C1.76983 8.64006 1.625 9.06386 1.625 9.5C1.625 9.93615 1.76983 10.3599 2.03675 10.7049C2.30367 11.0498 2.67757 11.2963 3.09976 11.4058C3.52195 11.5152 3.96853 11.4813 4.3694 11.3095C4.77027 11.1377 5.10273 10.8376 5.3146 10.4564M5.3146 8.54363C5.4721 8.82713 5.56222 9.15263 5.56222 9.5C5.56222 9.84738 5.4721 10.1738 5.3146 10.4564M5.3146 8.54363L13.6849 3.89388M5.3146 10.4564L13.6849 15.1061M13.6849 3.89388C13.8076 4.125 13.9751 4.32934 14.1778 4.49494C14.3804 4.66055 14.614 4.7841 14.8649 4.85837C15.1158 4.93264 15.379 4.95615 15.6391 4.92751C15.8992 4.89887 16.151 4.81867 16.3798 4.69158C16.6085 4.5645 16.8097 4.39308 16.9714 4.18737C17.1331 3.98165 17.2522 3.74575 17.3217 3.49346C17.3912 3.24118 17.4097 2.97757 17.3762 2.71805C17.3426 2.45853 17.2576 2.2083 17.1262 1.982C16.8673 1.53605 16.4437 1.2095 15.9466 1.07254C15.4494 0.935582 14.9183 0.999153 14.4676 1.24959C14.0168 1.50002 13.6823 1.91733 13.5359 2.4118C13.3895 2.90627 13.443 3.43843 13.6849 3.89388ZM13.6849 15.1061C13.5593 15.3322 13.4794 15.5808 13.4499 15.8377C13.4204 16.0947 13.4418 16.3549 13.5128 16.6036C13.5839 16.8522 13.7032 17.0845 13.864 17.287C14.0248 17.4896 14.224 17.6585 14.45 17.7841C14.6761 17.9097 14.9247 17.9895 15.1817 18.019C15.4386 18.0485 15.6988 18.0271 15.9475 17.9561C16.1962 17.885 16.4284 17.7657 16.6309 17.6049C16.8335 17.4441 17.0024 17.245 17.128 17.0189C17.3816 16.5623 17.4435 16.0236 17.3 15.5214C17.1565 15.0192 16.8194 14.5946 16.3628 14.3409C15.9062 14.0873 15.3676 14.0254 14.8653 14.1689C14.3631 14.3124 13.9385 14.6495 13.6849 15.1061Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

      </motion.div>
    </div>
  )
}

export default LikeRate