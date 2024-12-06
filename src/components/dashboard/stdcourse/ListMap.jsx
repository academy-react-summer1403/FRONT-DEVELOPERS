import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useMyCourses } from "../../../core/services/query/DashboardQuery";
import { ImageErrore } from "../../ImageErrore";
import DateApi from "../../DateApi";
import NotFound from "../../notFound/NotFound";
import DashPagination from "../DashPagination";

const ListMap = ({ search, category }) => {
  const getMyCourses = useMyCourses();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredData = getMyCourses.data?.listOfMyCourses.filter((f) => {
    const matchesSearch =
      search.trim() === "" ||
      f.courseTitle.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      category === "همه" || f.paymentStatus.includes(category);
    return matchesSearch && matchesCategory;
  });

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
          {paginatedData?.map((item, i) => (
            <ul
              key={i}
              style={{ boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.1)" }}
              className={`relative grid grid-cols-7 gap-9 justify-end mt-3 rounded-md text-[11px] text-center 
                  text-gray-600 font-medium justify-items-center dark:text-white
              ${
                2 === 0
                  ? "bg-gray-100/60 dark:bg-gray-50"
                  : "bg-cyan-50/60 dark:bg-cyan-100/70"
              }`}
            >
              <li className="col-1 flex gap-6">
                <NavLink
                  to={`/courses-detail/${item?.courseId}`}
                  className="col-1"
                >
                  <IoEyeOutline className="text-orange mt-4 ml-5 w-5 h-5 cursor-pointer max-md:mt-2 max-md:ml-2" />
                </NavLink>
              </li>

              <li className="col-1 my-5 ml-4 "> {item?.paymentStatus}</li>
              <li className="col-1 my-5">{item?.cost}</li>
              <li className="col-1 my-5">
                <DateApi dateapi={item?.lastUpdate} />
              </li>
              <li className="col-1 my-5">{item?.fullName}</li>
              <li className="col-1 my-5">{item?.courseTitle}</li>

              <li className="col-1">
                <img
                  src={
                    item?.tumbImageAddress ? (
                      item?.tumbImageAddress
                    ) : (
                      <ImageErrore />
                    )
                  }
                  onError={ImageErrore}
                  alt=""
                  className="rounded-full border w-12 h-12 shadow-md my-1"
                ></img>
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

export default ListMap;
