<<<<<<< HEAD
import React from "react";
import { motion } from "framer-motion";
=======
import React, { useState } from "react";
import image from "../../assets/detail/prof.jpg";
import imgerrore from "../../assets/detail/imgerrore.png";
import { motion } from 'framer-motion';
>>>>>>> 1aed3ebea187b2acd642d800085e6815e00213f4
import CourseCard from "../../components/coursedetailComponents/coursecard/CourseCard";
import Detail from "../../components/coursedetailComponents/detail/Detail";
import Description from "../../components/coursedetailComponents/Description/Description";
import HeadLines from "../../components/coursedetailComponents/Headlines/HeadLines";
import { useCourseId } from "../../core/services/query/queries";
import { useParams } from "react-router-dom";
<<<<<<< HEAD
import Comment from "../../components/coursedetailComponents/comments/Comment";
=======
import { ImageErrore } from "../../components/ImageErrore";

>>>>>>> 1aed3ebea187b2acd642d800085e6815e00213f4

const CourseDetial = () => {
  const { courseId } = useParams();

<<<<<<< HEAD
  console.log({ courseId });
=======



  const {courseId } = useParams();

  console.log({courseId})
  

   
 
>>>>>>> 1aed3ebea187b2acd642d800085e6815e00213f4

  const CourseDetail = useCourseId(courseId);
  console.log(CourseDetail.data);

  

  return (
<<<<<<< HEAD
    <div className=" container  relative">
  

      <div className="flex max-md:container  mt-[35px] justify-between">
        {/* image section */}
        <motion.div
          initial={{ x: -500, opacity: 0, y: -200 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 40, delay: 0.2 }}
          style={{ boxShadow: "box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25)" }}
          className="max-xl:w-[550px] max-md:hidden max-lg:h-[300px] h-[395px] max-xl:h-[320px] w-[624px] max-2xl:mr-10"
        >
          <img
            className=" h-full w-full  rounded-[15px]"
            src={CourseDetail.data?.imageAddress}
            alt=""
          />
=======

    

    
    <div className=" container  relative ">

      <div className="flex max-md:container  mt-[35px] justify-between">
        {/* image section */}
        <motion.div 
            initial={{  x:-500,opacity:0,y:-200}}
            animate={{ x:0,y:0,opacity:1}}
            transition={{type:"spring",stiffness:40, delay:0.2}}
        
        style={{boxShadow:"box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25)"}} className="max-xl:w-[550px] max-md:hidden max-lg:h-[300px] h-[395px] max-xl:h-[320px] w-[624px] max-2xl:mr-10">
          <img className=" h-full w-full  rounded-[15px]" src={CourseDetail.data?.imageAddress }
            onError={ImageErrore}
            />
>>>>>>> 1aed3ebea187b2acd642d800085e6815e00213f4
        </motion.div>
        {/* course detail card */}

        <CourseCard courseId = {courseId}/>
      </div>

      <div className=" mt-8 w-[412px] max-md:left-16 max-md:absolute    max-sm:w-full max-sm:container max-sm:left-0   max-2xl:w-[380px] max-lg:w-[300px] max-xl:w-[350px] ">
        {/* detail section */}
        <Detail courseId={courseId}/>

        {/* RelatedCourses section */}

        <div
          style={{ boxShadow: " 0px 1px 2px 0 rgba(0, 0, 0, 0.25)" }}
          className="bg-white max-sm:w-full max-md:justify-center     dark:bg-slate-700 flex max-md:h-[300px] max-lg:w-[300px] max-md:w-[500px]  flex-wrap max-2xl:w-[380px]  max-xl:w-[350px] mt-[35px]  rounded-[15px] w-[412px] h-[601px]  p-[23px]"
        >
          <div
            style={{ boxShadow: " 0px 1px 2px 0 rgba(0, 0, 0, 0.25)" }}
            className=" bg-[#E8E8E8] rounded-t-[10px]  max-md:w-[500px] w-[378px] max-sm:w-full  h-[50px] pr-[25px] justify-end flex items-center
          text-right text-[#555555] font-Yekan font-normal text-[20px] mb-[8px] dark:text-slate-100 dark:bg-slate-600"
          >
            دوره های مرتبط
          </div>

       
<<<<<<< HEAD
=======
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
>>>>>>> 1aed3ebea187b2acd642d800085e6815e00213f4
        </div>
      </div>

      <div className="  max-xl:right-16 max-sm:w-full max-sm:left-0   max-lg:right-8 max-lg:top-[303px] max-2xl:right-20 absolute right-24 top-[430px]  w-[809px]   max-2xl:top-[398px] max-xl:top-[335px] max-md:top-[1370px] max-md:left-5 max-2xl:w-[700px] max-lg:w-[400px] max-xl:w-[520px] max-md:w-[500px] max-md:mx-auto">
        {/* Description section */}

<<<<<<< HEAD
        <Description  courseId = {courseId}/>
        {/* headlines */}

        <HeadLines />

        {/* comments */}

        <h4 className=" mark mt-5 max-xl:text-[20px] dark:text-slate-300  ">
          نظرات
        </h4>
        <div className="max-lg:w-full max-xl:w-full]  max-sm:w-full max-md:w-[500px]">
        
          <Comment courseId={courseId}/>
        </div>
      </div>
=======
        <div className="  max-xl:right-16 max-sm:w-full max-sm:left-0   max-lg:right-8 max-lg:top-[303px] max-2xl:right-20 absolute right-24 top-[430px]  w-[809px]   max-2xl:top-[398px] max-xl:top-[335px] max-md:top-[1370px] max-md:left-5 max-2xl:w-[700px] max-lg:w-[400px] max-xl:w-[520px] max-md:w-[500px] max-md:mx-auto">
          {/* Description section */}
          <Description/>

          {/* headlines */}   
          <HeadLines/>

          {/* comments */}
          
          <h4 className=" mark mt-5 max-xl:text-[20px] dark:text-slate-300  ">نظرات</h4><div className="max-lg:w-full max-xl:w-full]  max-sm:w-full max-md:w-[500px]">
          {/* <Comments width={"w-[809px]"} height={"h-852px"} courseId={courseId}/> */}
          
          </div>

       
          
       </div>
     
>>>>>>> 1aed3ebea187b2acd642d800085e6815e00213f4
    </div>
  );
};

export default CourseDetial;


