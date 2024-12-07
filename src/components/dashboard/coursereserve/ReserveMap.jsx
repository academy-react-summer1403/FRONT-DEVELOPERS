import React, { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { TbTrash } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useReserv } from "../../../core/services/query/DashboardQuery";
import { ImageErrore } from "../../ImageErrore";
import DateApi from "../../DateApi";
import NotFound from "../../notFound/NotFound";
import DashPagination from "../DashPagination";

import { deleteReserveCourse } from "../../../core/services/DashApi";
import { FiDollarSign } from "react-icons/fi";
import { HiXCircle } from "react-icons/hi2";

const ReserveMap = ({ search }) => {
  const ReservCourse = useReserv();
  const [Reserv, setReserv] = useState(ReservCourse?.data);
  useEffect(() => {
    if (ReservCourse?.data) {
      setReserv(ReservCourse?.data);
    }
  }, [ReservCourse?.data]);

  // States for Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const HandleDeleteReserve = (reserveId) => {
    const params = {
      id: reserveId,
    };
    deleteReserveCourse(params).then(() => {
      setReserv((prevData) =>
        prevData.filter((item) => item.reserveId !== reserveId)
      );
    });
  };

  // Filter Data Based on Search
  const filteredData = Reserv?.filter(
    (f) =>
      search.trim() === "" ||
      f.courseName.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const paginatedData = filteredData?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);

  const [deletmodal, setDeletmodal] = useState();

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
              style={{ boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.1)" }}
              className={`relative grid grid-cols-6 my-2 rounded-md text-[10px] text-center 
                  text-gray-600 dark:text-gray-100 font-medium justify-items-center`}
            >
              <li className="col-1 my-2 flex gap-2">
                {item?.accept == false ? (
                  <TbTrash
                    className="text-secondary mt-3 w-5 h-5 cursor-pointer"
                    onClick={() => setDeletmodal(item?.courseId)}
                  />
                ) : (
                  <NavLink to={`/payment/${item?.courseId}`}>
                    <FiDollarSign className="text-green mt-3 w-5 h-5 cursor-pointer" />
                  </NavLink>
                )}
                {/* Delet modal :  */}

                <div
                  className={`${
                    deletmodal == item?.courseId ? "block" : "hidden"
                  } fixed left-0 top-0 w-screen h-screen bg-black/70 z-[9999]
                                 backdrop-blur-sm transition-all duration-700`}
                >
                  <div className="bg-white rounded-lg shadow-lg grid gap-3 p-8 mx-auto w-1/3 mt-40">
                    <HiXCircle
                      onClick={() => setDeletmodal(false)}
                      className=" right-4 top-4 w-5 h-5 cursor-pointer text-secondary opacity-100 justify-self-end "
                    />
                    <p className="dark:text-gray-950 text-[20px] text-center">
                      {" "}
                      آیا میخواهید دوره مورد علاقه را حذف کنید؟{" "}
                    </p>
                    <button
                      to={"#"}
                      onClick={() => (
                        HandleDeleteReserve(item?.reserveId),
                        setDeletmodal(false)
                      )}
                      className="bg-secondary p-2 rounded-md text-sm w-20 hover:scale-110
                                    transition duration-500 hover:shadow-md mx-auto text-center"
                    >
                      بله
                    </button>
                  </div>
                </div>

                <NavLink to={`/courses-detail/${item?.courseId}`}>
                  <IoEyeOutline className="text-primary dark:text-emerald-800 mt-3 w-5 h-5 cursor-pointer" />
                </NavLink>
              </li>
              <li className="col-1 my-5 text-black dark:text-white">
                {" "}
                {item?.accept == true ? (
                  <NavLink
                    className="text-green"
                    to={`/payment/${item?.courseId}`}
                  >
                    در انتظار پرداخت
                  </NavLink>
                ) : (
                  "در انتظار تایید"
                )}{" "}
              </li>

              <li className="col-1 my-5">
                {" "}
                <DateApi dateapi={item?.reserverDate} />{" "}
              </li>
              <li className="col-1 my-5">{item?.studentName}</li>
              <li className="col-1 my-5">{item?.courseName}</li>
              <li className="col-1">
                <img
                  src={"" ? "" : <ImageErrore />}
                  onError={ImageErrore}
                  className="rounded-full border w-12 h-12 col-1 shadow-md my-1 leading-[50px]"
                />
              </li>
            </ul>
          ))}

          {/* Pagination Controls */}
          <DashPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
};

export default ReserveMap;
