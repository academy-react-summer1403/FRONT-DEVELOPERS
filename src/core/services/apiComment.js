import http from "./interceptor";


export const getCommentCourse = async (courseId) => {
    const data = await http.get(`/Course/GetCourseCommnets/${courseId}`);
    console.log(data);
    return data;
  };

  export const getReplyCourse = async (courseId , reply) => {
    const data = await http.get(`/Course/GetCourseReplyCommnets/${courseId}/${reply}`);
    console.log(data);
    return data;
  };

  export const postAddComment = async (comment) => {
    const data = await http.post("/Course/AddCommentCourse" , comment);
    console.log(data);
    return data;
  };



