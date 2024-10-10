import { useQuery } from "@tanstack/react-query";

import { getCourse,  getCourseId,  getNews, getNewsId } from "../api";



export function useNewsData(query) {
    return useQuery({
      queryKey: ["news" , query],
      queryFn: () => getNews(query),
      
    });
  }


  export function useArticleDetail(id) {
    const query = useQuery({
      queryKey: ["newsdetail", id],
      queryFn: () => getNewsId(id),
    });
  
    return query;
  }



  export function useCourses(query) {
    return useQuery({
      queryKey: ["courses" , query],
      queryFn: () => getCourse(query),
      
    });
  }


  export function useCourseId(courseId) {
    const query = useQuery({
      queryKey: ["courseId", courseId],
      queryFn: () => getCourseId(courseId),
    });
  
    return query;
  }





  