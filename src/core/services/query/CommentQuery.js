import { useQuery } from "@tanstack/react-query";
import { getCommentCourse, getCommentNews, getReplyCourse, getReplyNews } from "../apiComment";



export function useCommentCourse(courseId ) {
    const query = useQuery({
      queryKey: ["commentCourse", courseId ],
      queryFn: () => getCommentCourse(courseId ),
    });
  
    return query;
  }


  export function useReplyCourse( courseId, id ) {
    const query = useQuery({
      queryKey: ["replyCourse",  courseId , id],
      queryFn: () => getReplyCourse(  courseId ,id ),
    });
  
    return query;
  }


   export function useCommentNews(NewsId ) {
    const query = useQuery({
      queryKey: ["commentNews", NewsId ],
      queryFn: () => getCommentNews(NewsId),
    });
  
    return query;
  }


  export function useReplyNews(Id ) {
    const query = useQuery({
      queryKey: ["replyCourse",Id ],
      queryFn: () => getReplyNews(Id ),
    });
  
    return query;
  }