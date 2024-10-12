import { useQuery } from "@tanstack/react-query";

import {
  categoryCourses,
  getCourse,
  getCourseId,
  getNews,
  getNewsId,
  LevelCourses,
  TypeCourses,
} from "../getApi";


export function useNewsData(query , page , sort) {
  return useQuery({
    queryKey: ["news", query , page , sort],
    queryFn: () => getNews(query , page , sort),
  });
}

export function useArticleDetail(id) {
  const query = useQuery({
    queryKey: ["newsdetail", id],
    queryFn: () => getNewsId(id),
  });

  return query;
}

export function useCourses(page , params ) {
  return useQuery({
    queryKey: ["courses",  params , page  ],
    queryFn: () => getCourse(  params , page),
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



