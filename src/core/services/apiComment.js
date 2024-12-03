import http from "./interceptor";


// news API : 
  export const getCommentNews =  (NewsId ) => {
    const data =  http.get(`/News/GetNewsComments?NewsId=${NewsId}` );
    return data;
  };

  export const getReplyNews = async (Id ) => {
    const data = await http.get(`/News/GetRepliesComments?Id=${Id}`);
    return data;
  };

  export const likeComment = async ( likeparams ) => {
    const data = await http.post(`/News/CommentLike/${likeparams.CommentId}`, likeparams)

    console.log(data);
    return data;
  };
  export const deleteLikeComment = async ( params ) => {
    const data = await http.delete("/News/DeleteCommentLikeNews" ,{data : params}  )

    console.log(data);
    return data;
  };

  export const postCommentNews = async ( params ) => {
    const data = await http.post("/News/CreateNewsComment" , params  )

    console.log("data" ,data);
    return data;
  };

  export const postReplyNews = async ( params ) => {
    const data = await http.post("/News/CreateNewsReplyComment" , params  )

    console.log("data" ,data);
    return data;
  };






// Course API :

export const getCommentCourse =  (courseId ) => {
    const data =  http.get(`/Course/GetCourseCommnets/${courseId}` );
    return data;
  };


  export const getReplyCourse = async (courseId ,id ) => {
    const data = await http.get(`/Course/GetCourseReplyCommnets/${courseId}/${id}`);
    return data;
  };


  
  export const postCourseCommentLike = async (id)=>{
    const response =await http.post(`/Course/AddCourseCommentLike?CourseCommandId=${id}` )
    return response;
  }
  export const deleteCourseCommentLike = async ( CourseCommandId ) => {
    const data = await http.delete(`/Course/DeleteCourseCommentLike?CourseCommandId=${CourseCommandId}` )
    return data;
  };
  export const dislikeCourseComment = async ( disslikeparams ) => {
    const data = await http.post(`/Course/AddCourseCommentDissLike?CourseCommandId=${disslikeparams}` )
     
    
    return data;
  };


  export const replyComment = async ( formData ) => {
    const data = await http.post("/Course/AddReplyCourseComment" , formData  )
    return data;
  };

  export const deleteCommentCourse = async ( params ) => {
    const data = await http.delete("/Course/DeleteCourseComment" , params  )
    return data;
  };


  export const postCommentCourse = async ( formData ) => {
    const data = await http.post("/Course/AddCommentCourse" ,formData  )
    return data;
  };


  // export const rejectComment = async ( params ) => {
  //   const data = await http.post("/Course/RejectCourseComment" ,params  )

  //   console.log(data);
  //   return data;
  // };

  // export const AcceptComment = async ( send ) => {
  //   const data = await http.post("/Course/AcceptCourseComment" ,send  )

  //   console.log(data);
  //   return data;
  // };


