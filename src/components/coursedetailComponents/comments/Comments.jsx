import React, {  useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCommentCourse, useReplyCourse } from "../../../core/services/query/CommentQuery";
// import { postAddComment } from "../../../core/services/apiComment";
import http from "../../../core/services/interceptor"




const Comments = ({width,height , courseId }) => {

  const [showMore, setShowMore] = useState(true);






  const onSubmit =async (e)=>{
    e.preventDefault();



    const formData = new FormData(e.target);
    formData.append("CourseId", courseId);
    formData.append("Title", Title);
    formData.append("Describe", Describe);

    
    const token = localStorage.getItem("token")
    console.log(token)
    
  const res = await http.post("/Course/AddCommentCourse" , formData , {
    headers:{
      Authorization:"Bearer " + token
    }
  })

  console.log(res)
  
  return res
  }


  const [reply , setReply] = useState();
  console.log(reply)

    const token = localStorage.getItem("token")
    console.log(token)

  const GetComment = useCommentCourse(courseId , token);
  console.log(GetComment.data?.id);   /*  dont accept (GetComment.data?.id) */

  useEffect(()=>{
    setReply(GetComment.data?.[0].id)
  })


  const replyCourse = useReplyCourse(courseId , reply , token);
  console.log(replyCourse)



  
  

  return (
    <>
      <div className="mt-[15px] ">

        {/* comments */}
        <div className=" relative  w-full  ">
          
          <div
            style={{ boxShadow: " 0px 1px 2px 0 rgba(0, 0, 0, 0.25)" }}
            className={`bg-white dark:bg-slate-700 mt-[15px] max-lg:mt-[8px] rounded-[15px] w-full   ${width} max-xl:w-full max-lg:w-full     p-[20.5px] gap-[20.5px] justify-normal overflow-hidden ${
              showMore ? {height}  : "h-[]"
            }`}
          >
            <div className=" w-full h-[37px] mb-[20.5px] ">

              {/* new comment button */}
              <button className="  w-[185px] h-[37px] max-xl:w-[170px] max-xl:h-[37px] rounded-[7px] dark:bg-[#FF8A00] bg-[#00E2DC] flex items-center justify-center  gap-2 ">
                <h3 className="font-normal font-Yekan text-[15px] text-[#005653] dark:text-white">
                  ارسال دیدگاه جدید
                </h3>


                <svg
                  width="17"
                  height="16"
                  className=" dark:stroke-white stroke-[#005351]"
                
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.82813 7.5C5.82813 7.57874 5.79685 7.65425 5.74117 7.70992C5.6855 7.7656 5.60999 7.79687 5.53125 7.79687C5.45251 7.79687 5.377 7.7656 5.32133 7.70992C5.26565 7.65425 5.23438 7.57874 5.23438 7.5C5.23438 7.42126 5.26565 7.34575 5.32133 7.29008C5.377 7.2344 5.45251 7.20312 5.53125 7.20312C5.60999 7.20312 5.6855 7.2344 5.74117 7.29008C5.79685 7.34575 5.82813 7.42126 5.82813 7.5ZM5.82813 7.5H5.53125M8.79688 7.5C8.79688 7.57874 8.7656 7.65425 8.70992 7.70992C8.65425 7.7656 8.57874 7.79687 8.5 7.79687C8.42126 7.79687 8.34575 7.7656 8.29008 7.70992C8.2344 7.65425 8.20313 7.57874 8.20313 7.5C8.20313 7.42126 8.2344 7.34575 8.29008 7.29008C8.34575 7.2344 8.42126 7.20312 8.5 7.20312C8.57874 7.20312 8.65425 7.2344 8.70992 7.29008C8.7656 7.34575 8.79688 7.42126 8.79688 7.5ZM8.79688 7.5H8.5M11.7656 7.5C11.7656 7.57874 11.7343 7.65425 11.6787 7.70992C11.623 7.7656 11.5475 7.79687 11.4688 7.79687C11.39 7.79687 11.3145 7.7656 11.2588 7.70992C11.2032 7.65425 11.1719 7.57874 11.1719 7.5C11.1719 7.42126 11.2032 7.34575 11.2588 7.29008C11.3145 7.2344 11.39 7.20312 11.4688 7.20312C11.5475 7.20312 11.623 7.2344 11.6787 7.29008C11.7343 7.34575 11.7656 7.42126 11.7656 7.5ZM11.7656 7.5H11.4688M15.625 7.5C15.625 11.1068 12.4346 14.0312 8.5 14.0312C7.81694 14.0321 7.13678 13.9424 6.47729 13.7645C5.54769 14.4183 4.41367 14.7153 3.28292 14.6012C3.1572 14.5891 3.03201 14.572 2.90767 14.5498C3.29785 14.0899 3.56433 13.5382 3.68192 12.9467C3.75317 12.5849 3.57663 12.2334 3.31221 11.9761C2.11125 10.8076 1.375 9.23296 1.375 7.5C1.375 3.89317 4.56542 0.96875 8.5 0.96875C12.4346 0.96875 15.625 3.89317 15.625 7.5Z"
                   
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <form 
                  onSubmit={(values) => onSubmit(values)}
            
            >
              <div className="bg-red-500 w-[300px] h-[30px] mb-20">
              {/* <input type="text" placeholder="Reply" className="w-[100%] h-[100%] border border-red-300 outline-none"
                  id="CourseId"  name="CourseId" value={courseId}
                /> */}
                <input type="text" placeholder="Reply" className="w-[100%] h-[100%] border border-red-300 outline-none"
                  id="Title" name="Describe" 
                />
                 <input type="text" placeholder="Reply" className="w-[100%] h-[100%] border border-red-300 outline-none"
                  id="Describe" name="Title" 
                />
                </div>
                <button type="submit" className="bg-blue-100 w-[60px] h-[20px] mb-10">click</button>
            </form>
            

            {/* map commnets */}
            <motion.div
             initial={{ x:0,opacity:0,y:-200}}
             animate={{ x:0,y:0,opacity:1}}
             transition={{type:"spring" , stiffness:70,duration:3 , delay:0}}
              className={` w-full   flex flex-wrap gap-[20.5px]  overflow-hidden ${
                showMore ? "h-[700px] max-md:h-[400px] max-md:gap-20" : "h-[] max-md:gap-[20.5px]"
              }`}
            >
              {GetComment.data?.map((data, index) => (
                <div
                  key={index}
                  className=" p-[20.5px] w-full bg-[#f9f9f9] dark:bg-slate-800 rounded-[7px]"
                >
                  <div className="w-full h-[117]  flex justify-end flex-wrap">
                    <div className="h-[60px] w-full  flex justify-between flex-row-reverse">
                      <div className="flex flex-row-reverse  ">


                        {/* comment details */}
                        <div className=" profile ">{data?.author}</div>

                        <div className="text-right">
                          <h3 className=" commentname  max-lg:text-[12px]   max-lg:line-clamp-1 max-md:text-[15px]  max-md:line-clamp-none  ">
                            {" "}
                            {data.person} | {data.username}
                          </h3>
                          <h4 className=" datecomment ">{data?.insertDate}</h4>
                        </div>
                      </div>


                      {/* like & dislike & reply svg */}
                      <div className="  flex  flex-row-reverse gap-3">
                        <h1 className=" like max-lg:text-[13px] max-md:text-[16px]">{data?.disslikeCount}</h1>
                        <svg
                       
                          width="20"
                          height="19"
                            className=" max-lg:w-[15px] max-lg:h-[17px] bg-blue-400"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.87317 11.9791H3.00767C2.06717 11.9791 1.22475 11.343 1.12483 10.407C1.08324 10.0158 1.06243 9.62259 1.0625 9.22913C1.0625 6.61846 1.97183 4.22046 3.49075 2.33488C3.84642 1.89304 4.3955 1.66663 4.962 1.66663H8.64333C9.08664 1.66636 9.5271 1.73755 9.94775 1.87746L12.8023 2.83079C13.2229 2.97071 13.6634 3.0419 14.1067 3.04163H15.2928M5.87317 11.9791C6.43967 11.9791 6.78158 12.6428 6.53775 13.1543C6.09984 14.0759 5.8734 15.0838 5.875 16.1041C5.875 16.6511 6.0923 17.1757 6.47909 17.5625C6.86589 17.9493 7.39049 18.1666 7.9375 18.1666C8.11984 18.1666 8.2947 18.0942 8.42364 17.9653C8.55257 17.8363 8.625 17.6615 8.625 17.4791V16.8989C8.625 16.3736 8.72583 15.8539 8.92017 15.3662C9.19883 14.6695 9.77267 14.147 10.4354 13.7941C11.4529 13.2512 12.3458 12.5019 13.0571 11.5941C13.5136 11.013 14.1809 10.6041 14.9198 10.6041H15.2717M5.87317 11.9791H7.89167M15.2928 3.04163C15.302 3.08746 15.3185 3.13329 15.3396 3.17729C15.8832 4.27729 16.1875 5.51479 16.1875 6.82288C16.1875 8.18596 15.8575 9.47204 15.2717 10.6041M15.2928 3.04163C15.2232 2.70704 15.4606 2.35413 15.8199 2.35413H16.6523C17.4672 2.35413 18.2225 2.82896 18.4599 3.60813C18.7707 4.62563 18.9375 5.70454 18.9375 6.82288C18.9375 8.24646 18.6671 9.60588 18.1758 10.8544C17.8953 11.5639 17.1802 11.9791 16.4176 11.9791H15.4523C15.0197 11.9791 14.7694 11.4695 14.994 11.0991C15.0923 10.9374 15.1849 10.7723 15.2717 10.6041"
                            stroke="#D47300"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <h1 className=" like max-lg:text-[13px] max-md:text-[16px]"
                        
                         
                        > {data?.likeCount}

                        </h1>

                        <svg
                          width="20"
                          height="19"
                            className= "max-lg:w-[15px] max-lg:h-[17px]  bg-red-500"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                         
            
                        >
                          <path
                            d="M5.08025 8.39587C5.81909 8.39587 6.4855 7.98704 6.942 7.40587C7.65357 6.49802 8.54682 5.74871 9.56459 5.20587C10.2273 4.85387 10.8021 4.32954 11.0798 3.63379C11.2749 3.14635 11.3751 2.62615 11.375 2.10112V1.52087C11.375 1.33854 11.4474 1.16367 11.5764 1.03474C11.7053 0.905807 11.8802 0.833374 12.0625 0.833374C12.6095 0.833374 13.1341 1.05067 13.5209 1.43747C13.9077 1.82426 14.125 2.34887 14.125 2.89587C14.125 3.95187 13.8867 4.95196 13.4623 5.84571C13.2184 6.35721 13.5603 7.02087 14.1268 7.02087M14.1268 7.02087H16.9923C17.9328 7.02087 18.7753 7.65704 18.8752 8.59296C18.9164 8.97979 18.9375 9.37212 18.9375 9.77087C18.9413 12.2792 18.0841 14.7128 16.5093 16.6651C16.1536 17.107 15.6045 17.3334 15.038 17.3334H11.3567C10.9139 17.3334 10.473 17.2619 10.0523 17.1225L7.19775 16.1692C6.7771 16.0293 6.33665 15.9581 5.89334 15.9584H4.412M14.1268 7.02087H12.0625M4.412 15.9584C4.48809 16.1463 4.57059 16.3296 4.6595 16.5102C4.84009 16.8769 4.588 17.3334 4.18009 17.3334H3.34775C2.53284 17.3334 1.7775 16.8585 1.54009 16.0794C1.22259 15.0373 1.06164 13.9539 1.0625 12.8646C1.0625 11.441 1.33292 10.0816 1.82425 8.83312C2.10475 8.12362 2.81975 7.70837 3.58334 7.70837H4.54859C4.98125 7.70837 5.2315 8.21804 5.00692 8.58837C4.22399 9.87716 3.81106 11.3567 3.81342 12.8646C3.81342 13.9591 4.02609 15.0032 4.41292 15.9584H4.412Z"
                            stroke="#D47300"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <svg
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
                            fill="#01B4AF"
                          />
                        </svg>
                      </div>
                    </div>

                    <hr className="border-[1px] border-[#EDEDED] w-full mt-[5px] mb-[10px]" />

                    {/* text comment */}

                    <div className="h-[60px]  ">
                      <p className=" comment text-[13px] max-lg:text-[11px]  max-md:text-[12px]">{data?.describe}</p>
                    </div>
                  </div>

                  {
                     replyCourse.data?.map((item)=>(

                         <div
                    style={{ boxShadow: "inset 0px 1px 2px 0px #00000040 " }}
                    className="border-r-[4px] border-r-[#01CEC9] dark:border-r-[#FF8A00] p-[23.5px] w-full h-[160px] flex flex-wrap justify-end dark:bg-slate-900 bg-[#ECECEC] rounded-[10px]"
                  >
                    <div className="h-[60px] w-full  flex justify-between flex-row-reverse">

                      {/* reply details */}
                      <div className="flex flex-row-reverse  ">
                        <div className="profile">{item?.pictureAdress}</div>

                        <div className="text-right">
                          <h3 className="commentname  max-lg:text-[11px] max-md:text-[15px]  ">
                            {" "}
                              {item?.author}
                          </h3>
                          <h4 className="datecomment">{item?.title}</h4>
                        </div>
                      </div>

                      {/* reply svg like& dislike & reply */}

                      <div className="  flex  flex-row-reverse gap-3  max-lg:gap-1 max-md:gap-3  ">
                        <h1 className=" like leading-[15px]">
                          {item?.disslikeCount}
                        </h1>
                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.23718 8.86272H3.06637C2.35388 8.86272 1.71569 8.38078 1.64 7.67176C1.60849 7.37535 1.59272 7.07748 1.59277 6.77941C1.59277 4.80165 2.28166 2.985 3.43234 1.55654C3.70178 1.22182 4.11775 1.05029 4.54691 1.05029H7.33578C7.67161 1.05009 8.00529 1.10402 8.32396 1.21001L10.4864 1.93223C10.8051 2.03822 11.1388 2.09216 11.4746 2.09195H12.3732M5.23718 8.86272C5.66635 8.86272 5.92537 9.36549 5.74065 9.75299C5.4089 10.4512 5.23736 11.2147 5.23857 11.9877C5.23857 12.4021 5.40319 12.7995 5.69622 13.0925C5.98924 13.3856 6.38666 13.5502 6.80106 13.5502C6.93919 13.5502 7.07167 13.4953 7.16934 13.3976C7.26701 13.3 7.32189 13.1675 7.32189 13.0293V12.5898C7.32189 12.1919 7.39828 11.7981 7.5455 11.4287C7.75661 10.9009 8.19132 10.5051 8.6934 10.2377C9.46419 9.82641 10.1407 9.25876 10.6795 8.57106C11.0253 8.13078 11.5309 7.82106 12.0906 7.82106H12.3573M5.23718 8.86272H6.76634M12.3732 2.09195C12.3802 2.12667 12.3927 2.16139 12.4086 2.19473C12.8204 3.02805 13.051 3.96554 13.051 4.95651C13.051 5.98914 12.801 6.96343 12.3573 7.82106M12.3732 2.09195C12.3205 1.83848 12.5003 1.57112 12.7725 1.57112H13.4031C14.0204 1.57112 14.5927 1.93084 14.7725 2.52111C15.0079 3.29194 15.1343 4.10929 15.1343 4.95651C15.1343 6.03497 14.9295 7.06482 14.5572 8.01065C14.3447 8.54814 13.8031 8.86272 13.2253 8.86272H12.4941C12.1663 8.86272 11.9767 8.47661 12.1468 8.19606C12.2213 8.07353 12.2915 7.94845 12.3573 7.82106"
                            stroke="#D47300"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <h1 className=" like leading-[15px]">
                          {item?.likeCount}
                        </h1>

                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.45681 7.39049C5.01653 7.39049 5.52138 7.08077 5.86721 6.6405C6.40628 5.95274 7.08297 5.38508 7.854 4.97385C8.35608 4.70718 8.79149 4.30996 9.00191 3.78289C9.14969 3.41362 9.22558 3.01952 9.22552 2.62178V2.18221C9.22552 2.04407 9.28039 1.9116 9.37806 1.81392C9.47574 1.71625 9.60821 1.66138 9.74635 1.66138C10.1607 1.66138 10.5582 1.826 10.8512 2.11902C11.1442 2.41204 11.3088 2.80947 11.3088 3.22386C11.3088 4.02386 11.1283 4.78149 10.8068 5.45856C10.622 5.84606 10.8811 6.34883 11.3102 6.34883M11.3102 6.34883H13.481C14.1935 6.34883 14.8317 6.83077 14.9074 7.5398C14.9387 7.83285 14.9546 8.13007 14.9546 8.43215C14.9575 10.3324 14.3081 12.176 13.1151 13.655C12.8456 13.9897 12.4297 14.1613 12.0005 14.1613H9.21163C8.87621 14.1613 8.54219 14.1071 8.22344 14.0015L6.06096 13.2793C5.74229 13.1733 5.40861 13.1194 5.07278 13.1196H3.95057M11.3102 6.34883H9.74635M3.95057 13.1196C4.0082 13.262 4.0707 13.4009 4.13806 13.5377C4.27487 13.8154 4.0839 14.1613 3.77487 14.1613H3.14432C2.52697 14.1613 1.95475 13.8015 1.77489 13.2113C1.53437 12.4219 1.41244 11.6011 1.41309 10.7759C1.41309 9.69741 1.61795 8.66756 1.99017 7.72174C2.20266 7.18424 2.74433 6.86966 3.32279 6.86966H4.05404C4.38181 6.86966 4.57139 7.25577 4.40126 7.53632C3.80813 8.51267 3.49531 9.63349 3.4971 10.7759C3.4971 11.605 3.65821 12.396 3.95126 13.1196H3.95057Z"
                            stroke="#D47300"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <svg
                          width="15"
                          height="14"
                          viewBox="0 0 15 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.61804 0.473119C5.71557 0.570774 5.77036 0.703151 5.77036 0.841171C5.77036 0.979191 5.71557 1.11157 5.61804 1.20922L2.34029 4.48697H9.41662C10.6598 4.48697 11.8521 4.98083 12.7311 5.8599C13.6102 6.73896 14.1041 7.93124 14.1041 9.17443C14.1041 10.4176 13.6102 11.6099 12.7311 12.489C11.8521 13.368 10.6598 13.8619 9.41662 13.8619H7.3333C7.19517 13.8619 7.06269 13.807 6.96502 13.7093C6.86735 13.6117 6.81247 13.4792 6.81247 13.3411C6.81247 13.2029 6.86735 13.0704 6.96502 12.9728C7.06269 12.8751 7.19517 12.8202 7.3333 12.8202H9.41662C9.89539 12.8202 10.3695 12.7259 10.8118 12.5427C11.2541 12.3595 11.656 12.0909 11.9946 11.7524C12.3331 11.4139 12.6017 11.0119 12.7849 10.5696C12.9681 10.1273 13.0624 9.6532 13.0624 9.17443C13.0624 8.69565 12.9681 8.22157 12.7849 7.77924C12.6017 7.33691 12.3331 6.935 11.9946 6.59646C11.656 6.25791 11.2541 5.98937 10.8118 5.80615C10.3695 5.62293 9.89539 5.52863 9.41662 5.52863H2.34029L5.61804 8.80638C5.66921 8.85406 5.71025 8.91156 5.73872 8.97545C5.76719 9.03933 5.78249 9.1083 5.78373 9.17823C5.78496 9.24816 5.7721 9.31763 5.7459 9.38248C5.71971 9.44733 5.68072 9.50624 5.63126 9.5557C5.5818 9.60516 5.52289 9.64415 5.45804 9.67034C5.39319 9.69654 5.32372 9.7094 5.25379 9.70817C5.18386 9.70693 5.11489 9.69163 5.051 9.66316C4.98712 9.63469 4.92962 9.59365 4.88194 9.54248L0.715306 5.37585C0.617772 5.2782 0.562988 5.14582 0.562988 5.0078C0.562988 4.86978 0.617772 4.7374 0.715306 4.63975L4.88194 0.473119C4.97959 0.375585 5.11197 0.320801 5.24999 0.320801C5.38801 0.320801 5.52038 0.375585 5.61804 0.473119Z"
                            fill="#01B4AF"
                          />
                        </svg>
                      </div>
                    </div>

                    <hr className="border-[1px] border-[#DDDDDD] w-full mt-[5px] mb-[10px]" />


                    {/* text reply */}
                    <div className="h-[60px]  w-[439px] ">
                      <p className=" comment text-[12px]  max-lg:text-[11px] max-md:text-[12px]  max-md:line-clamp-none  max-lg:line-clamp-3">{item?.describe}</p>
                    </div>
                  </div>
                     ))
                  }

               
                </div>
              ))}
            </motion.div>


            {/* show more button */}

            <button
              onClick={() => setShowMore(!showMore)}
              
              className="border-[#E48900]  dark:border-[#E48900]  dark:text-[#fdb359]  relative border-[1px] text-[#D47300] mt-[20.5px] hover:scale-105 ease-in-out duration-150 
leading-[32px] font-normal font-Yekan text-[12px] flex items-center w-[120px] h-[35px] rounded-[25px] mx-auto justify-center gap-2 max-md:mt-[-50px]   "
            >
              {showMore ? (
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.75 1.125L5 4.875L1.25 1.125"
                    stroke="#E48900"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="10"
                  height="6"
                  className="rotate-180"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.75 1.125L5 4.875L1.25 1.125"
                    stroke="#E48900"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
              مشاهده بیشتر
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
