import React, { useState } from "react";
import image from "../../assets/detail/dimage.png";
import { motion } from 'framer-motion';
import CourseCard from "../../components/coursedetailComponents/coursecard/CourseCard";
import Detail from "../../components/coursedetailComponents/detail/Detail";
import Description from "../../components/coursedetailComponents/Description/Description";
import HeadLines from "../../components/coursedetailComponents/Headlines/HeadLines";

import Comments from "../../components/coursedetailComponents/comments/Comments";
import RelatedCourses from "../../components/coursedetailComponents/RelatedCourses/RelatedCourses";

import {   useCourseId } from "../../core/services/query/queries";
import { useParams } from "react-router-dom";

const CourseDetial = () => {




  const {courseId } = useParams();

  console.log({courseId})
  

 

  const CourseDetail = useCourseId(courseId);
  console.log(CourseDetail.data);

  

  return (

    
    <div className=" container  relative">
      <img
        className=" bottom-0 max-md:top-96  absolute opacity-[40%] scale-150  rotate-90"
        src="https://s3-alpha-sig.figma.com/img/19be/48f2/2796a9e90ec1b19857e151fc13e21059?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mZW-g30z8Y9kCtc4Q1Y82wXJ5M3YX1ja6v-gYlyazEUHmGj5fgx4YewqoPzoMl4V4J~Y2sETrcyxsiSfnJArb~OKXnzzQcBQwRsRnlSZI5eAqC9mPjX~jPtEjEaaNYlHuPhaUQ671CFaG9FP8BAUgrxGbtub-sQCi8oLtVfkXsjsO4-KqNeUdQpM9MfXLhXrbdziI4zuOcpcn74-w8NTLCgEbqS66Vs7LO4-uoZQC0Kfv6we2O7hov7fqXpvrD8dLTZNQ22GCZ5C9iP6fYmkkQ6sgbL5HZBGy4Ocxh3cxeAgyhp6R56KMjTb~fHkpUTzkxI2T4Z-fBM4z~wSy~mrcw__"
        alt=""
      />


      <div className="flex max-md:container  mt-[35px] justify-between">
        {/* image section */}
        <motion.div 
            initial={{  x:-500,opacity:0,y:-200}}
            animate={{ x:0,y:0,opacity:1}}
            transition={{type:"spring",stiffness:40, delay:0.2}}
        
        style={{boxShadow:"box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25)"}} className="max-xl:w-[550px] max-md:hidden max-lg:h-[300px] h-[395px] max-xl:h-[320px] w-[624px] max-2xl:mr-10">
          <img className=" h-full w-full  rounded-[15px]" src={image} alt="" />
        </motion.div>
        {/* course detail card */}

        <CourseCard/>
        
      </div>



     

        <div className=" mt-8 w-[412px] max-md:left-16 max-md:absolute    max-sm:w-full max-sm:container max-sm:left-0   max-2xl:w-[380px] max-lg:w-[300px] max-xl:w-[350px] ">
       
          {/* detail section */}
          <Detail/>

          {/* RelatedCourses section */}

          <div style={{boxShadow:" 0px 1px 2px 0 rgba(0, 0, 0, 0.25)"}} className="bg-white max-sm:w-full max-md:justify-center     dark:bg-slate-700 flex max-md:h-[300px] max-lg:w-[300px] max-md:w-[500px]  flex-wrap max-2xl:w-[380px]  max-xl:w-[350px] mt-[35px]  rounded-[15px] w-[412px] h-[601px]  p-[23px]">

<div style={{boxShadow:" 0px 1px 2px 0 rgba(0, 0, 0, 0.25)"}} className=' bg-[#E8E8E8] rounded-t-[10px]  max-md:w-[500px] w-[378px] max-sm:w-full  h-[50px] pr-[25px] justify-end flex items-center
 text-right text-[#555555] font-Yekan font-normal text-[20px] mb-[8px] dark:text-slate-100 dark:bg-slate-600'>دوره های مرتبط
    </div>



          {samecourses.map((data,index)=>( 

          <RelatedCourses  key={index} title={data.title} image={data.image} />))}
 </div>
        </div>

         

        <div className="  max-xl:right-16 max-sm:w-full max-sm:left-0   max-lg:right-8 max-lg:top-[303px] max-2xl:right-20 absolute right-24 top-[430px]  w-[809px]   max-2xl:top-[398px] max-xl:top-[335px] max-md:top-[1370px] max-md:left-5 max-2xl:w-[700px] max-lg:w-[400px] max-xl:w-[520px] max-md:w-[500px] max-md:mx-auto">
          {/* Description section */}

          <Description/>
          {/* headlines */}

     


          <HeadLines/>

          {/* comments */}
          
          <h4 className=" mark mt-5 max-xl:text-[20px] dark:text-slate-300  ">نظرات</h4><div className="max-lg:w-full max-xl:w-full]  max-sm:w-full max-md:w-[500px]">
          <Comments width={"w-[809px]"} height={"h-852px"} courseId={courseId}/></div>
          
       </div>
     
    </div>
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



