import { useQuery } from "@tanstack/react-query";
import { getCommentCourse, getReplyCourse } from "../apiComment";



export function useCommentCourse(courseId ) {
    const query = useQuery({
      queryKey: ["commentCourse", courseId ],
      queryFn: () => getCommentCourse(courseId ),
    });
  
    return query;
  }


  export function useReplyCourse(courseId , commentId ) {
    const query = useQuery({
      queryKey: ["replyCourse", courseId , commentId ],
      queryFn: () => getReplyCourse(courseId , commentId ),
    });
  
    return query;
  }


 