import http from "./interceptor";


export const getCommentCourse =  (courseId ) => {
    const data =  http.get(`/Course/GetCourseCommnets/${courseId}` );
    return data;
  };


  export const getCommentNews =  (NewsId ) => {
    const data =  http.get(`/News/GetNewsComments?NewsId=${NewsId}` );
    return data;
  };

  export const getReplyCourse = async (id , courseId ) => {
    const data = await http.get(`/Course/GetCourseReplyCommnets/${courseId}/${id}`);
    console.log(data);
    return data;
  };
  


  export const getReplyNews = async (Id ) => {
    const data = await http.get(`/News/GetRepliesComments?Id=${Id}`);
    console.log(data);
    return data;
  };



  

  export const postLike = async (params ,token)=>{
    const response =await http.post("/Course/AddCourseCommentLike", params ,  {
      headers:{
        Authorization:"Bearer " + token
      }
    } )
    console.log(response)
    return response;
  }



  export const likeComment = async ( likeparams ) => {
    const data = await http.post("/Course/AddCourseCommentLike" , null , {
      params:likeparams
    } )

    console.log(data);
    return data;
  };

  export const dislikeComment = async ( likeparams ) => {
    const data = await http.post("/Course/AddCourseCommentDissLike" , null , {
      params:likeparams
    } )

    console.log(data);
    return data;
  };

  export const postComment = async ( formData ) => {
    const data = await http.post("/Course/AddCommentCourse" ,formData  )

    console.log(data);
    return data;
  };

  export const replyComment = async ( formData ) => {
    const data = await http.post("/Course/AddReplyCourseComment" ,formData  )

    console.log(data);
    return data;
  };

  export const deleteComment = async ( params ) => {
    const data = await http.delete("/Course/DeleteCourseComment" , params  )

    console.log(data);
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


