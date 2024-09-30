import React, { useState } from "react";
import image from "../../assets/detail/dimage.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import CourseCard from "../../components/coursedetailComponents/coursecard/CourseCard";
import Detail from "../../components/coursedetailComponents/detail/Detail";
import Description from "../../components/coursedetailComponents/Description/Description";
import HeadLines from "../../components/coursedetailComponents/Headlines/HeadLines";
import SameCourses from "../../components/coursedetailComponents/samecourses/SameCourses";
const CourseDetial = () => {

  
  

  return (
    <div className=" container  relative">
      <img
        className=" bottom-0  absolute opacity-[40%] scale-150  rotate-90"
        src="https://s3-alpha-sig.figma.com/img/19be/48f2/2796a9e90ec1b19857e151fc13e21059?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mZW-g30z8Y9kCtc4Q1Y82wXJ5M3YX1ja6v-gYlyazEUHmGj5fgx4YewqoPzoMl4V4J~Y2sETrcyxsiSfnJArb~OKXnzzQcBQwRsRnlSZI5eAqC9mPjX~jPtEjEaaNYlHuPhaUQ671CFaG9FP8BAUgrxGbtub-sQCi8oLtVfkXsjsO4-KqNeUdQpM9MfXLhXrbdziI4zuOcpcn74-w8NTLCgEbqS66Vs7LO4-uoZQC0Kfv6we2O7hov7fqXpvrD8dLTZNQ22GCZ5C9iP6fYmkkQ6sgbL5HZBGy4Ocxh3cxeAgyhp6R56KMjTb~fHkpUTzkxI2T4Z-fBM4z~wSy~mrcw__"
        alt=""
      />


      <div className="flex mt-[35px]  justify-between">
        {/* image section */}
        <div style={{boxShadow:"box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25)"}} className=" h-[395px] w-[624px] ">
          <img className=" h-full w-full  rounded-[15px]" src={image} alt="" />
        </div>
        {/* course detail card */}

        <CourseCard/>
        
      </div>



      <div className="  mt-[35px] flex flex-wrap justify-between ">

        <div className="">
       
          {/* detail section */}
          <Detail/>

          {/* SameCourses section */}

          <SameCourses/>

        </div>

         

        <div className=" ">
          {/* Description section */}

          <Description/>
          {/* headlines */}
          <HeadLines/>
          
        </div>
      </div>
    </div>
  );
};

export default CourseDetial;
