import { useQuery } from "@tanstack/react-query";
import { getCommentCourse, getReplyCourse } from "../apiComment";



export function useCommentCourse(courseId ) {
    const query = useQuery({
      queryKey: ["commentCourse", courseId ],
      queryFn: () => getCommentCourse(courseId ),
    });
  
    return query;
  }


  export function useReplyCourse(id , courseId) {
    const query = useQuery({
      queryKey: ["replyCourse", id , courseId],
      queryFn: () => getReplyCourse(id , courseId ),
    });
  
    return query;
  }


 