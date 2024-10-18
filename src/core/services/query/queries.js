import { useQuery } from "@tanstack/react-query";

import {
  categoryCourses,
  getCourse,
  getCourseId,
  getCourseLanding,
  getLandingReport,
  getNews,
  getNewsId,
  LevelCourses,
  TypeCourses,
} from "../getApi";


export function useNewsData(params , page ) {
  return useQuery({
    queryKey: ["news", params,page ],
    queryFn: () => getNews( params, page  ),
  });
}

export function useArticleDetail(id) {
  const query = useQuery({
    queryKey: ["newsdetail", id],
    queryFn: () => getNewsId(id),
  });

  return query;
}

export function useCourses(page , params ,view1) {
  return useQuery({
    queryKey: ["courses",  params , page,view1  ],
    queryFn: () => getCourse(  params , page,view1),
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

export function useCourseLanding(query){
  return useQuery({
    queryKey:["landingCourse" , query],
    queryFn:()=>getCourseLanding(query)
  })
}

export function useLandingReport(){
  return useQuery({
    queryKey:["landingCourse" ],
    queryFn:()=>getLandingReport()
  })
}

