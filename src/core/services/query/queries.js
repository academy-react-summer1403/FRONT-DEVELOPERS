import { useQuery } from "@tanstack/react-query";

import {
  categoryCourses,
  getCourse,
  getCourseId,
  getCourseLanding,
  getCourseLandingSearchBar,
  getLandingReport,
  getNews,
  getNewsId,
  getNewsPudcast,
  getTopCourse,
  LevelCourses,
  TypeCourses,
} from "../getApi";


export function useNewsData(params , page,rows ) {
  return useQuery({
    queryKey: ["news", params,page,rows  ],
    queryFn: () => getNews( params, page ,rows  ),
  });
}

export function useNewsPudcast( ) {
  return useQuery({
    queryKey: ["newsPudcast"],
    queryFn: () => getNewsPudcast(),
  });
}

export function useArticleDetail(id) {
  const query = useQuery({
    queryKey: ["newsdetail", id],
    queryFn: () => getNewsId(id),
  });

  return query;
}

export function useCourses(  search , params) {
  return useQuery({
    queryKey: ["courses",    search , params],
    queryFn: () => getCourse(   search , params),
  });
}

export function useTopCourses() {
  return useQuery({
    queryKey: ["courses"],
    queryFn: () => getTopCourse(),
  });
}

export function useCourseId(courseId) {
  const query = useQuery({
    queryKey: ["courseId", courseId],
    queryFn: () => getCourseId(courseId),
  });

  return query;
}

export function useCategoryCourses() {
  return useQuery({
    queryKey: ["categoryC"],
    queryFn: () => categoryCourses(),
  });
}

export function useTypeCourses() {
  return useQuery({
    queryKey: ["categoryT"],
    queryFn: () => TypeCourses(),
  });
}

export function useLevelCourses() {
  return useQuery({
    queryKey: ["categoryL"],
    queryFn: () => LevelCourses(),
  });
}

export function useCourseLanding(){
  return useQuery({
    queryKey:["landingCourse" , ],
    queryFn:()=>getCourseLanding()
  })
}

export function useCourseLandingSearchBar(params){
  return useQuery({
    queryKey:["landingCourseSearchBar" , params],
    queryFn:()=>getCourseLandingSearchBar(params)
  })
}

export function useLandingReport(){
  return useQuery({
    queryKey:["landingCourse2" ],
    queryFn:()=>getLandingReport()
  })
}


