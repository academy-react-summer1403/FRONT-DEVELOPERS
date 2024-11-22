import React, { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import { TbTrash } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import { useReserv } from '../../../core/services/query/DashboardQuery';
import { ImageErrore } from '../../ImageErrore';
import DateApi from '../../DateApi';
import NotFound from '../../notFound/NotFound';
import DashPagination from '../DashPagination';
import { FiDollarSign } from 'react-icons/fi';

import { useDeleteReserveCourse } from '../../../core/services/mutation/DashboardMutation';

const ReserveMap = ({ search }) => {
  const Reserv = useReserv();

  // States for Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page


const deleteReserveMyCourse = useDeleteReserveCourse();

const HandleDeleteReserve= (reserveId)=>{
  const params = {
    "id": reserveId,
  };
  if(params){
    deleteReserveMyCourse.mutate(params)
  }
}

  // Filter Data Based on Search
  const filteredData = Reserv.data?.filter((f) =>
    search.trim() === '' || f.courseName.toLowerCase().includes(search.toLowerCase())
  );

  // Paginated Data
  const paginatedData = filteredData?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);

  return (
    <div>
      {filteredData?.length === 0 ? (
        <div className="relative w-96 flex mx-auto">
          <NotFound />
        </div>
      ) : (
        <>
          {paginatedData?.map((item) => (
            <ul
              key={item.reserveId}
              style={{ boxShadow: '0px 1px 1px 0px rgba(0,0,0,0.1)' }}
              className={`relative grid grid-cols-7 my-2 rounded-md text-[10px] text-center 
                  text-gray-600 dark:text-gray-100 font-medium justify-items-center`}
            >
              <li className="col-1 my-2 flex gap-2">
                <TbTrash
                  className="text-secondary mt-4 w-5 h-5 cursor-pointer"
                  onClick={() => HandleDeleteReserve(item?.reserveId)}
                />
                <NavLink to={`/courses-detail/${item?.courseId}`}>
                  <IoEyeOutline className="text-primary dark:text-emerald-800 mt-4 w-5 h-5 cursor-pointer" />
                </NavLink>
              </li>
              <li className="col-1 my-5 text-black dark:text-white"> {item?.accept == true ? "تایید شده " : "در انتظار تایید"} </li>
              <li className="col-1 my-5"> -- </li>
              <li className="col-1 my-5">
                {' '}
                <DateApi dateapi={item?.reserverDate} />{' '}
              </li>
              <li className="col-1 my-5">{item?.studentName}</li>
              <li className="col-1 my-5">{item?.courseName}</li>
              <li className="col-1">
                <img
                  src={'' ? '' : <ImageErrore />}
                  onError={ImageErrore}
                  className="rounded-full border w-12 h-12 col-1 shadow-md my-1 leading-[50px]"
                />
              </li>
            </ul>
          ))}

          {/* Pagination Controls */}
          <DashPagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
        </>
      )}
    </div>
  );
};

export default ReserveMap;
