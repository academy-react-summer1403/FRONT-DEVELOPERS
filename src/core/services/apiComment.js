import http from "./interceptor";


export const getCommentCourse =  (courseId ) => {
    const data =  http.get(`/Course/GetCourseCommnets/${courseId}` );
    return data;
  };


  export const getReplyCourse = async (courseId , reply ) => {
    const data = await http.get(`/Course/GetCourseReplyCommnets/${courseId}/${reply}`);
    console.log(data);
    return data;
  };


  export const likeComment = async ( likeParams ) => {
    const data = await http.post("/Course/AddCourseCommentLike" , likeParams )

    console.log(data);
    return data;
  };

  export const dislikeComment = async ( dislikeParams ) => {
    const data = await http.post("/Course/AddCourseCommentDissLike" , dislikeParams )

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


