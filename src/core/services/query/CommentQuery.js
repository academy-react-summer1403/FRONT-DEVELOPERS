import { useQuery } from "@tanstack/react-query";
import { getCommentCourse, getReplyCourse } from "../apiComment";



export function useCommentCourse(courseId) {
    const query = useQuery({
      queryKey: ["commentCourse", courseId],
      queryFn: () => getCommentCourse(courseId),
    });
  
    return query;
  }


  export function useReplyCourse(courseId , reply ) {
    const query = useQuery({
      queryKey: ["replyCourse", courseId , reply],
      queryFn: () => getReplyCourse(courseId , reply),
    });
  
    return query;
  }


 