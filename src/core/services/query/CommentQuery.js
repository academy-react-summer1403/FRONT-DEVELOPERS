// import { useQuery } from "@tanstack/react-query";
// import { getCommentCourse, getCommentNews, getReplyCourse, getReplyNews } from "../apiComment";



// export function useCommentCourse(courseId ) {
//     const query = useQuery({
//       queryKey: ["commentCourse", courseId ],
//       queryFn: () => getCommentCourse(courseId ),
//     });
  
//     return query;
//   }


//   export function useReplyCourse(id , courseId) {
//     const query = useQuery({
//       queryKey: ["replyCourse", id , courseId ],
//       queryFn: () => getReplyCourse(id , courseId  ),
//     });
  
//     return query;
//   }


//    export function useCommentNews(NewsId ) {
//     const query = useQuery({
//       queryKey: ["commentNews", NewsId ],
//       queryFn: () => getCommentNews(NewsId),
//     });
  
//     return query;
//   }


//   export function useReplyNews(Id , parentId) {
//     const query = useQuery({
//       queryKey: ["replyCourse",Id , parentId],
//       queryFn: () => getReplyNews(Id , parentId),
//     });
  
//     return query;
//   }