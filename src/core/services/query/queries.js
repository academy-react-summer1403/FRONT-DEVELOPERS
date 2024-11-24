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
  getNewsLandingSearchBar,
  getNewsPudcast,
  getTopCourse,
  LevelCourses,
  TeacherCourses,
  TypeCourses,
} from "../getApi";
import { StudentCoursePayDetail } from "../level2api";


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

export function useCourses(  search , params ) {
  return useQuery({
    queryKey: ["courses",    search , params ],
    queryFn: () => getCourse(   search , params ),
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

export function useTeacherCourses() {
  return useQuery({
    queryKey: ["Teacher"],
    queryFn: () => TeacherCourses(),
  });
}

export function useCourseLanding(){
  return useQuery({
    queryKey:["landingCourse" , ],
    queryFn:()=>getCourseLanding()
  })
}

export function useCourseLandingSearchBar(params2 , searchCourse){
  return useQuery({
    queryKey:["CourseBar" , params2 , searchCourse],
    queryFn:()=>{
      return getCourseLandingSearchBar(params2 , searchCourse)
    }
  })
}

export function useNewsLandingSearchBar(params , search){
  return useQuery({
    queryKey:["landingNewsSearchBar" , params , search],
    queryFn:()=>getNewsLandingSearchBar(params , search)
  })
}

export function useLandingReport(){
  return useQuery({
    queryKey:["landingCourse2" ],
    queryFn:()=>getLandingReport()
  })
}

export function useStudentCoursePayDetail(Id){
  return useQuery({
    queryKey:["paymentdetail" ],
    queryFn:()=>StudentCoursePayDetail(Id)
  })
}


StudentCoursePayDetail

