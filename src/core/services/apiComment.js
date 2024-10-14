import http from "./interceptor";


export const getCommentCourse = async (courseId , token) => {
    const data = await http.get(`/Course/GetCourseCommnets/${courseId}` , {
      headers:{
        Authorization:"Bearer " + token
      }
    });
    console.log(data);
    return data;
  };

  export const getReplyCourse = async (courseId , reply , token) => {
    const data = await http.get(`/Course/GetCourseReplyCommnets/${courseId}/${reply}` , {
      headers:{
        Authorization:"Bearer " + token
      }
    });
    console.log(data);
    return data;
  };





