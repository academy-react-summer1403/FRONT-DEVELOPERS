import { useQuery } from "@tanstack/react-query";
import {  getFavoriteCourse,  getUserProfile, reservCourse } from "../DashApi";



export function useUserProfile() {
    return useQuery({
      queryKey: ["userprofile" ],
      queryFn: () =>  getUserProfile(),
    });
  }


  
// export function useMyCourses(token) {
//   return useQuery({
//     queryKey: ["myCourses" , token],
//     queryFn: () =>  getMyCourses(token),
//   });
// }



  
export function useReserv() {
  return useQuery({
    queryKey: ["reserv" ],
    queryFn: () =>  reservCourse(),
  });
}


export function useFavoriteCourse() {
  return useQuery({
    queryKey: ["favoriteCourse" ],
    queryFn: () =>  getFavoriteCourse(),
  });
}