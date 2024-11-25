import React, { useEffect, useState } from "react";
import image from "../../assets/detail/article.jpg";
import RelatedCourses from "../../components/coursedetailComponents/RelatedCourses/RelatedCourses";
import ArticleDescription from "../../components/articledetail/articleDescription/ArticleDescription";
import { motion } from "framer-motion";
import { useArticleDetail } from "../../core/services/query/queries";
import { useParams } from "react-router-dom";
import { samecourses, suggestion } from "../CourseDetail/CourseDetail";
// import { useCommentNews } from "../../core/services/query/CommentQuery";
import BackImg from "../../assets/courses/background.svg";

import DateApi from "../../components/DateApi";
import { useTranslation } from "react-i18next";
import Related from "../../components/skeleton/detail/Related";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDeleteFavoriteNews, usePostFavoriteNews } from "../../core/services/mutation/DetailsMutation";
import NewComment from "../../components/coursedetailComponents/comments/NewComment";

// import { samecourses, suggestion } from "../CourseDetail/CourseDetail";


const ArticleDetail = () => {

  const {t}=useTranslation()

  const { id } = useParams();

  
  const articleDetail = useArticleDetail(id);

 const [save,setSave]=useState(articleDetail?.data?.detailsNewsDto?.isCurrentUserFavorite)
 console.log("save" , save)
  
  console.log("articleDetail" , articleDetail?.data?.detailsNewsDto?.isCurrentUserFavorite)

  
  
  const  addFavoriteNew = usePostFavoriteNews()

  const handleAddFavoriteNews=()=>{
    const params = {
      NewsId: id 
    }

    addFavoriteNew.mutate(params)
    setSave(true)
  }


  const  deleteFavoriteNew = useDeleteFavoriteNews()

  const handleRemoveFavoriteNews=(deleteFavorite)=>{
    const params={
      deleteEntityId:deleteFavorite
    }
    deleteFavoriteNew.mutate(params)
    setSave(false)
  }


  useEffect(() => {
    if (articleDetail?.data) {
      setSave(articleDetail.data.detailsNewsDto?.isCurrentUserFavorite);
    }
  }, [articleDetail?.data]);
 
  

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  }, [])
  


  return (
    <SkeletonTheme baseColor="#cbd5e1" highlightColor="#f5f5f5">
      <div
        className="  relative  container mb-5  max-lg:pt-4" >
     
  <img
          className="bottom-[15%] absolute opacity-[15%] scale-150  -translate-x-72 rotate-90 "
          src="https://s3-alpha-sig.figma.com/img/19be/48f2/2796a9e90ec1b19857e151fc13e21059?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mZW-g30z8Y9kCtc4Q1Y82wXJ5M3YX1ja6v-gYlyazEUHmGj5fgx4YewqoPzoMl4V4J~Y2sETrcyxsiSfnJArb~OKXnzzQcBQwRsRnlSZI5eAqC9mPjX~jPtEjEaaNYlHuPhaUQ671CFaG9FP8BAUgrxGbtub-sQCi8oLtVfkXsjsO4-KqNeUdQpM9MfXLhXrbdziI4zuOcpcn74-w8NTLCgEbqS66Vs7LO4-uoZQC0Kfv6we2O7hov7fqXpvrD8dLTZNQ22GCZ5C9iP6fYmkkQ6sgbL5HZBGy4Ocxh3cxeAgyhp6R56KMjTb~fHkpUTzkxI2T4Z-fBM4z~wSy~mrcw__"
          alt=""
        />
      
    {/*  2 */}
      

        <div className="flex max-2xl:ml-[0%] max-md:mx-auto   max-xl:ml-[-7%] max-lg:ml-[-13%] mt-[35px] max-md:w-full   max-md:h-[650px] w-[479px] max-xl:w-[400px] max-lg:w-[300px]  max-lg:h-[1300px]   h-[1450px]  flex-wrap  justify-between">
          {/* image section */}
          <motion.div
          
          initial={{ x:0,opacity:0,y:-300}}
          animate={{ x:0,y:0,opacity:1}}
          transition={{type:"spring" ,duration:3 , delay:0}}
            style={{ boxShadow: "box-shadow: 0 1px 2px 0 #00000026" }}
            className=" h-[328.15px] max-xl:h-[300.15px] max-lg:h-[250.15px] max-md:hidden w-full bg-gradient-to-bl from-secondary/10 to-primary/10
            rounded-tl-[75px] rounded-[10px] "
          >
            <img
              style={{
                boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
                backdropFilter: " blur(30px)",
              }}
              className="h-[306.6px] max-xl:h-[278.6px] max-lg:w-[278.45px] max-lg:h-[226.6px]  w-[457.45px] max-xl:w-[378.45px]  rounded-tl-[66px] 
          rounded-[10px] mx-auto my-[10.775px]  "
              src={image}
              alt=""
            />
          </motion.div>

          {/* RelatedCourses section */}

          <div
            style={{ boxShadow: " 0px 1px 2px 0 rgba(0, 0, 0, 0.25)" }}
            className="bg-white dark:bg-slate-700 max-xl:w-[400px] max-lg:h-[500px] max-md:w-full max-lg:w-[300px] flex flex-wrap max-md:h-[601px] max-md:justify-between max-md:gap-2  mt-[35px]  rounded-[15px] w-[479px] h-[601px]  p-[23px]"
          >
            <div
              style={{ boxShadow: " 0px 1px 2px 0 rgba(0, 0, 0, 0.25)" }}
              className=" bg-[#E8E8E8] rounded-t-[10px]  w-[448px]
          h-[50px] pr-[25px] justify-end flex items-center
          text-right text-darkgreen font-Yekan
          font-normal text-[20px] mb-[8px] max-lg:text-[18px] max-md:w-full dark:bg-slate-600 dark:text-slate-100"
            >
            {t("related_courses")}
            </div>

            {loading? <Related cards={4}  custumStyle="h-[112px] p-[15px]"  imageStyle="w-[126px] h-[84px]" /> : samecourses.map((data, index) => (
              <RelatedCourses
          
              
          
                
                key={index}
                title={data.title}
                image={data.image}
              />
            ))}
          </div>

          {/* suggestion section */}

          <div
            style={{ boxShadow: " 0px 1px 2px 0 rgba(0, 0, 0, 0.25)" }}
            className="bg-white dark:bg-slate-700 max-xl:w-[400px] max-lg:w-[300px] max-md:w-full flex max-md:h-[470px]  flex-wrap  mt-[35px] max-md:justify-center max-md:gap-2  rounded-[15px] w-[479px] h-[470px]  p-[23px]"
          >
            <div
              style={{ boxShadow: " 0px 1px 2px 0 rgba(0, 0, 0, 0.25)" }}
              className=" bg-[#E8E8E8] rounded-t-[10px]  w-[448px] h-[50px] pr-[25px] justify-end flex items-center
  text-right text-darkgreen font-Yekan font-normal  text-[20px] mb-[8px] max-lg:text-[18px] max-md:w-full dark:bg-slate-600 dark:text-slate-100 "
            >
            {t("suggested_articles")}
            </div>

            {loading? <Related cards={3}  custumStyle="h-[112px] p-[15px]"  imageStyle="w-[126px] h-[84px]" /> :suggestion.map((data, index) => (
              <RelatedCourses
              
                key={index}
                title={data.title}
                image={data.image}
              />
            ))}
          </div>
        </div>


  {/*  1 */}
      <div className="w-[754px] max-xl:w-[600px] ml-[42%] mt-[-113.3%] max-2xl:mt-[-116%] max-2xl:ml-[40%] max-xl:mt-[-161.8%]  max-lg:mt-[-213.8%]   max-lg:ml-[38%] 
      max-md:mt-[110%] max-sm:mt-[140%]  max-md:mx-auto max-lg:w-[450px] max-md:w-full ">

            <motion.div

          initial={{ x:300,opacity:0,y:0}}
          animate={{ x:0,y:0,opacity:1}}
          transition={{type:"spring" ,duration:3 , delay:0}}
            style={{
              boxShadow: "0px 1px 2px 0px #00000040",
              backdropFilter: " blur(7px)",
            }}
            className="h-[159px] max-xl:h-[131px] w-full max-md:rounded-t-[75px] rounded-tr-[75px] rounded-[10px]  rounded-br-[5px]  bg-gradient-to-bl pt-[35px]  pl-[35px] pr-[30px] dark:from-[#ce9e018a]  from-primary/20 to-secondary/20 "
          >
            <div className="flex justify-end  ">
              <h1
                className="text-[25px] max-2xl:text-[19px] max-lg:text-[14px] max-lg:line-clamp-1 max-md:text-[18px] 
                max-xl:text-[17px] font-bold font-Yekan  dark:text-secondary  text-darkgreen text-justify  
                "
              >
              {loading ? <Skeleton width={"200px"}/> : articleDetail.data?.detailsNewsDto.title}
              </h1>

              <div className="head2 dark:bg-secondary relative top-4 ml-2"></div>
            </div>

            <div className=" flex h-[20px] max-md:justify-between mt-10 max-xl:mt-7 flex-nowrap flex-row-reverse justify-end  gap-11 max-lg:gap-5 items-center ">
              <h3 className=" max-2xl:text-[15px] max-xl:text-[13px] max-lg:text-[12px] max-lg:w-24   flex  max-lg:flex-row-reverse  flex-row-reveers text">
            
                <svg
                  width="20"
                  height="19"
                  className="mr-3 max-lg:mr-2"
                
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.01142 9.34433C1.95583 9.18704 1.95583 9.01704 2.01142 8.85975C3.12869 5.69517 6.30007 3.41255 10.0377 3.41255C13.7738 3.41255 16.9436 5.6929 18.0632 8.85596C18.1196 9.01293 18.1196 9.1828 18.0632 9.34054C16.9468 12.5051 13.7754 14.7877 10.0377 14.7877C6.30168 14.7877 3.13111 12.5074 2.01142 9.34433Z"
                    stroke="#AAAAAA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.4543 9.10015C12.4543 9.70352 12.1997 10.2822 11.7465 10.7088C11.2933 11.1355 10.6786 11.3752 10.0377 11.3752C9.39677 11.3752 8.7821 11.1355 8.3289 10.7088C7.8757 10.2822 7.62109 9.70352 7.62109 9.10015C7.62109 8.49677 7.8757 7.91811 8.3289 7.49145C8.7821 7.0648 9.39677 6.82511 10.0377 6.82511C10.6786 6.82511 11.2933 7.0648 11.7465 7.49145C12.1997 7.91811 12.4543 8.49677 12.4543 9.10015Z"
                    stroke="#AAAAAA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> 
                <h3 className="max-2xl:text-[15px] max-xl:text-[13px] max-lg:text-[12px] text mr-1"> 
                  بازدید</h3> {loading ? <Skeleton width={"100px"}/> : articleDetail.data?.detailsNewsDto.currentView} 
              </h3>

              <h3 className=" max-2xl:text-[15px] text max-xl:text-[13px] flex gap-3">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.61914 1.375V3.15625M12.9316 1.375V3.15625M1.65039 13.8438V4.9375C1.65039 4.46508 1.83806 4.01202 2.17211 3.67797C2.50616 3.34392 2.95922 3.15625 3.43164 3.15625H14.1191C14.5916 3.15625 15.0446 3.34392 15.3787 3.67797C15.7127 4.01202 15.9004 4.46508 15.9004 4.9375V13.8438M1.65039 13.8438C1.65039 14.3162 1.83806 14.7692 2.17211 15.1033C2.50616 15.4373 2.95922 15.625 3.43164 15.625H14.1191C14.5916 15.625 15.0446 15.4373 15.3787 15.1033C15.7127 14.7692 15.9004 14.3162 15.9004 13.8438M1.65039 13.8438V7.90625C1.65039 7.43383 1.83806 6.98077 2.17211 6.64672C2.50616 6.31267 2.95922 6.125 3.43164 6.125H14.1191C14.5916 6.125 15.0446 6.31267 15.3787 6.64672C15.7127 6.98077 15.9004 7.43383 15.9004 7.90625V13.8438"
                    stroke="#AAAAAA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {loading ? <Skeleton width={"100px"}/> :
                <DateApi dateapi={articleDetail.data?.detailsNewsDto.updateDate} />
                }
              </h3>

              <h3 className=" max-2xl:text-[15px] text max-xl:text-[13px] flex gap-3   max-lg:text-[12px] max-lg:w-28 max-lg:gap-1">
                <svg
                  width="15"
                  height="17"
                  className="max-lg:h-[13px] max-lg:w-[15px]"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.843 3.69791C10.843 4.44659 10.5208 5.16461 9.94733 5.69401C9.37385 6.22341 8.59605 6.52082 7.78503 6.52082C6.974 6.52082 6.1962 6.22341 5.62272 5.69401C5.04924 5.16461 4.72707 4.44659 4.72707 3.69791C4.72707 2.94923 5.04924 2.23121 5.62272 1.70181C6.1962 1.17241 6.974 0.875 7.78503 0.875C8.59605 0.875 9.37385 1.17241 9.94733 1.70181C10.5208 2.23121 10.843 2.94923 10.843 3.69791ZM1.66992 14.3256C1.69613 12.8444 2.35192 11.4321 3.49587 10.3931C4.63983 9.35422 6.18028 8.77198 7.78503 8.77198C9.38977 8.77198 10.9302 9.35422 12.0742 10.3931C13.2181 11.4321 13.8739 12.8444 13.9001 14.3256C11.9817 15.1377 9.89555 15.5568 7.78503 15.5541C5.60287 15.5541 3.53161 15.1145 1.66992 14.3256Z"
                    stroke="#AAAAAA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
      {loading ? <Skeleton width={"100px"}/> : articleDetail.data?.detailsNewsDto.addUserFullName} 
              
                
              </h3>

              <svg
                width="18"
              onClick={()=>{save ?                 
                  handleRemoveFavoriteNews(articleDetail.data?.detailsNewsDto.currentUserFavoriteId)
                  : handleAddFavoriteNews(articleDetail.data?.detailsNewsDto.id)                
              }}                           
                className={`cursor-pointer  dark:stroke-secondary  max-2xl:w-[16px] h-[18px]  max-xl:h-[16px] max-xl:w-[14px] stroke-primary
                  ${ save ? " fill-primary dark:fill-secondary" :" " }` }
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.593 1.322C15.693 1.45 16.5 2.399 16.5 3.507V19L9 15.25L1.5 19V3.507C1.5 2.399 2.306 1.45 3.407 1.322C7.12319 0.890633 10.8768 0.890633 14.593 1.322Z"
                 
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </motion.div>
          {/* description section */}
          <ArticleDescription id={id} currentUserIsLike={articleDetail.data?.detailsNewsDto?.currentUserIsLike} />
  {/* comment section */}

          <div className="">
            <h4 className="mark mt-5 max-lg:mt-1 max-xl:text-[23px]  dark:text-slate-300   ">{t("comments")}</h4>
            <NewComment id={articleDetail.data?.detailsNewsDto?.id} UserId={articleDetail.data?.detailsNewsDto?.userId}/>
          </div>
      </div>

    
      </div>
    </SkeletonTheme>
  );
};

export default ArticleDetail;
