import React, { useState } from 'react';
import { useMyCoursesComments, useMyNewsComments } from '../../../core/services/query/DashboardQuery';
import CourseComments from './CourseComments';
import NewsComments from './NewsComments';
import NotFound from '../../notFound/NotFound';

const PointOfMap = ({ search , category}) => {
  const myCoursesComments = useMyCoursesComments();
  const myNewsComments = useMyNewsComments();


  // COURSE : 

    // Filter Courses Data Based on Search
    const filteredCourseData =
      myCoursesComments.data?.myCommentsDtos?.filter((f) =>
        f.courseTitle?.toLowerCase().includes(search.toLowerCase())
      ) || [];

    // States for course Pagination
    const [currentCoursePage, setCurrentCoursePage] = useState(1);
    const itemsPerPage = 5; // Number of items per page
      // Paginated Course Data
      const paginatedData = filteredCourseData?.slice(
        (currentCoursePage-1) * itemsPerPage,
        currentCoursePage * itemsPerPage
      );
    const totalCoursePages = Math.ceil((filteredCourseData?.length || 0) / itemsPerPage);



  // NEWES :

    // Filter News Data Based on Search
    const filteredNewsData =
      myNewsComments.data?.myNewsCommetDtos?.filter((f) =>
        f.courseTitle?.toLowerCase().includes(search.toLowerCase())
      ) || [];

      // States for course Pagination
    const [currentNewsPage, setCurrentNewsPage] = useState(1);
    const NewsitemsPerPage = 5; // Number of items per page
      // Paginated Course Data
      const paginatedNewsData = filteredNewsData?.slice(
        (currentNewsPage-1) * NewsitemsPerPage,
        currentNewsPage * NewsitemsPerPage
      );
    const totalNewsPages = Math.ceil((filteredCourseData?.length || 0) / itemsPerPage);



  const noResults = filteredCourseData.length  && filteredNewsData.length ;

  
  

  return (
    <div>
      {noResults === "" ? (
        <div className="relative w-96 flex mx-auto">
          <NotFound />
        </div>
      ) : (
        <>
          {
            category == "اخبار" ? <> {filteredNewsData.length > 0 && <NewsComments paginatedNewsData={paginatedNewsData} setCurrentNewsPage={setCurrentNewsPage} currentNewsPage={currentNewsPage} totalNewsPages={totalNewsPages} />} </> :
            <> {filteredCourseData.length > 0 && <CourseComments paginatedData={paginatedData} setCurrentCoursePage={setCurrentCoursePage} currentCoursePage={currentCoursePage} totalCoursePages={totalCoursePages}/>} </> 

        
          }
          
          
        </>
      )}
    </div>
  );
};

export default PointOfMap;
