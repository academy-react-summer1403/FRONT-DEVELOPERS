import { useQuery } from "@tanstack/react-query";
import { getCommentCourse, getReplyCourse } from "../apiComment";



export function useCommentCourse(courseId , token) {
    const query = useQuery({
      queryKey: ["commentCourse", courseId , token],
      queryFn: () => getCommentCourse(courseId , token),
    });
  
    return query;
  }


  export function useReplyCourse(courseId , reply , token) {
    const query = useQuery({
      queryKey: ["replyCourse", courseId , reply , token],
      queryFn: () => getReplyCourse(courseId , reply , token),
    });
  
    return query;
  }


 