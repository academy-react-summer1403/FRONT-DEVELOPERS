import { useQuery } from "@tanstack/react-query";

import { getCourse, getNews } from "../api";



export function useNewsData() {
    return useQuery({
      queryKey: ["news"],
      queryFn: () => getNews(),
      
    });
  }

  export function useCourses() {
    return useQuery({
      queryKey: ["courses"],
      queryFn: () => getCourse(),
      
    });
  }
