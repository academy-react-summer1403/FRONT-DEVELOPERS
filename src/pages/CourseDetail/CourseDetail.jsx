import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CourseCard from "../../components/coursedetailComponents/coursecard/CourseCard";
import Detail from "../../components/coursedetailComponents/detail/Detail";
import Description from "../../components/coursedetailComponents/Description/Description";
import HeadLines from "../../components/coursedetailComponents/Headlines/HeadLines";
import { useCourseId } from "../../core/services/query/queries";
import { useParams } from "react-router-dom";
import CourseComment from "../../components/coursedetailComponents/comments/CourseComment";
import RelatedCourses from "../../components/coursedetailComponents/RelatedCourses/RelatedCourses";
import { ImageErrore } from "../../components/ImageErrore";
import { useCommentCourse } from "../../core/services/query/CommentQuery";
import { useTranslation } from "react-i18next";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CardLoading from "../../components/skeleton/detail/CardLoading";
import Related from "../../components/skeleton/detail/Related";

const CourseDetial = () => {
  const { courseId } = useParams();
  const {t}=useTranslation()

  console.log({ courseId });

  const CourseDetail = useCourseId(courseId);
  console.log(CourseDetail.data);

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  }, [])


  return (
  <SkeletonTheme  baseColor="#cbd5e1" highlightColor="#f5f5f5" >
    <div className=" container max-lg:pt-2 max-lg:px-0 relative  pb-12  ">
  
      {/* top  */}
      <div className="flex max-md:container  mt-[35px] justify-between">
        {/* image section */}
        <motion.div
          initial={{ x: -500, opacity: 0, y: -200 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
          style={{ boxShadow: "box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25)" }}
          className="max-xl:w-[550px]  max-md:hidden max-lg:h-[340px] h-[395px] max-xl:h-[320px] w-[624px] max-2xl:mr-10"
        >
          {loading ? <Skeleton className="h-full w-full  rounded-[15px]"/> : 
            <img className=" h-full w-full  rounded-[15px]" src={CourseDetail.data?.imageAddress }
              onError={ImageErrore} alt=''
            />
            }
        </motion.div>
        {/* course detail card */}
            {loading ? <CardLoading/> : <CourseCard courseId = {courseId} /> }
        
      </div>
         

      <div className="flex flex-row gap-10 justify-center max-md:flex max-md:flex-col pt-2 ">

        {/* left  */}
        <div className="mt-8 w-[412px] max-md:w-full max-sm:container max-sm:left-0 max-md:grid max-md:justify-items-center  max-2xl:w-[380px] max-lg:w-[300px] max-xl:w-[350px] ">
          {/* detail section */}
          <Detail courseId={courseId}/>

          {/* RelatedCourses section */}

      
          <div style={{boxShadow:" 0px 1px 2px 0 rgba(0, 0, 0, 0.25)"}} className="bg-white max-sm:w-full max-md:justify-center dark:bg-slate-700 flex  max-lg:w-[300px] max-md:w-[500px]  flex-wrap max-2xl:w-[380px]  max-xl:w-[350px] mt-[35px]  rounded-[15px] w-[412px] h-[601px]  p-[23px]">

            <div style={{boxShadow:" 0px 1px 2px 0 rgba(0, 0, 0, 0.25)"}} className=' bg-[#E8E8E8] rounded-t-[10px]  max-md:w-[500px] w-[378px] max-sm:w-full  h-[50px] pr-[25px] justify-end flex items-center
            text-right text-[#555555] font-Yekan font-normal text-[20px] mb-[8px] dark:text-slate-100 dark:bg-slate-600'>{t("related_courses")}
                </div>



            {loading ?  <Related cards={4} custumStyle="h-[112px] p-[15px]" imageStyle="w-[120px] h-[80px]"/> :   samecourses.map((data,index)=>( 

            <RelatedCourses  key={index} title={data.title} image={data.image} />))}
          </div>

        
    
        </div>
        
        {/* right  */}
        <div className="max-sm:w-full w-[809px]  max-2xl:w-[700px] max-lg:w-[350px] max-xl:w-[520px] max-md:w-[500px] max-md:mx-auto">
          {/* Description section */}

          <Description  courseId = {courseId}/>
          {/* headlines */}

          <HeadLines />

          {/* comments */}

          <h4 className=" mark mt-5 max-xl:text-[20px] dark:text-slate-300  ">
          {t("comments")}
          </h4>
          <div className="  ">
             <CourseComment courseId={courseId} useComment={useCommentCourse} /> 
          </div>
        </div>

      </div>

    </div>
  </SkeletonTheme>
  );
};

export default CourseDetial;



export const samecourses=[
  {title:"دوره تخصصی ترفند های طراحی فرانت اند",
  image:"https://s3-alpha-sig.figma.com/img/ff18/00fa/69286aff4819156512be6e0b2ffd22d9?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m8gZMtnAmFHDZAupQ2ddctQNGS1hplRMyG1r8zBHOExGkYljmi21lsVWvgc4DlqMLTpPN2hdBOAQT-t9zb~PneJmVt5qBlQmGDa8s9j-DP1ZmCpSex8NGE40nluJ29PmkIWChB3ALr2zCB~J-PVVKAGCAcxi4Q5aPF10ngtMeWeL6A2qyoZbKgmYl6cjgHeFlSWBhVvYTlOhSt9pvWBK4a6CsGcmTX4cFlDfaWNOK0jLzpzCQel6jqqCFF5Yxny9tcuFsWPr8Hz15CLihJLJeSuHhVpxeNUdUxm88j7QCfcQ~MwOjGTad7~CjN04Es35Bvp6Ni-Up3mvfciybPHJyQ__"
  },
  {title:"دوره تخصصی ترفند های طراحی فرانت اند",
      image:"https://s3-alpha-sig.figma.com/img/ff18/00fa/69286aff4819156512be6e0b2ffd22d9?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m8gZMtnAmFHDZAupQ2ddctQNGS1hplRMyG1r8zBHOExGkYljmi21lsVWvgc4DlqMLTpPN2hdBOAQT-t9zb~PneJmVt5qBlQmGDa8s9j-DP1ZmCpSex8NGE40nluJ29PmkIWChB3ALr2zCB~J-PVVKAGCAcxi4Q5aPF10ngtMeWeL6A2qyoZbKgmYl6cjgHeFlSWBhVvYTlOhSt9pvWBK4a6CsGcmTX4cFlDfaWNOK0jLzpzCQel6jqqCFF5Yxny9tcuFsWPr8Hz15CLihJLJeSuHhVpxeNUdUxm88j7QCfcQ~MwOjGTad7~CjN04Es35Bvp6Ni-Up3mvfciybPHJyQ__"
  },
  {title:"دوره تخصصی ترفند های طراحی فرانت اند",
          image:"https://s3-alpha-sig.figma.com/img/ff18/00fa/69286aff4819156512be6e0b2ffd22d9?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m8gZMtnAmFHDZAupQ2ddctQNGS1hplRMyG1r8zBHOExGkYljmi21lsVWvgc4DlqMLTpPN2hdBOAQT-t9zb~PneJmVt5qBlQmGDa8s9j-DP1ZmCpSex8NGE40nluJ29PmkIWChB3ALr2zCB~J-PVVKAGCAcxi4Q5aPF10ngtMeWeL6A2qyoZbKgmYl6cjgHeFlSWBhVvYTlOhSt9pvWBK4a6CsGcmTX4cFlDfaWNOK0jLzpzCQel6jqqCFF5Yxny9tcuFsWPr8Hz15CLihJLJeSuHhVpxeNUdUxm88j7QCfcQ~MwOjGTad7~CjN04Es35Bvp6Ni-Up3mvfciybPHJyQ__"
  },
  {title:"دوره تخصصی ترفند های طراحی فرانت اند",
              image:"https://s3-alpha-sig.figma.com/img/ff18/00fa/69286aff4819156512be6e0b2ffd22d9?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m8gZMtnAmFHDZAupQ2ddctQNGS1hplRMyG1r8zBHOExGkYljmi21lsVWvgc4DlqMLTpPN2hdBOAQT-t9zb~PneJmVt5qBlQmGDa8s9j-DP1ZmCpSex8NGE40nluJ29PmkIWChB3ALr2zCB~J-PVVKAGCAcxi4Q5aPF10ngtMeWeL6A2qyoZbKgmYl6cjgHeFlSWBhVvYTlOhSt9pvWBK4a6CsGcmTX4cFlDfaWNOK0jLzpzCQel6jqqCFF5Yxny9tcuFsWPr8Hz15CLihJLJeSuHhVpxeNUdUxm88j7QCfcQ~MwOjGTad7~CjN04Es35Bvp6Ni-Up3mvfciybPHJyQ__"
  },
]


export const suggestion=[
{title:"همه چیز در مورد انگولار" ,
image: "https://s3-alpha-sig.figma.com/img/f4e7/01a9/a7f2a7fb0c9fd179bc58e1671a7757b9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I20pdX8VTEiaAusGsNH-UmjAPrqdatwlnWeeHEiA8SNcqSKoW7mH7gBs6rNI5ythGz1Zlg9peIMKrIRJBbfqv4x4eaYFK-d3QOIbh24JGu2nKxnQ02z-ENOL~4LiYtBVeTuEPz~Dp5d8gFU4Ug19tUaxT5wHjLbRDqh85mxqGIg1qD2LTdzT2m-w2FMWcn9tu5rK505rA50UbxmWNQR~CncO5eZ0fi5RfWlCTR4tAqlslj44n6BfRI3jevGjZRuwWAgnlf-QJi3ucGzBzCGAQkedGagdyCiGd8R6nSsMnY5S1R9UkZ8OYWwUUqZbYK6ETcOKjFj6osbvdw76UaF5TA__"
},
{title:"چگونه برای سایتمان پشتیبان بهتری باشیم ؟" ,
    image:"https://s3-alpha-sig.figma.com/img/5e73/b991/2271dcd8eb60c42cda58f1642e6503a8?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zd6CjZEQgxrtEpakKPagtp96q1ljRj0-Zm6Z2VxoI7JcQ~-pQc47FDux90rTFl14NFvq~8mnVM895piqT3OqbK9fpEM07Wq9iBBjRu1PY9vHS8A8XK78mahnQROKiHKsF-3iawKZkYOeZ8uzvqwF7XX8H4YRqr~IZNRxQnIAH-7uEctbl6uNYRJPhaJOrUVOlHQW3jbLw9fNkxyPoZa9yQOL6lQMnyDIiV8xyanHkq5N67yrBBLgqSGKFLhF39zhbVTQDOlVKUTmx6lCrL5qMEbR24bW6UTar64YiTWKi0w60Ijd57xn32zTIHF336kqmyq8KuzBL04pes6oJc2W7w__" 
},
{title:"چرا فیگما را انتخاب کنیم؟" ,
        image: "https://s3-alpha-sig.figma.com/img/fbbf/aff3/f58b4edefff1cdd827e82897ce1e29f8?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j4-NT6Donxkq5gBzuoa7ygI148xaqRsZ6DW3sX1u0r5KqRr0lDTFc7FfnUHsnqoMhFy34rkWAmESiF79WoZ-rnMLxZ1QzW79hRXdR6NknAOqLGL5LGBri~xnCrFN1FSpY0MDvrMnOGv2iIZEhPrVS7Xryk~VeWJ2~hlE2AodF~mpw5DwLoRgg1t4ykdYSZ~YNvjn9~JtHMMFoim1egKSYzv5loOL0n9omGnsJ9UKp-mXvidelRAESGUdgRHEQFT2l4KdceuWrNfvP9DZQjz6nIpNp5ZOp3S5-FB1PL970fRlzIyYfbqe90JgygAU02WKuATXOjeir0IxrT0PHjgLlg__"
},

]
