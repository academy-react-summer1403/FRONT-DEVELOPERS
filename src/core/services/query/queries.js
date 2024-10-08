import {  useQuery } from "@tanstack/react-query";
import { getNews } from "../api";



export function useNewsData() {
    return useQuery({
      queryKey: ["news" ],
      queryFn: () => getNews(),

    });
  }

 